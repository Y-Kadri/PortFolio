import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactRequest {
  email: string
  message: string
  locale: string
  recaptchaToken: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequest = await request.json()
    const { email, message, locale, recaptchaToken } = body

    // Validation
    if (!email || !message) {
      return NextResponse.json({ error: "Email and message are required" }, { status: 400 })
    }

    
    // reCAPTCHA token validation
    if (!recaptchaToken) {
      return NextResponse.json({ error: "reCAPTCHA verification required" }, { status: 400 })
    }

    const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    })

    const recaptchaResult = await recaptchaResponse.json()

    if (!recaptchaResult.success) {
      return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Message length validation
    if (message.length > 800) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 })
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    // Prepare email content based on locale
    const isEnglish = locale === "en"

    const subject = isEnglish ? `New contact from ${email}` : `Nouveau contact de ${email}`

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${subject}</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #0891b2 0%, #f59e0b 100%);
              color: white;
              padding: 30px 20px;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .content {
              background: #f8fafc;
              padding: 30px 20px;
              border-radius: 0 0 8px 8px;
              border: 1px solid #e2e8f0;
              border-top: none;
            }
            .message-box {
              background: white;
              padding: 20px;
              border-radius: 6px;
              border-left: 4px solid #0891b2;
              margin: 20px 0;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid #e2e8f0;
              color: #64748b;
              font-size: 14px;
            }
            .email-info {
              background: #f1f5f9;
              padding: 15px;
              border-radius: 6px;
              margin: 15px 0;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${isEnglish ? "New Contact Message" : "Nouveau message de contact"}</h1>
            <p>${isEnglish ? "Portfolio Contact Form" : "Formulaire de contact du portfolio"}</p>
          </div>
          
          <div class="content">
            <div class="email-info">
              <strong>${isEnglish ? "From:" : "De :"}</strong> ${email}
            </div>
            
            <div class="message-box">
              <h3>${isEnglish ? "Message:" : "Message :"}</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <div class="footer">
              <p>${
                isEnglish
                  ? "This message was sent from your portfolio contact form."
                  : "Ce message a été envoyé depuis le formulaire de contact de votre portfolio."
              }</p>
              <p>${
                isEnglish
                  ? `Received on ${new Date().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}`
                  : `Reçu le ${new Date().toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}`
              }</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev", 
      to: ["yanis.0601@hotmail.fr"],
      subject: subject,
      html: emailHtml,
      replyTo: email,
    })

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    // Optional: Send confirmation email to the sender
    const confirmationSubject = isEnglish ? "Thank you for your message" : "Merci pour votre message"

    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${confirmationSubject}</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #0891b2 0%, #f59e0b 100%);
              color: white;
              padding: 30px 20px;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .content {
              background: #f8fafc;
              padding: 30px 20px;
              border-radius: 0 0 8px 8px;
              border: 1px solid #e2e8f0;
              border-top: none;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid #e2e8f0;
              color: #64748b;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${isEnglish ? "Message Received!" : "Message reçu !"}</h1>
            <p>Yanis Kadri - ${isEnglish ? "Full Stack Developer" : "Développeur Full Stack"}</p>
          </div>
          
          <div class="content">
            <p>${
              isEnglish
                ? `Hello,<br><br>Thank you for reaching out! I have received your message and will get back to you within 24 hours.<br><br>Best regards,<br>Yanis Kadri`
                : `Bonjour,<br><br>Merci de m'avoir contacté ! J'ai bien reçu votre message et vous répondrai dans les 24 heures.<br><br>Cordialement,<br>Yanis Kadri`
            }</p>
            
            <div class="footer">
              <p>${
                isEnglish
                  ? "This is an automated confirmation email."
                  : "Ceci est un email de confirmation automatique."
              }</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send confirmation email (optional - comment out if not needed)
    await resend.emails.send({
      from: "Yanis Kadri <noreply@yourdomain.com>", // Replace with your verified domain
      to: [email],
      subject: confirmationSubject,
      html: confirmationHtml,
    })

    return NextResponse.json(
      {
        success: true,
        message: isEnglish ? "Message sent successfully" : "Message envoyé avec succès",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// Handle preflight requests for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
