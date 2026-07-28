'use client';

export default function SettingsPage() {
  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold text-white">Settings</h1>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <h2 className="font-heading text-lg font-semibold text-white">General</h2>
          <button className="rounded-xl bg-orange-500/100 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-orange-600">Save</button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Website Name</label>
            <input type="text" className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Organization Name</label>
            <input type="text" className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Logo</label>
            <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-xl file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-300 hover:file:bg-gray-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Favicon</label>
            <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-xl file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-300 hover:file:bg-gray-200" />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <h2 className="font-heading text-lg font-semibold text-white">Brand</h2>
          <button className="rounded-xl bg-orange-500/100 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-orange-600">Save</button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Primary Color</label>
            <div className="flex items-center gap-2">
              <input type="color" defaultValue="#f97316" className="h-10 w-10 rounded cursor-pointer border-0 p-0" />
              <input type="text" defaultValue="#f97316" className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 font-mono text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Secondary Color</label>
            <div className="flex items-center gap-2">
              <input type="color" defaultValue="#1f2937" className="h-10 w-10 rounded cursor-pointer border-0 p-0" />
              <input type="text" defaultValue="#1f2937" className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 font-mono text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <h2 className="font-heading text-lg font-semibold text-white">Contact</h2>
          <button className="rounded-xl bg-orange-500/100 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-orange-600">Save</button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input type="email" className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
            <input type="tel" className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-1">Address</label>
            <textarea rows={3} className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-1">Google Maps Link</label>
            <input type="url" className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <h2 className="font-heading text-lg font-semibold text-white">Social Media</h2>
          <button className="rounded-xl bg-orange-500/100 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-orange-600">Save</button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Facebook URL</label>
            <input type="url" className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Instagram URL</label>
            <input type="url" className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">LinkedIn URL</label>
            <input type="url" className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">YouTube URL</label>
            <input type="url" className="w-full rounded-xl border border-gray-200 bg-[#18181c] border-white/10 text-white p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <h2 className="font-heading text-lg font-semibold text-white">System</h2>
          <button className="rounded-xl bg-orange-500/100 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-orange-600">Save</button>
        </div>
        <div>
          <label className="flex items-center cursor-pointer gap-3">
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="block h-6 w-10 rounded-full bg-gray-200"></div>
              <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition"></div>
            </div>
            <div>
              <div className="text-sm font-medium text-white">Maintenance Mode</div>
              <div className="text-sm text-gray-500">Turn this on to disable public access to the website.</div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
