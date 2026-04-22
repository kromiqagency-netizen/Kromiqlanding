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
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'kromiqagency@gmail.com'; // Use .env fallback
const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME || 'KROMIQ | Strategic Intelligence';

// Audit environment variables at startup
console.log('[INIT] Environment Audit:');
console.log(`- Supabase URL: ${SUPABASE_URL ? 'PRESENT' : 'MISSING'}`);
console.log(`- Brevo API Key: ${BREVO_API_KEY ? 'PRESENT (Len: ' + BREVO_API_KEY.length + ')' : 'MISSING'}`);
console.log(`- Brevo Sender: ${BREVO_SENDER_EMAIL}`);

// Initialize Supabase
const supabase = (SUPABASE_URL && SUPABASE_ANON_KEY) 
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
  : null;

if (!supabase) console.warn('[DATABASE] Supabase credentials missing. Data persistence disabled.');

export async function POST(req: Request) {
  console.log('[API] New submission request incoming.');
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
              <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #000; color: #fff; padding: 40px; border: 1px solid #333; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #ff0055; font-size: 24px; margin-bottom: 20px; letter-spacing: -0.5px;">New Transmission Detected</h2>
                <div style="background: #111; padding: 25px; border-radius: 12px; border: 1px solid #222;">
                  <p style="margin: 10px 0;"><strong style="color: #666; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">Entity</strong><br/><span style="font-size: 18px;">${company}</span></p>
                  <p style="margin: 10px 0;"><strong style="color: #666; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">Lead Name</strong><br/><span style="font-size: 18px;">${name}</span></p>
                  <p style="margin: 10px 0;"><strong style="color: #666; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">Communication</strong><br/><span style="font-size: 18px;">${email}</span></p>
                  <p style="margin: 10px 0;"><strong style="color: #666; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">Phone</strong><br/><span style="font-size: 18px;">${phone || 'N/A'}</span></p>
                </div>
                <div style="margin-top: 30px;">
                  <strong style="color: #666; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">Strategic Inquiry</strong>
                  <p style="color: #ccc; line-height: 1.6; font-size: 16px; background: #080808; padding: 15px; border-radius: 8px;">${inquiry}</p>
                </div>
                <p style="color: #444; font-size: 10px; margin-top: 40px; border-top: 1px solid #222; pt: 20px;">// REF_ID: ${auditRef} | SYSTEM_CORE_LOG</p>
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
              <html>
                <body style="margin: 0; padding: 0; background-color: #050505; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#050505">
                    <tr>
                      <td align="center" style="padding: 40px 20px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #0a0a0a; border: 1px solid #1a1a1a; border-radius: 24px; overflow: hidden;">
                          <tr>
                            <td style="padding: 50px 40px;">
                              <div style="font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -1px; margin-bottom: 40px;">
                                KROMIQ<span style="color: #ff0055;">.</span>
                              </div>
                              
                              <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin-bottom: 20px; letter-spacing: -0.5px;">Greetings, ${name}</h1>
                              <p style="color: #888888; font-size: 16px; line-height: 1.6; margin-bottom: 40px;">
                                Your tactical inquiry has been successfully indexed. Our intelligence team is now performing a high-fidelity audit of your requirements.
                              </p>
                              
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 40px;">
                                <tr>
                                  <td style="padding: 20px; background-color: #0d0d0d; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; display: block;">
                                    <div style="font-size: 10px; font-weight: 700; color: #444444; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">Target Entity</div>
                                    <div style="font-size: 18px; color: #ffffff; font-weight: 500;">${company}</div>
                                  </td>
                                </tr>
                                <tr><td style="height: 12px;"></td></tr>
                                <tr>
                                  <td style="padding: 20px; background-color: #0d0d0d; border: 1px solid #1a1a1a; border-radius: 16px; display: block;">
                                    <div style="font-size: 10px; font-weight: 700; color: #444444; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">Reference ID</div>
                                    <div style="font-size: 18px; color: #ff0055; font-weight: 700; font-family: monospace;">${auditRef}</div>
                                  </td>
                                </tr>
                              </table>
                              
                              <div style="border-top: 1px solid #1a1a1a; padding-top: 30px; margin-top: 40px;">
                                <p style="color: #333333; font-family: monospace; font-size: 11px; margin: 0;">// SYSTEM_STATUS: ENCRYPTED_PENDING_REVIEW</p>
                                <p style="color: #333333; font-family: monospace; font-size: 11px; margin: 5px 0 0 0;">// ACCESS_LEVEL: RESTRICTED_INTAKE</p>
                              </div>
                            </td>
                          </tr>
                        </table>
                        <p style="color: #444444; font-size: 12px; margin-top: 30px;">
                          &copy; 2026 KROMIQ Strategic Intelligence. All rights reserved.
                        </p>
                      </td>
                    </tr>
                  </table>
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
