'use client';

export default function AboutCMSPage() {
  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h1 className="font-outfit text-2xl font-bold text-gray-900">Edit About Page</h1>
        <button className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600">
          Save Changes
        </button>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mission</label>
          <textarea rows={4} className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Our mission is..." />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Vision</label>
          <textarea rows={4} className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Our vision is..." />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">History</label>
          <textarea rows={6} className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Our history..." />
        </div>
      </div>
    </div>
  );
}
