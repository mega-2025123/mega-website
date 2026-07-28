'use client';

import { Trash2, RotateCcw, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export default function TrashPage() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Blogs', 'Events', 'Newsletters', 'Announcements', 'Gallery'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold text-white">Trash</h1>
        <button className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600">
          <AlertTriangle className="h-4 w-4" />
          Empty Trash
        </button>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
        <div className="flex space-x-2 border-b border-gray-100 p-4 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab ? 'bg-gray-100 text-white' : 'text-gray-500 hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Trash2 className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="font-heading text-lg font-semibold text-white">Trash is empty</h3>
          <p className="mt-1 text-sm text-gray-500">Items you delete will appear here for 30 days.</p>
        </div>
      </div>
    </div>
  );
}
