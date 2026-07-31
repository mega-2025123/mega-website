'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, X, Eye } from 'lucide-react';

const initialEvents = [
  {
    id: 'jindal',
    title: 'Industrial Visit — Jindal Steel Plant',
    date: 'NSRIET Academic Calendar 2025',
    category: 'Industrial Exposure',
    location: 'Jindal Steel Plant, Vizag',
    image: '/assets/Industrial Visit-Jindhal.jpg',
    description: 'Hands-on industrial visit to Jindal Steel Plant, gaining first-hand knowledge of heavy manufacturing, blast furnaces, and industrial quality control systems.'
  },
  {
    id: '3d-printing',
    title: '3D Printing & Additive Manufacturing Workshop',
    date: 'Technical Workshop 2025',
    category: 'Technical Workshops',
    location: 'Mechanical CAD Lab, NSRIET',
    image: '/assets/3D-Printing.jpg',
    description: 'Interactive workshop exploring rapid prototyping, FDM 3D printing, slicing software, and CAD model optimization.'
  },
  {
    id: 'guest-lecture',
    title: 'Expert Guest Lecture on Industrial Robotics',
    date: 'Guest Symposium 2025',
    category: 'Technical Workshops',
    location: 'NSRIET Auditorium',
    image: '/assets/Guest Lecture.jpg',
    description: 'Insightful lecture delivered by industry veterans on automated manufacturing lines, CNC programming, and Industry 4.0 standards.'
  },
  {
    id: 'freshers',
    title: 'MEGA Freshers & Guild Orientation',
    date: 'Guild Flagship Event',
    category: 'Orientation & Guild',
    location: 'Main Campus Quadrangle',
    image: '/assets/Freshers.jpg',
    description: 'Welcoming the new batch of mechanical engineering students into the guild with interactive leadership speeches and team-building activities.'
  },
  {
    id: 'nss',
    title: 'NSS Campus & Cleanliness Drive',
    date: 'Social Responsibility Drive',
    category: 'Orientation & Guild',
    location: 'NSRIET Campus Grounds',
    image: '/assets/NSS.jpeg',
    description: 'Social service drive organized by mechanical engineering students promoting environmental sustainability and green engineering principles.'
  }
];

export const EventsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [eventsList, setEventsList] = useState(initialEvents);

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((evt) => ({
            id: evt.id,
            title: evt.name,
            date: evt.date ? new Date(evt.date).toLocaleDateString() : 'Upcoming',
            category: evt.status || 'Event',
            location: evt.venue || 'NSRIET Campus',
            image: evt.banner || '/assets/3D-Printing.jpg',
            description: evt.description || '',
          }));
          setEventsList(mapped);
        }
      })
      .catch((err) => console.error('Events fetch error:', err));
  }, []);

  return (
    <div className="pb-20 pt-2 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full flex justify-center min-h-[60vh] bg-[#090909]">
      <div className="w-full space-y-10">

        {/* Events Grid - No Card Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {eventsList.map((evt) => {
            return (
              <div 
                key={evt.id} 
                className="border-t border-[#2F2F2F] pt-6 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Photo Container with Zoom & Click Preview */}
                  <div 
                    onClick={() => setSelectedImage(evt)}
                    className="w-full h-48 rounded-2xl overflow-hidden bg-[#090909] mb-5 relative cursor-pointer group/img"
                  >
                    <img 
                      src={evt.image} 
                      alt={evt.title} 
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 flex items-center justify-center gap-2 text-white font-medium text-xs rounded-2xl">
                      <Eye className="w-4 h-4 text-[#F97316]" />
                      <span>Click to Expand</span>
                    </div>
                    <span className="absolute top-3 left-3 bg-[#141414] border border-[#F97316]/40 text-[#F97316] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {evt.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#F97316] mb-2">
                    {evt.title}
                  </h3>
                  <p className="text-[#B3B3B3] text-xs font-light leading-relaxed mb-4">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2F2F2F] flex items-center justify-between text-[11px] text-[#B3B3B3] font-medium">
                  <span className="flex items-center gap-1 text-white">
                    <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                    {evt.date}
                  </span>
                  <span className="flex items-center gap-1 text-[#B3B3B3]">
                    <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                    {evt.location}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Photo Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8">
            <div className="relative max-w-4xl w-full bg-[#141414] border border-[#2F2F2F] rounded-3xl p-4 sm:p-6 overflow-hidden shadow-2xl space-y-4">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-[#B3B3B3] hover:text-white p-2 rounded-full bg-[#090909] border border-[#2F2F2F] z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full max-h-[70vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl"
                />
              </div>

              <div className="space-y-1 text-left pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">{selectedImage.category}</span>
                <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                <p className="text-xs text-[#B3B3B3] font-light">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
