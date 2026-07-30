import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';

export async function GET() {
  try {
    const newsletters = await prisma.newsletter.findMany({
      where: { deletedAt: null },
      orderBy: { issueNumber: 'desc' },
    }).catch(() => []);

    return NextResponse.json(newsletters);
  } catch (error: any) {
    console.error('Fetch Newsletters Error:', error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description, issueNumber, thumbnail, pdfUrl, publishDate } = body;

    if (!title || !pdfUrl) {
      return NextResponse.json({ error: 'Title and PDF file URL are required' }, { status: 400 });
    }

    const newsletter = await prisma.newsletter.create({
      data: {
        title,
        description,
        issueNumber: Number(issueNumber) || 1,
        thumbnail,
        pdfUrl,
        publishDate: publishDate ? new Date(publishDate) : new Date(),
      },
    });

    return NextResponse.json(newsletter, { status: 201 });
  } catch (error: any) {
    console.error('Create Newsletter Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to upload newsletter' }, { status: 500 });
  }
}
