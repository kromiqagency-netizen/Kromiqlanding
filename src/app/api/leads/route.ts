import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  phone: z.string().optional(),
  inquiry: z.string().min(10),
  turnstileToken: z.string().optional(),
  authorized_override: z.string().max(0).optional(),
});

const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA';
const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';
const BREVO_API_KEY = process.env.BREVO_API_KEY || '';
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'hello@kromiq.agency';
const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME || 'KROMIQ | Strategic Intelligence';

// Initialize Supabase
const supabase = (SUPABASE_URL && SUPABASE_ANON_KEY) 
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
  : null;

if (!supabase) console.warn('[DATABASE] Supabase credentials missing. Data persistence disabled.');

export async function POST(req: Request) {
  console.log('[API] Lead submission received.');
  try {
    const body = await req.json();
    
    // 1. Zod Validation
    const result = formSchema.safeParse(body);
    if (!result.success) {
      const firstError = result.error.issues[0]?.message || 'Invalid entry parameters.';
      return NextResponse.json({ message: firstError }, { status: 400 });
    }

    const { name, email, company, phone, inquiry, turnstileToken, authorized_override } = result.data;

    // 2. Honeypot check
    if (authorized_override) {
      console.warn(`[SECURITY] Bot detected via honeypot.`);
      return NextResponse.json({ message: 'Success' }, { status: 200 });
    }

    // 3. Cloudflare Turnstile Verification (with Localhost Bypass)
    if (turnstileToken !== 'localhost_bypass_token') {
      const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(turnstileToken || '')}`,
      });

      const verifyData = await verifyResponse.json();
      if (!verifyData.success) {
        console.error('[SECURITY] Turnstile verification failed:', verifyData);
        return NextResponse.json({ message: 'Security authorization failed. Please refresh and try again.' }, { status: 403 });
      }
    }

    // 4. Supabase Insert
    if (supabase) {
      const { error } = await supabase
        .from('leads')
        .insert([{ 
          name, 
          email, 
          company, 
          inquiry, 
          metadata: { 
            source: 'hud_v1.4', 
            phone: phone || 'Not provided' 
          } 
        }]);

      if (error) {
        console.error('[DATABASE] Lead insertion error:', error);
      }
    }

    const auditRef = Math.random().toString(36).substring(7).toUpperCase();

    // 5. Email Automation (Direct V3 SMTP Fetch for Maximum Reliability)
    if (BREVO_API_KEY) {
      try {
        console.log(`[EMAIL] Initiating direct transmission via Brevo V3 API.`);
        console.log(`[EMAIL] Target: ${email}`);
        console.log(`[EMAIL] Sender: ${BREVO_SENDER_EMAIL}`);

        const sendBrevoEmail = async (toEmail: string, subject: string, html: string) => {
          const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'api-key': BREVO_API_KEY,
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              sender: { name: BREVO_SENDER_NAME, email: BREVO_SENDER_EMAIL },
              to: [{ email: toEmail }],
              subject: subject,
              htmlContent: html
            })
          });
          
          const data = await response.json();
          if (!response.ok) {
            throw new Error(JSON.stringify(data));
          }
          return data;
        };

        // Agency Notification
        try {
          const agencyData = await sendBrevoEmail(
            'bharat@netizen.agency',
            `[LEAD] ${company} | Audit Ref: ${auditRef}`,
            `
              <div style="font-family: sans-serif; background: #000; color: #fff; padding: 40px; border: 1px solid #333;">
                <h2 style="color: #ff0055;">New Transmission: ${auditRef}</h2>
                <p><strong>Entity:</strong> ${company}</p>
                <p><strong>Lead:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <hr style="border: 0; border-top: 1px solid #1a1a1a;" />
                <p><strong>Inquiry:</strong></p>
                <p style="color: #888;">${inquiry}</p>
              </div>
            `
          );
          console.log('[EMAIL] Agency notification dispatched:', agencyData.messageId);
        } catch (err: any) {
          console.error('[EMAIL] Agency Notification Failed:', err.message);
        }

        // Client Confirmation
        try {
          const clientData = await sendBrevoEmail(
            email,
            `Strategic Intake Dossier | REF: ${auditRef}`,
            `
              <!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="utf-8">
                  <style>
                    body { font-family: sans-serif; background-color: #050505; color: #ffffff; margin: 0; padding: 40px; }
                    .container { max-width: 600px; margin: 0 auto; background: #0a0a0a; border: 1px solid #1a1a1a; padding: 40px; border-radius: 20px; }
                    .logo { font-size: 24px; font-weight: bold; color: #fff; margin-bottom: 30px; }
                    .dot { color: #ff0055; }
                    .highlight { color: #ff0055; font-weight: bold; }
                    .card { background: #0d0d0d; border: 1px solid #1a1a1a; padding: 20px; border-radius: 12px; margin: 20px 0; }
                    .label { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #444; margin-bottom: 5px; }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <div class="logo">KROMIQ<span class="dot">.</span></div>
                    <h2>Greetings, ${name}</h2>
                    <p>Your tactical inquiry has been indexed. Our team is performing a high-fidelity audit.</p>
                    <div class="card">
                      <div class="label">Target Entity</div>
                      <div>${company}</div>
                    </div>
                    <div class="card">
                      <div class="label">Reference ID</div>
                      <div class="highlight">${auditRef}</div>
                    </div>
                    <p style="font-size: 12px; color: #444; margin-top: 40px;">// SYSTEM_STATUS: ENCRYPTED_PENDING_REVIEW</p>
                  </div>
                </body>
              </html>
            `
          );
          console.log(`[EMAIL] Client dossier dispatched to ${email}:`, clientData.messageId);
        } catch (err: any) {
          console.error('[EMAIL] Client Confirmation Failed:', err.message);
        }

      } catch (emailError: any) {
        console.error('[EMAIL] Brevo CRITICAL FAILURE:', emailError.message);
      }
    } else {
      console.warn('[EMAIL] Skipping automation: BREVO_API_KEY not found.');
    }

    return NextResponse.json({ message: 'Success', auditRef }, { status: 200 });

  } catch (error) {
    console.error('[API CRITICAL ERROR]', error);
    return NextResponse.json({ message: 'Internal Server Error.' }, { status: 500 });
  }
}
