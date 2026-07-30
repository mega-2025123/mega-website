import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');

    const where: any = { deletedAt: null };
    if (status) where.status = status;

    const events = await prisma.event.findMany({
      where,
      orderBy: { date: 'desc' },
    }).catch(() => []);

    return NextResponse.json(events);
  } catch (error: any) {
    console.error('Fetch Events Error:', error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, slug, banner, description, content, date, time, venue, organizer, contact, registrationLink, registrationDeadline, status, featured } = body;

    if (!name || !slug) {
      return NextResponse.json({ error: 'Event name and slug are required' }, { status: 400 });
    }

    const event = await prisma.event.create({
      data: {
        name,
        slug,
        banner,
        description: description || '',
        content,
        date: date ? new Date(date) : new Date(),
        time,
        venue: venue || 'NSRIET Campus',
        organizer,
        contact,
        registrationLink,
        registrationDeadline: registrationDeadline ? new Date(registrationDeadline) : null,
        status: status || 'upcoming',
        featured: Boolean(featured),
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error: any) {
    console.error('Create Event Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to create event' }, { status: 500 });
  }
}
