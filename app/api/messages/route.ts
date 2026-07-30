import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';

export async function GET() {
  try {
    const messages = await prisma.contactMessage.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
    }).catch(() => []);

    return NextResponse.json(messages);
  } catch (error: any) {
    console.error('Fetch Messages Error:', error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    const contactMsg = await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject: subject || 'General Inquiry',
        message,
      },
    });

    return NextResponse.json(contactMsg, { status: 201 });
  } catch (error: any) {
    console.error('Submit Contact Message Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to submit contact message' }, { status: 500 });
  }
}
