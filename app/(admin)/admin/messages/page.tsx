'use client';

import { Mail, MailOpen, Trash2, Search } from 'lucide-react';

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold text-white">Contact Messages</h1>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white py-2 pl-9 pr-4 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Mail className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="font-heading text-lg font-semibold text-white">No messages yet</h3>
          <p className="mt-1 text-sm text-gray-500">When someone contacts you, their message will appear here.</p>
        </div>
      </div>
    </div>
  );
}
