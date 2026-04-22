import { NextResponse } from 'next/server';

export async function GET() {
  const BREVO_API_KEY = process.env.BREVO_API_KEY || '';
  const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'kromiqagency@gmail.com';
  const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME || 'KROMIQ TEST';

  try {
    console.log('[TEST] Initiating Brevo Diagnostic...');
    
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: { name: BREVO_SENDER_NAME, email: BREVO_SENDER_EMAIL },
        to: [{ email: 'bharat@netizen.agency' }], // Test recipient
        subject: "Diagnostic Transmission",
        htmlContent: "<h1>Diagnostic Success</h1><p>If you see this, the API connection is functional.</p>"
      })
    });

    const data = await response.json();

    return NextResponse.json({
      status: response.status,
      ok: response.ok,
      brevoResponse: data,
      configAudit: {
        apiKeyPresent: !!BREVO_API_KEY,
        apiKeyLength: BREVO_API_KEY.length,
        senderEmail: BREVO_SENDER_EMAIL
      }
    });

  } catch (error: any) {
    return NextResponse.json({ 
      error: error.message,
      stack: error.stack 
    }, { status: 500 });
  }
}
