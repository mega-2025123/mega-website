'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileText,
  Calendar,
  Newspaper,
  Image,
  Megaphone,
  Mail,
  TrendingUp,
  Eye,
  Plus,
  Upload,
  ArrowUpRight,
  Sparkles,
  Layers,
  Activity,
  CheckCircle2,
  Clock,
} from 'lucide-react';

const stats = [
  { label: 'Total Blogs', value: '0', icon: FileText, href: '/admin/blogs', gradient: 'from-orange-500/20 to-amber-500/10', iconColor: 'text-orange-400' },
  { label: 'Total Events', value: '0', icon: Calendar, href: '/admin/events', gradient: 'from-orange-500/20 to-amber-500/10', iconColor: 'text-orange-400' },
  { label: 'Newsletters', value: '0', icon: Newspaper, href: '/admin/newsletters', gradient: 'from-orange-500/20 to-amber-500/10', iconColor: 'text-orange-400' },
  { label: 'Gallery Images', value: '0', icon: Image, href: '/admin/gallery', gradient: 'from-orange-500/20 to-amber-500/10', iconColor: 'text-orange-400' },
  { label: 'Announcements', value: '0', icon: Megaphone, href: '/admin/announcements', gradient: 'from-orange-500/20 to-amber-500/10', iconColor: 'text-orange-400' },
  { label: 'Messages', value: '0', icon: Mail, href: '/admin/messages', gradient: 'from-orange-500/20 to-amber-500/10', iconColor: 'text-orange-400' },
];

const quickActions = [
  { label: 'New Blog Post', icon: Plus, href: '/admin/blogs/new', desc: 'Publish an article' },
  { label: 'Create Event', icon: Plus, href: '/admin/events/new', desc: 'Add workshop or visit' },
  { label: 'Upload Newsletter', icon: Upload, href: '/admin/newsletters/new', desc: 'Add PDF edition' },
  { label: 'Upload Gallery Photos', icon: Upload, href: '/admin/gallery', desc: 'Add photo highlights' },
  { label: 'Post Announcement', icon: Plus, href: '/admin/announcements/new', desc: 'Broadcast update' },
];

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12 text-white">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Dashboard</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1 font-light">
            Welcome back to the MEGA Management Portal. Here is your system overview.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            target="_blank"
            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-semibold text-gray-300 hover:text-white transition-all flex items-center gap-1.5"
          >
            <span>View Live Site</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
          </Link>
        </div>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="group bg-[#121215]/90 border border-white/[0.08] hover:border-orange-500/40 rounded-2xl p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,69,0,0.12)] relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.gradient} border border-orange-500/20 shadow-inner`}>
                  <Icon className={`w-4 h-4 ${stat.iconColor}`} />
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-orange-400 transition-colors" />
              </div>
              <p className="text-3xl font-extrabold text-white tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {stat.value}
              </p>
              <p className="text-xs text-gray-400 font-medium mt-1">{stat.label}</p>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions Panel */}
        <div className="bg-[#121215]/90 border border-white/[0.08] rounded-3xl p-6 backdrop-blur-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <h2 className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Quick Actions
            </h2>
          </div>

          <div className="space-y-2.5">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  className="group flex items-center justify-between p-3 rounded-2xl bg-[#18181c] border border-white/5 hover:border-orange-500/40 hover:bg-orange-500/100/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-orange-500/100/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-orange-300 transition-colors">
                        {action.label}
                      </p>
                      <p className="text-[10px] text-gray-400 font-light">{action.desc}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-orange-400 transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="lg:col-span-2 bg-[#121215]/90 border border-white/[0.08] rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <h2 className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              System Activity Log
            </h2>
            <span className="text-[10px] font-mono text-gray-400">Live Feed</span>
          </div>

          <div className="flex flex-col items-center justify-center py-12 text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-[#1a1a1e] border border-white/10 flex items-center justify-center text-gray-500">
              <TrendingUp className="w-7 h-7 text-orange-400/60" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">No Activity Recorded Yet</p>
              <p className="text-gray-400 text-xs font-light max-w-sm mt-1">
                New blog posts, events, and newsletter uploads will appear here in real-time.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-1.5 text-gray-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Database Engine Online
            </span>
            <span className="text-[11px] text-gray-400">Supabase PostgreSQL</span>
          </div>
        </div>
      </div>

      {/* Content Status & Traffic Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Status */}
        <div className="bg-[#121215]/90 border border-white/[0.08] rounded-3xl p-6 backdrop-blur-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <h2 className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Content Status Breakdown
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-center space-y-1">
              <p className="text-3xl font-extrabold text-emerald-400" style={{ fontFamily: "'Outfit', sans-serif" }}>0</p>
              <p className="text-xs font-semibold text-emerald-300/80 uppercase tracking-wider">Published Items</p>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 text-center space-y-1">
              <p className="text-3xl font-extrabold text-amber-400" style={{ fontFamily: "'Outfit', sans-serif" }}>0</p>
              <p className="text-xs font-semibold text-amber-300/80 uppercase tracking-wider">Draft Items</p>
            </div>
          </div>
        </div>

        {/* Website Traffic */}
        <div className="bg-[#121215]/90 border border-white/[0.08] rounded-3xl p-6 backdrop-blur-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <h2 className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Traffic Analytics
            </h2>
            <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-md text-gray-400">GA Integration</span>
          </div>

          <div className="flex flex-col items-center justify-center py-6 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-orange-500/100/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <Clock className="w-5 h-5 text-orange-400" />
            </div>
            <p className="text-white text-xs font-semibold">Analytics Connection Pending</p>
            <p className="text-gray-400 text-[11px] font-light max-w-xs">
              Connect Google Analytics ID in Settings to track page views and visitors.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
