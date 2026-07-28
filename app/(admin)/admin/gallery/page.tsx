'use client';

import { Upload, Image as ImageIcon, Trash2, Plus, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { FileUpload } from '@/src/components/admin/FileUpload';

export default function GalleryPage() {
  const [images, setImages] = useState<Array<{ id: string; url: string; title: string }>>([
    { id: '1', url: '/assets/Industrial Visit-Jindhal.jpg', title: 'Industrial Visit — Jindal Steel' },
    { id: '2', url: '/assets/3D-Printing.jpg', title: '3D Printing Workshop' },
    { id: '3', url: '/assets/Guest Lecture.jpg', title: 'Expert Guest Lecture' },
    { id: '4', url: '/assets/Freshers.jpg', title: 'MEGA Freshers' },
    { id: '5', url: '/assets/NSS.jpeg', title: 'NSS Campus Cleanliness' },
  ]);

  const [showUploader, setShowUploader] = useState(false);

  const handleUploadedImage = (url: string) => {
    if (url) {
      const newImg = {
        id: String(Date.now()),
        url,
        title: `Uploaded Photo ${images.length + 1}`,
      };
      setImages([newImg, ...images]);
      setShowUploader(false);
    }
  };

  const removeImage = (id: string) => {
    setImages(images.filter((img) => img.id !== id));
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-white">Guild Photo Gallery</h1>
          <p className="text-gray-400 text-xs mt-0.5">Manage and upload photos for the public gallery page</p>
        </div>
        <button
          onClick={() => setShowUploader(!showUploader)}
          className="flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition-all shadow-md cursor-pointer"
        >
          <Upload className="h-4 w-4" />
          {showUploader ? 'Close Uploader' : 'Upload New Photo'}
        </button>
      </div>

      {/* Upload Box */}
      {showUploader && (
        <div className="bg-[#121215]/90 border border-white/10 rounded-2xl p-6 shadow-xl animate-fadeIn space-y-4">
          <h3 className="text-sm font-bold text-orange-400 uppercase tracking-wider">Upload Photo to Gallery</h3>
          <FileUpload
            accept="image/*"
            folder="mega/gallery"
            placeholder="Click or drag image file here to add to gallery"
            onChange={handleUploadedImage}
          />
        </div>
      )}

      {/* Image Grid */}
      {images.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#121215]/50 py-16 text-center">
          <ImageIcon className="h-12 w-12 text-gray-500 mb-4" />
          <h3 className="font-heading text-lg font-semibold text-white">No gallery images</h3>
          <p className="mt-1 text-xs text-gray-400">Upload your first image to display in the photo gallery.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="group relative bg-[#141418] border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all hover:border-orange-500/40 hover:-translate-y-1"
            >
              <div className="h-48 w-full overflow-hidden bg-black/60 relative">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => removeImage(img.id)}
                  className="absolute top-3 right-3 p-2 bg-black/70 hover:bg-red-600 text-white rounded-xl transition-colors backdrop-blur-md cursor-pointer opacity-0 group-hover:opacity-100"
                  title="Delete Image"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="p-3 border-t border-white/5">
                <p className="text-xs font-medium text-white truncate">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
