'use client';

import { useState } from 'react';

export default function SEOSettingsPage() {
  const [activeTab, setActiveTab] = useState('Home');
  const pages = ['Home', 'About', 'Blog', 'Events'];

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold text-white">SEO Settings</h1>
        <button className="rounded-xl bg-orange-500/100 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600">
          Save Settings
        </button>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 space-y-4">
        <h2 className="font-heading text-lg font-semibold text-white border-b border-gray-100 pb-2">Global SEO</h2>
        <div className="grid gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Website Title</label>
            <input type="text" className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Meta Description</label>
            <textarea rows={3} className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Keywords</label>
            <input type="text" placeholder="e.g. non-profit, charity, donate" className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Robots.txt</label>
            <textarea rows={4} className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 font-mono text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" defaultValue="User-agent: *&#10;Allow: /" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Open Graph Image</label>
              <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-xl file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-300 hover:file:bg-gray-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Twitter Card Image</label>
              <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-xl file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-300 hover:file:bg-gray-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Favicon</label>
              <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-xl file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-300 hover:file:bg-gray-200" />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 space-y-4">
        <h2 className="font-heading text-lg font-semibold text-white border-b border-gray-100 pb-2">Per-Page SEO</h2>
        
        <div className="flex space-x-2 border-b border-gray-100 pb-2 overflow-x-auto">
          {pages.map(page => (
            <button
              key={page}
              onClick={() => setActiveTab(page)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === page ? 'bg-gray-100 text-white' : 'text-gray-500 hover:text-white'}`}
            >
              {page}
            </button>
          ))}
        </div>

        <div className="grid gap-4 pt-2">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Meta Title</label>
            <input type="text" placeholder={`${activeTab} | My Website`} className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Meta Description</label>
            <textarea rows={2} className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Canonical URL</label>
            <input type="url" className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
