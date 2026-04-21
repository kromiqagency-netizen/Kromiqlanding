import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { BrevoClient } from '@getbrevo/brevo';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  phone: z.string().optional(),
  inquiry: z.string().min(10),
  turnstileToken: z.string(),
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

// Initialize Brevo
const brevo = BREVO_API_KEY ? new BrevoClient({ apiKey: BREVO_API_KEY }) : null;

export async function POST(req: Request) {
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
        body: `secret=${encodeURIComponent(TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(turnstileToken)}`,
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

    // 5. Email Automation (V4 Nexus Intake Portfolio)
    if (brevo) {
      try {

        // Notification to Agency
        await brevo.transactionalEmails.sendTransacEmail({
          sender: { email: BREVO_SENDER_EMAIL, name: BREVO_SENDER_NAME },
          to: [{ email: 'bharat@netizen.agency' }],
          subject: `[LEAD] ${company} | Audit Ref: ${auditRef}`,
          htmlContent: `
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
          `,
        });

        // V4 Executive Portfolio Intake Confirmation
        await brevo.transactionalEmails.sendTransacEmail({
          sender: { email: BREVO_SENDER_EMAIL, name: BREVO_SENDER_NAME },
          to: [{ email: email }],
          subject: `Strategic Intake Dossier | REF: ${auditRef}`,
          htmlContent: `
            <!DOCTYPE html>
            <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="x-apple-disable-message-reformatting">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="format-detection" content="telephone=no, address=no, email=no, date=no, url=no">
                <meta name="color-scheme" content="light dark">
                <meta name="supported-color-schemes" content="light dark">
                <style>
                  :root {
                    color-scheme: light dark;
                    supported-color-schemes: light dark;
                  }
                  body { 
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; 
                    background-color: #050505 !important; 
                    margin: 0; 
                    padding: 0; 
                    -webkit-font-smoothing: antialiased;
                    word-spacing: normal;
                  }
                  .wrapper { 
                    background-color: #050505 !important; 
                    padding: 40px 10px; 
                  }
                  .container { 
                    max-width: 600px; 
                    margin: 0 auto; 
                    background-color: #0a0a0a !important; 
                    border: 1px solid #1a1a1a; 
                    border-radius: 24px; 
                    overflow: hidden; 
                    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
                  }
                  .header { 
                    padding: 60px 40px; 
                    background: linear-gradient(135deg, #111 0%, #0a0a0a 100%); 
                    border-bottom: 1px solid #1a1a1a; 
                    text-align: center; 
                  }
                  .logo { 
                    font-size: 38px; 
                    font-weight: 900; 
                    letter-spacing: -2px; 
                    color: #ffffff !important; 
                    margin: 0;
                  }
                  .dot { color: #ff0055; }
                  
                  .content { padding: 50px 40px; }
                  .greeting { 
                    font-size: 34px; 
                    font-weight: 800; 
                    letter-spacing: -1.5px; 
                    margin-bottom: 12px; 
                    color: #ffffff !important;
                  }
                  .subtitle { 
                    color: #888 !important; 
                    font-size: 15px; 
                    margin-bottom: 40px; 
                    line-height: 1.6; 
                  }
                  
                  .grid-cell { 
                    padding: 24px; 
                    background: #0d0d0d !important; 
                    border: 1px solid #1a1a1a; 
                    border-radius: 16px; 
                    margin-bottom: 16px;
                  }
                  .label { 
                    font-size: 10px; 
                    text-transform: uppercase; 
                    letter-spacing: 2.5px; 
                    color: #444 !important; 
                    margin-bottom: 10px; 
                    font-weight: 800; 
                  }
                  .value { 
                    font-size: 16px; 
                    color: #ffffff !important; 
                    font-weight: 500; 
                  }
                  
                  .ledger { 
                    margin-top: 20px; 
                    background: #0d0d0d !important; 
                    border: 1px solid #1a1a1a; 
                    padding: 30px; 
                    border-radius: 16px; 
                    position: relative;
                  }
                  .ledger::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 20px;
                    bottom: 20px;
                    width: 3px;
                    background: #ff0055;
                    border-radius: 0 4px 4px 0;
                  }

                  .metadata { 
                    margin-top: 40px; 
                    padding: 24px; 
                    background: #070707 !important; 
                    border: 1px solid #111;
                    border-radius: 12px; 
                    font-size: 11px; 
                    color: #333 !important; 
                    font-family: 'Courier New', Courier, monospace; 
                    line-height: 1.8;
                  }
                  .footer { 
                    padding: 60px 40px; 
                    text-align: center; 
                    font-size: 11px; 
                    color: #333 !important; 
                    text-transform: uppercase; 
                    letter-spacing: 4px; 
                    background: #050505 !important;
                  }
                  .tagline {
                    color: #555 !important;
                    font-weight: 700;
                    margin-top: 10px;
                  }

                  @media (prefers-color-scheme: dark) {
                    body, .wrapper, .footer { background-color: #050505 !important; }
                    .container { background-color: #0a0a0a !important; }
                    .grid-cell, .ledger { background-color: #0d0d0d !important; }
                  }
                </style>
              </head>
              <body>
                <div class="wrapper">
                  <div class="container">
                    <div class="header">
                      <div class="logo">KROMIQ<span class="dot">.</span></div>
                      <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 6px; color: #444 !important; margin-top: 15px; font-weight: 700;">Global Strategic Intelligence</div>
                    </div>
                    
                    <div style="padding: 20px 40px; background: #080808 !important; border-bottom: 1px solid #141414; text-align: center;">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" style="font-size: 9px; color: #ff0055 !important; font-weight: 900; letter-spacing: 3px;">● INTAKE COMPLETE</td>
                          <td align="center" style="font-size: 9px; color: #222 !important; font-weight: 900; letter-spacing: 3px;">○ ANALYSIS</td>
                          <td align="center" style="font-size: 9px; color: #222 !important; font-weight: 900; letter-spacing: 3px;">○ STRATEGY</td>
                        </tr>
                      </table>
                    </div>

                    <div class="content">
                      <div class="greeting">Greetings, ${name}</div>
                      <p class="subtitle">Your tactical inquiry has been successfully indexed. Our intelligence team is currently performing a high-fidelity audit of your requirements.</p>
                      
                      <div class="grid-cell">
                        <div class="label">Target Entity</div>
                        <div class="value">${company}</div>
                      </div>

                      <div class="grid-cell">
                        <div class="label">Communication Channel</div>
                        <div class="value">${phone || 'SECURE DIGITAL CORE'}</div>
                      </div>

                      <div class="ledger">
                        <div class="label">Operational Objective</div>
                        <div style="font-size: 15px; color: #aaa !important; line-height: 1.7; font-style: italic;">"${inquiry}"</div>
                      </div>

                      <div class="metadata">
                        <div style="color: #444 !important; margin-bottom: 5px;">// SYSTEM DIAGNOSTICS</div>
                        TRANSMISSION_ID: ${auditRef}<br>
                        NODE_LOC: BENGALURU_IN<br>
                        STATUS: ENCRYPTED_PENDING_REVIEW<br>
                        PRIORITY: ALPHA_STRATEGIC
                      </div>

                      <div style="margin-top: 50px; text-align: center;">
                        <p style="color: #222 !important; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-weight: 700;">Expect Synchronization within 24 hours.</p>
                      </div>
                    </div>
                    
                    <div class="footer">
                      <div style="margin-bottom: 15px; color: #444 !important;">KROMIQ // GLOBAL INFRASTRUCTURE</div>
                      <div class="tagline">MADE IN INDIA</div>
                    </div>
                  </div>
                </div>
              </body>
            </html>
          `,
        });
        
        console.log(`[EMAIL] V4 Nexus Portfolio triggered for ${email}`);
      } catch (emailError) {
        console.error('[EMAIL] Brevo failure:', emailError);
      }
    }

    return NextResponse.json({ message: 'Success', auditRef }, { status: 200 });

  } catch (error) {
    console.error('[API CRITICAL ERROR]', error);
    return NextResponse.json({ message: 'Internal Server Error.' }, { status: 500 });
  }
}
