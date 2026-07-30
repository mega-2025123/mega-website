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
    <div className="pb-20 pt-2 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full flex justify-center min-h-[60vh] bg-[#090909]">
      <div className="w-full space-y-10">

        {/* Gallery Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {galleryList.map((item) => {
            return (
              <div 
                key={item.id} 
                className="card-jaswanth-24 overflow-hidden group hover:border-[#F97316] p-2"
              >
                {/* Photo Container with Zoom & Click Preview */}
                <div 
                  onClick={() => setSelectedImage(item.image)}
                  className="w-full h-64 rounded-2xl overflow-hidden bg-[#090909] border border-[#2F2F2F] relative cursor-pointer group/img"
                >
                  <img 
                    src={item.image} 
                    alt="Guild Photo" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 flex items-center justify-center gap-2 text-white font-medium text-xs">
                    <Eye className="w-4 h-4 text-[#F97316]" />
                    <span>Click to Expand</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Photo Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8">
            <div className="relative max-w-4xl w-full bg-[#1C1C1C] border border-[#2F2F2F] rounded-3xl p-4 sm:p-6 overflow-hidden shadow-2xl">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-[#B3B3B3] hover:text-white p-2 rounded-full bg-[#090909] border border-[#2F2F2F] z-10"
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
