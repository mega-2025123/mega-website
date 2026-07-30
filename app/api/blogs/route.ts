import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    const where: any = { deletedAt: null };
    if (status) where.status = status;
    if (category) where.category = category;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { summary: { contains: search, mode: 'insensitive' } },
      ];
    }

    const blogs = await prisma.blog.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    }).catch(() => []);

    return NextResponse.json(blogs);
  } catch (error: any) {
    console.error('Fetch Blogs Error:', error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, slug, summary, content, coverImage, category, tags, status, featured, metaTitle, metaDescription, canonicalUrl } = body;

    if (!title || !slug) {
      return NextResponse.json({ error: 'Title and slug are required' }, { status: 400 });
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        summary,
        content: content || '',
        coverImage,
        category: category || 'General',
        tags: Array.isArray(tags) ? tags : typeof tags === 'string' ? tags.split(',').map((t: string) => t.trim()) : [],
        status: status || 'draft',
        featured: Boolean(featured),
        metaTitle,
        metaDescription,
        canonicalUrl,
      },
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error: any) {
    console.error('Create Blog Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to create blog post' }, { status: 500 });
  }
}
