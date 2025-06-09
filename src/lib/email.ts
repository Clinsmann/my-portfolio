import { FormData } from '@/components/sections/Contact'
import { Resend } from 'resend'

const resend = new Resend('re_24hb6g3u_3wn1FaoL4QqaEHZguEYzWq91')

export const sendContactFormEmail = async (data: FormData) => {
  try {
    const emailData = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['ibeanuhillary@gmail.com'],
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0E0F29; border-bottom: 2px solid #F0B23A; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #FEF7EB; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0E0F29; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Subject:</strong> ${data.subject}</p>
            <h3 style="color: #0E0F29; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This email was sent from the ibeanuhillary.com website contact form.</p>
            <p>Sent on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${data.name}
        Email: ${data.email}
        
        Subject: ${data.subject}
        Message:
        ${data.message}
        
        Sent on: ${new Date().toLocaleString()}
      `,
    })

    return { success: true, data: emailData }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: 'Failed to send email' }
  }
}
