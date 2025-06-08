import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { Resend } from 'resend'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
})

const prisma = new PrismaClient()

const resend = new Resend('re_24hb6g3u_3wn1FaoL4QqaEHZguEYzWq91');

export async function POST(request: NextRequest) {
  try {
    const data = contactSchema.parse(await request.json())
    const submission = await prisma.contactSubmission.create({data});

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ibeanuhillary@gmail.com',
      subject: `New Contact Form: ${data.subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toISOString()}</small></p>
      `
    })

    return NextResponse.json(
      { message: 'Message sent successfully', id: submission.id },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}