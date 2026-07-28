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
} from 'lucide-react';

const stats = [
  { label: 'Total Blogs', value: '0', icon: FileText, color: 'bg-blue-500/10 text-blue-500', href: '/admin/blogs' },
  { label: 'Total Events', value: '0', icon: Calendar, color: 'bg-emerald-500/10 text-emerald-500', href: '/admin/events' },
  { label: 'Newsletters', value: '0', icon: Newspaper, color: 'bg-purple-500/10 text-purple-500', href: '/admin/newsletters' },
  { label: 'Gallery Images', value: '0', icon: Image, color: 'bg-amber-500/10 text-amber-500', href: '/admin/gallery' },
  { label: 'Announcements', value: '0', icon: Megaphone, color: 'bg-rose-500/10 text-rose-500', href: '/admin/announcements' },
  { label: 'Messages', value: '0', icon: Mail, color: 'bg-cyan-500/10 text-cyan-500', href: '/admin/messages' },
];

const quickActions = [
  { label: 'New Blog', icon: Plus, href: '/admin/blogs/new', color: 'bg-blue-500 hover:bg-blue-600' },
  { label: 'Add Event', icon: Plus, href: '/admin/events/new', color: 'bg-emerald-500 hover:bg-emerald-600' },
  { label: 'Upload Newsletter', icon: Upload, href: '/admin/newsletters/new', color: 'bg-purple-500 hover:bg-purple-600' },
  { label: 'Upload Images', icon: Upload, href: '/admin/gallery', color: 'bg-amber-500 hover:bg-amber-600' },
  { label: 'New Announcement', icon: Plus, href: '/admin/announcements/new', color: 'bg-rose-500 hover:bg-rose-600' },
];

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Dashboard
        </h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back to the MEGA Admin Panel</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="group bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-gray-200 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-xl ${stat.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 transition-colors ml-auto" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Quick Actions</h2>
          <div className="space-y-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-md ${action.color}`}
                >
                  <Icon className="w-4 h-4" />
                  {action.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Recent Activity</h2>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5 text-gray-300" />
            </div>
            <p className="text-gray-400 text-sm font-medium">No recent activity</p>
            <p className="text-gray-300 text-xs mt-1">Activity will appear here as you create content</p>
          </div>
        </div>
      </div>

      {/* Content Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Published vs Drafts */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Content Status</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600">0</p>
              <p className="text-xs text-emerald-600/70 mt-1">Published</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-amber-600">0</p>
              <p className="text-xs text-amber-600/70 mt-1">Drafts</p>
            </div>
          </div>
        </div>

        {/* Website Stats Placeholder */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Website Traffic</h2>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-3">
              <Eye className="w-5 h-5 text-gray-300" />
            </div>
            <p className="text-gray-400 text-sm font-medium">Analytics coming soon</p>
            <p className="text-gray-300 text-xs mt-1">Connect Google Analytics to see traffic data</p>
          </div>
        </div>
      </div>
    </div>
  );
}
