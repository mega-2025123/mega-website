'use client';

import { Upload, Image as ImageIcon, Trash2, Plus } from 'lucide-react';
import { useState } from 'react';

export default function GalleryPage() {
  const [images, setImages] = useState([]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-outfit text-2xl font-bold text-gray-900">Gallery</h1>
        <button className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600">
          <Upload className="h-4 w-4" />
          Upload Images
        </button>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6">
        <h2 className="font-outfit text-lg font-semibold text-gray-900 mb-4">Albums</h2>
        <p className="text-gray-500">Albums coming soon</p>
      </div>

      {images.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white py-12 text-center">
          <ImageIcon className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="font-outfit text-lg font-semibold text-gray-900">No images yet</h3>
          <p className="mt-1 text-sm text-gray-500">Upload your first image to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Map through images here */}
        </div>
      )}
    </div>
  );
}
