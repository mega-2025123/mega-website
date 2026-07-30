import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';

export async function GET() {
  try {
    const announcements = await prisma.announcement.findMany({
      where: { deletedAt: null },
      orderBy: [{ pinned: 'desc' }, { createdAt: 'desc' }],
    }).catch(() => []);

    return NextResponse.json(announcements);
  } catch (error: any) {
    console.error('Fetch Announcements Error:', error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, content, type, priority, pinned, expiryDate } = body;

    if (!title) {
      return NextResponse.json({ error: 'Announcement title is required' }, { status: 400 });
    }

    const announcement = await prisma.announcement.create({
      data: {
        title,
        content: content || '',
        type: type || 'general',
        priority: priority || 'normal',
        pinned: Boolean(pinned),
        expiryDate: expiryDate ? new Date(expiryDate) : null,
      },
    });

    return NextResponse.json(announcement, { status: 201 });
  } catch (error: any) {
    console.error('Create Announcement Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to create announcement' }, { status: 500 });
  }
}
