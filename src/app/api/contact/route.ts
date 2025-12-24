
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message, budget, timeframe, fileName } = body;

        // Simple validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configuration validation
        const missingVars = [];
        if (!process.env.SMTP_HOST) missingVars.push('SMTP_HOST');
        if (!process.env.SMTP_USER) missingVars.push('SMTP_USER');
        if (!process.env.SMTP_PASSWORD) missingVars.push('SMTP_PASSWORD');

        if (missingVars.length > 0) {
            console.error('Missing SMTP configuration variables:', missingVars.join(', '));
            console.error('Current Env Keys (Generic):', Object.keys(process.env).filter(k => k.includes('SMTP') || k.includes('SMPT')));
            return NextResponse.json(
                { error: `Server configuration error: Missing vars: ${missingVars.join(', ')}. Did you restart the server?` },
                { status: 500 }
            );
        }

        const smtpHost = process.env.SMTP_HOST;
        // Auto-detect port if not specified (default to 587)
        const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;

        // Auto-determine secure setting:
        // Force secure: true if port is 465 (Zoho/Gmail SSL)
        const isSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: isSecure, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                // Do not fail on invalid certs
                rejectUnauthorized: process.env.NODE_ENV === 'production'
            }
        });

        // Verify connection configuration
        try {
            await transporter.verify();
        } catch (verifyError) {
            console.error('SMTP Connection verification failed:', verifyError);
            return NextResponse.json(
                { error: `SMTP Connection failed: ${(verifyError as Error).message}` },
                { status: 500 }
            );
        }

        // Email Template Helpers
        const brandColor = '#008AC1'; // Cinute Blue
        // Use CID reference for the logo
        const brandLogoCid = 'brandLogo@cinuteinfomedia.com';

        // Define attachment for the logo
        const logoAttachment = {
            filename: 'CIM-LOGO.png',
            path: process.cwd() + '/public/images/CIM-LOGO-Bold-with-white-BG.png',
            cid: brandLogoCid // same cid value as in the html img src
        };

        const generateEmailTemplate = (title: string, content: string) => `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${title}</title>
                <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f4f7f6; }
                    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
                    .header { background-color: #ffffff; padding: 30px 20px; text-align: center; border-bottom: 3px solid ${brandColor}; }
                    .header img { max-height: 50px; }
                    .content { padding: 40px 30px; color: #333333; line-height: 1.6; }
                    .footer { background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #888888; border-top: 1px solid #eeeeee; }
                    .footer a { color: ${brandColor}; text-decoration: none; }
                    .btn { display: inline-block; background-color: ${brandColor}; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; margin-top: 10px; }
                    .info-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    .info-table td { padding: 12px 0; border-bottom: 1px solid #f0f0f0; vertical-align: top; }
                    .info-table td:first-child { width: 35%; font-weight: bold; color: #555; }
                    .highlight { color: ${brandColor}; font-weight: bold; }
                </style>
            </head>
            <body>
                <div style="padding: 20px;">
                    <div class="container">
                        <div class="header">
                            <img src="cid:${brandLogoCid}" alt="Cinute InfoMedia" />
                        </div>
                        <div class="content">
                            ${content}
                        </div>
                        <div class="footer">
                            <p>&copy; ${new Date().getFullYear()} Cinute InfoMedia. All rights reserved.</p>
                            <p>Mumbai, India | <a href="mailto:contact@cinuteinfomedia.com">contact@cinuteinfomedia.com</a></p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Admin Notification Email Content
        const adminHtmlContent = `
            <h2 style="color: #333; margin-top: 0;">New Project Inquiry</h2>
            <p>You have received a new contact form submission from your website.</p>
            
            <table class="info-table">
                <tr><td>Name</td><td>${name}</td></tr>
                <tr><td>Email</td><td><a href="mailto:${email}" style="color: ${brandColor}">${email}</a></td></tr>
                <tr><td>Phone</td><td>${phone || '<span style="color:#ccc">Not provided</span>'}</td></tr>
                <tr><td>Subject</td><td>${subject}</td></tr>
                <tr><td>Budget</td><td>${budget || '<span style="color:#ccc">Not selected</span>'}</td></tr>
                <tr><td>Timeframe</td><td>${timeframe || '<span style="color:#ccc">Not selected</span>'}</td></tr>
                ${fileName ? `<tr><td>Attachment</td><td>${fileName}</td></tr>` : ''}
            </table>
            
            <div style="margin-top: 25px; background-color: #f9f9f9; padding: 20px; border-radius: 6px;">
                <h3 style="margin-top: 0; font-size: 16px; color: #555;">Message:</h3>
                <p style="margin-bottom: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
                <a href="mailto:${email}?subject=Re: ${subject} - Cinute InfoMedia" class="btn" style="color: #ffffff;">Reply to Lead</a>
            </div>
        `;

        const adminMailOptions = {
            from: process.env.SMTP_FROM || `"Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.ADMIN_EMAIL || process.env.SMTP_TO || process.env.SMTP_USER,
            subject: `[New Lead] ${name} - ${subject}`,
            html: generateEmailTemplate(`New Lead: ${subject}`, adminHtmlContent),
            attachments: [logoAttachment]
        };

        // User Confirmation Email Content
        const userHtmlContent = `
            <h2 style="color: ${brandColor}; margin-top: 0;">Thanks for reaching out!</h2>
            <p>Hi ${name},</p>
            <p>We have successfully received your message regarding <strong class="highlight">${subject}</strong>.</p>
            <p>Our team is already reviewing your details. You can expect a response from one of our experts within <strong>24 business hours</strong>.</p>
            
            <div style="margin: 25px 0; padding: 20px; background-color: #f0f8ff; border-left: 4px solid ${brandColor}; border-radius: 4px;">
                <h3 style="margin-top: 0; margin-bottom: 10px; font-size: 16px;">What happens next?</h3>
                <ul style="margin: 0; padding-left: 20px; color: #555;">
                    <li>We analyze your requirements.</li>
                    <li>We schedule a quick discovery call if needed.</li>
                    <li>We propose the best solution for your growth.</li>
                </ul>
            </div>
            
            <p>In the meantime, feel free to browse our latest work on our website.</p>
            <p style="margin-top: 20px;">Best Regards,<br><strong>Team Cinute InfoMedia</strong></p>
        `;

        const userConfirmationOptions = {
            from: process.env.SMTP_FROM || `"Cinute InfoMedia" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `We've received your message - Cinute InfoMedia`,
            html: generateEmailTemplate('Thank You', userHtmlContent),
            attachments: [logoAttachment]
        };

        // Send both emails concurrently
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userConfirmationOptions)
        ]);

        console.log('Admin notification and user confirmation emails sent successfully');
        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to send email' },
            { status: 500 }
        );
    }
}
