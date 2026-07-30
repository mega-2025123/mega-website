import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';

export async function GET() {
  try {
    const images = await prisma.galleryImage.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
    }).catch(() => []);

    return NextResponse.json(images);
  } catch (error: any) {
    console.error('Fetch Gallery Error:', error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, caption, albumId } = body;

    if (!url) {
      return NextResponse.json({ error: 'Image URL is required' }, { status: 400 });
    }

    const image = await prisma.galleryImage.create({
      data: {
        url,
        caption,
        albumId,
      },
    });

    return NextResponse.json(image, { status: 201 });
  } catch (error: any) {
    console.error('Create Gallery Image Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to add image to gallery' }, { status: 500 });
  }
}
