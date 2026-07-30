'use client';

import React, { useState, useEffect } from 'react';
import { X, Eye } from 'lucide-react';

const initialPhotos = [
  { id: 1, image: '/assets/Industrial Visit-Jindhal.jpg' },
  { id: 2, image: '/assets/3D-Printing.jpg' },
  { id: 3, image: '/assets/Guest Lecture.jpg' },
  { id: 4, image: '/assets/Freshers.jpg' },
  { id: 5, image: '/assets/NSS.jpeg' },
];

export const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryList, setGalleryList] = useState(initialPhotos);

  useEffect(() => {
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((item) => ({
            id: item.id,
            image: item.url,
          }));
          setGalleryList(mapped);
        }
      })
      .catch((err) => console.error('Gallery fetch error:', err));
  }, []);

  return (
    <div className="pb-20 pt-2 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full flex justify-center min-h-[60vh]">
      <div className="w-full space-y-10">

        {/* Gallery Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {galleryList.map((item, i) => {
            return (
              <div 
                key={item.id} 
                className="card-jaswanth-24 overflow-hidden group hover:border-orange-500/40 transition-all duration-300 animate-fadeInUp p-2"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Photo Container with Zoom & Click Preview */}
                <div 
                  onClick={() => setSelectedImage(item.image)}
                  className="w-full h-64 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 relative cursor-pointer group/img"
                >
                  <img 
                    src={item.image} 
                    alt="Guild Photo" 
                    className="w-full h-full object-cover group-hover/img:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-[2px]">
                    <Eye className="w-4 h-4 text-orange-400" />
                    <span>Click to Expand</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Photo Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
            <div className="relative max-w-4xl w-full bg-[#111111] border border-white/10 rounded-3xl p-4 sm:p-6 overflow-hidden shadow-2xl">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-full bg-black/60 border border-white/10 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full max-h-[80vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                <img 
                  src={selectedImage} 
                  alt="Guild Photo Fullview"
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
