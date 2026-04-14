import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  inquiry: z.string().min(10),
  turnstileToken: z.string(),
  authorized_override: z.string().max(0).optional(),
});

const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA';
const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';

// Initialize Supabase (Free Tier ready)
const supabase = (SUPABASE_URL && SUPABASE_ANON_KEY) 
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
  : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Zod Validation
    const result = formSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ message: 'Invalid transmission parameters.' }, { status: 400 });
    }

    const { name, email, company, inquiry, turnstileToken, authorized_override } = result.data;

    // 2. Honeypot check
    if (authorized_override) {
      console.warn(`[SECURITY] Bot detected via honeypot.`);
      return NextResponse.json({ message: 'Success' }, { status: 200 });
    }

    // 3. Cloudflare Turnstile Verification
    const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(turnstileToken)}`,
    });

    const verifyData = await verifyResponse.json();
    if (!verifyData.success) {
      console.error('[SECURITY] Turnstile verification failed:', verifyData);
      return NextResponse.json({ message: 'Security authorization failed.' }, { status: 403 });
    }

    // 4. Supabase Insert
    if (supabase) {
      const { error } = await supabase
        .from('leads')
        .insert([{ name, email, company, inquiry, metadata: { source: 'hud_v1' } }]);

      if (error) {
        console.error('[DATABASE] Lead insertion error:', error);
        // We log it but proceed to return a generic error if the DB is down
        return NextResponse.json({ message: 'Critical system failure. Retry sync.' }, { status: 500 });
      }
    } else {
      console.warn('[SYSTEM] Supabase credentials missing. Lead logged to terminal only.');
    }

    console.log(`[LEAD_AUTHORIZED] ${name} (${company}) [${email}]: ${inquiry}`);
    return NextResponse.json({ message: 'Success' }, { status: 200 });

  } catch (error) {
    console.error('[API ERROR]', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
