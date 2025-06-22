import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await prisma.contactSubmission.deleteMany({
      where: {
        email: 'keep-alive@leben.ibeanuhillary.com',
      },
    })

    await prisma.contactSubmission.create({
      data: {
        name: 'Keep Alive',
        email: 'keep-alive@leben.ibeanuhillary.com',
        subject: 'Keep Alive',
        message: 'Supabase is alive',
      },
    })

    return NextResponse.json({ message: 'Supabase is alive... 💪' })
  } catch (error) {
    console.error('Error pinging endpoint:', error)
  }
}
