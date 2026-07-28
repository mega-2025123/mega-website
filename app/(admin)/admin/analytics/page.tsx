'use client';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-outfit text-2xl font-bold text-gray-900">Analytics</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {['Total Visitors', 'Blog Views', 'Event Views', 'Newsletter Downloads'].map((stat) => (
          <div key={stat} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">{stat}</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">—</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="font-outfit text-lg font-semibold text-gray-900 mb-4">Popular Pages</h2>
          <div className="flex flex-col items-center justify-center py-8 text-center text-gray-500">
            <p>Connect Google Analytics to see your most popular pages.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="font-outfit text-lg font-semibold text-gray-900 mb-4">Setup Google Analytics</h2>
          <ol className="list-decimal list-inside space-y-3 text-sm text-gray-600">
            <li>Create a Google Analytics account.</li>
            <li>Get your Measurement ID (starts with "G-").</li>
            <li>Go to Settings {'>'} Integrations.</li>
            <li>Paste your Measurement ID and save.</li>
            <li>Data will start appearing here within 24 hours.</li>
          </ol>
          <button className="mt-6 rounded-xl bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600">
            Connect Now
          </button>
        </div>
      </div>
    </div>
  );
}
