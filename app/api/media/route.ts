import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';

export async function GET() {
  try {
    const media = await prisma.mediaFile.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
    }).catch(() => []);

    return NextResponse.json(media);
  } catch (error: any) {
    console.error('Fetch Media Error:', error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, url, type, size, mimeType } = body;

    if (!name || !url) {
      return NextResponse.json({ error: 'File name and URL are required' }, { status: 400 });
    }

    const file = await prisma.mediaFile.create({
      data: {
        name,
        url,
        type: type || 'image',
        size: Number(size) || 0,
        mimeType,
      },
    });

    return NextResponse.json(file, { status: 201 });
  } catch (error: any) {
    console.error('Create Media Asset Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to save media asset' }, { status: 500 });
  }
}
