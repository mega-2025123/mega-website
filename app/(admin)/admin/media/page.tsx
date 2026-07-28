'use client';

import { Upload, FolderOpen, Copy, Trash2, Grid, List, Search } from 'lucide-react';
import { useState } from 'react';

export default function MediaLibraryPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const tabs = ['All', 'Images', 'Documents', 'Videos'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold text-white">Media Library</h1>
        <button className="flex items-center gap-2 rounded-xl bg-orange-500/100 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600">
          <Upload className="h-4 w-4" />
          Upload
        </button>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-gray-100 bg-white p-4">
        <div className="flex space-x-2">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${activeTab === tab ? 'bg-gray-100 text-white' : 'text-gray-500 hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search media..."
              className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white py-2 pl-9 pr-4 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:w-64"
            />
          </div>
          <div className="flex items-center rounded-lg border border-gray-200 bg-[#18181c] border-white/10 text-white p-1">
            <button
              onClick={() => setView('grid')}
              className={`rounded p-1 ${view === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-white'}`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setView('list')}
              className={`rounded p-1 ${view === 'list' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-white'}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white py-12 text-center">
        <FolderOpen className="h-12 w-12 text-gray-400 mb-4" />
        <h3 className="font-heading text-lg font-semibold text-white">No media files yet</h3>
        <p className="mt-1 text-sm text-gray-500">Upload files to populate your media library.</p>
      </div>
    </div>
  );
}
