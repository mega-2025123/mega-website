import { NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';

export async function GET() {
  try {
    const [
      blogsCount,
      eventsCount,
      newslettersCount,
      galleryCount,
      announcementsCount,
      messagesCount,
      publishedBlogsCount,
      draftBlogsCount,
    ] = await Promise.all([
      prisma.blog.count({ where: { deletedAt: null } }).catch(() => 0),
      prisma.event.count({ where: { deletedAt: null } }).catch(() => 0),
      prisma.newsletter.count({ where: { deletedAt: null } }).catch(() => 0),
      prisma.galleryImage.count({ where: { deletedAt: null } }).catch(() => 0),
      prisma.announcement.count({ where: { deletedAt: null } }).catch(() => 0),
      prisma.contactMessage.count({ where: { deletedAt: null } }).catch(() => 0),
      prisma.blog.count({ where: { status: 'published', deletedAt: null } }).catch(() => 0),
      prisma.blog.count({ where: { status: 'draft', deletedAt: null } }).catch(() => 0),
    ]);

    const recentBlogs = await prisma.blog.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
      take: 5,
    }).catch(() => []);

    return NextResponse.json({
      stats: {
        totalBlogs: blogsCount,
        totalEvents: eventsCount,
        totalNewsletters: newslettersCount,
        totalGalleryImages: galleryCount,
        totalAnnouncements: announcementsCount,
        totalMessages: messagesCount,
        publishedCount: publishedBlogsCount,
        draftCount: draftBlogsCount,
      },
      recentBlogs,
    });
  } catch (error: any) {
    console.error('Dashboard Stats Error:', error);
    return NextResponse.json(
      {
        stats: {
          totalBlogs: 0,
          totalEvents: 0,
          totalNewsletters: 0,
          totalGalleryImages: 0,
          totalAnnouncements: 0,
          totalMessages: 0,
          publishedCount: 0,
          draftCount: 0,
        },
        recentBlogs: [],
      },
      { status: 200 }
    );
  }
}
