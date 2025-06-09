import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import { sendContactFormEmail } from '@/lib/email'

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
})

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const data = contactSchema.parse(await request.json())

    const formData = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      subject: data.subject.trim(),
      message: data.message.trim(),
    }

    const submission = await prisma.contactSubmission.create({
      data: formData,
    })

    await sendContactFormEmail(formData)

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

export const GET = async () => {
  return NextResponse.json(
    {
      message: 'Contact API endpoint is working',
      methods: ['POST'],
    },
    { status: 200 }
  )
}
