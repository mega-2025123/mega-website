'use client';

export default function HomeCMSPage() {
  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h1 className="font-outfit text-2xl font-bold text-gray-900">Edit Homepage</h1>
        <button className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600">
          Save Changes
        </button>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 space-y-4">
        <h2 className="font-outfit text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2">Hero Section</h2>
        <div className="grid gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Background Image</label>
            <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-xl file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Heading</label>
            <input type="text" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
            <input type="text" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
              <input type="text" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Button Link</label>
              <input type="text" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 space-y-4">
        <h2 className="font-outfit text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2">About Section</h2>
        <div className="grid gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input type="text" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea rows={4} className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 space-y-4">
        <h2 className="font-outfit text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2">Statistics</h2>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Label {i}</label>
              <input type="text" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Value {i}</label>
              <input type="text" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 space-y-4">
        <h2 className="font-outfit text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2">Featured Content</h2>
        <div className="grid gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Featured Blog</label>
            <select className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500">
              <option>Select a blog...</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Featured Event</label>
            <select className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500">
              <option>Select an event...</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
