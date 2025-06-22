import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await prisma.contactSubmission.deleteMany({
      where: {
        email: 'keep-alive@ibeanuhillary.com',
      },
    })

    await prisma.contactSubmission.create({
      data: {
        name: 'Keep Alive',
        email: 'keep-alive@ibeanuhillary.com',
        subject: 'Keep Alive',
        message: 'prisma database is alive',
      },
    })

    return NextResponse.json({ message: 'prisma database is alive... 💪' })
  } catch (error) {
    console.error('Error pinging endpoint:', error)
  }
}
