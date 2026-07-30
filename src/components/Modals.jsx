import React from 'react';
import { X, Mail, Bell, BookOpen, Calendar, Send } from 'lucide-react';

export const Modals = ({ activeModal, closeModal, modalData }) => {
  if (!activeModal) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div 
        className="modal-content text-white" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#090909] border border-[#2F2F2F] text-gray-400 hover:text-white hover:border-[#F97316]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* --- OFFICIAL MESSAGE MODAL --- */}
        {activeModal === 'official-message' && modalData && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#2F2F2F] pb-4">
              <div className="w-12 h-12 rounded-xl bg-[#090909] border border-[#2F2F2F] flex items-center justify-center text-[#F97316] font-bold font-heading text-lg">
                {modalData.initials}
              </div>
              <div>
                <span className="role-tag block">{modalData.role}</span>
                <h3 className="text-2xl font-bold font-heading text-white">{modalData.name}</h3>
                <p className="text-xs text-[#F97316] font-medium">{modalData.qualification}</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none text-[#B3B3B3] text-sm sm:text-base leading-relaxed">
              <p className="whitespace-pre-wrap">{modalData.message}</p>
            </div>

            <div className="pt-4 border-t border-[#2F2F2F] flex items-center justify-between text-xs text-[#B3B3B3]">
              <span>{modalData.institution}</span>
              <span className="text-[#F97316] font-bold">ESTD 2025</span>
            </div>
          </div>
        )}

        {/* --- NOTIFICATIONS MODAL --- */}
        {activeModal === 'notifications' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#2F2F2F] pb-4">
              <div className="p-2.5 rounded-xl bg-[#090909] border border-[#2F2F2F] text-[#F97316]">
                <Bell className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-white">Guild Notifications</h3>
                <p className="text-xs text-[#B3B3B3]">Official announcements and activity feeds</p>
              </div>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              <div className="p-4 rounded-xl bg-[#090909] border border-[#2F2F2F] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#1C1C1C] text-[#F97316] uppercase tracking-wider">Launch</span>
                  <span className="text-[11px] text-[#B3B3B3]">2025</span>
                </div>
                <h4 className="font-bold text-white text-base">Official MEGA Guild Website Released!</h4>
                <p className="text-xs text-[#B3B3B3]">
                  Welcome to the standalone official web portal of the Mechanical Engineering Guild Association at NSRIET.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* --- BLOG MODAL --- */}
        {activeModal === 'blog' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#2F2F2F] pb-4">
              <div className="p-2.5 rounded-xl bg-[#090909] border border-[#2F2F2F] text-[#F97316]">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-white">Guild Blog & Publications</h3>
                <p className="text-xs text-[#B3B3B3]">Articles, technical guides, and student highlights</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-[#090909] border border-[#2F2F2F] rounded-xl">
                <span className="text-[#F97316] text-xs font-bold uppercase tracking-wider">Featured Article</span>
                <h4 className="text-lg font-bold text-white mt-1">Founding MEGA: A New Era for NSRIET Mechanical Engineers</h4>
                <p className="text-xs text-[#B3B3B3] mt-2">
                  An inside look at how the students and faculty united in 2025 to create a dedicated guild for technical growth, innovation, and unity.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* --- EVENTS MODAL --- */}
        {activeModal === 'events' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#2F2F2F] pb-4">
              <div className="p-2.5 rounded-xl bg-[#090909] border border-[#2F2F2F] text-[#F97316]">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-white">Events Calendar</h3>
                <p className="text-xs text-[#B3B3B3]">Symposiums, workshops, and guild activities</p>
              </div>
            </div>

            <div className="p-8 text-center bg-[#090909] border border-dashed border-[#2F2F2F] rounded-2xl space-y-3">
              <span className="px-3 py-1 rounded-full bg-[#1C1C1C] text-[#F97316] text-xs font-bold tracking-widest uppercase">
                COMING SOON
              </span>
              <h4 className="text-xl font-bold text-white uppercase font-heading tracking-wide">
                WE WILL POST UPCOMING EVENTS
              </h4>
              <p className="text-xs text-[#B3B3B3] max-w-sm mx-auto">
                We are actively planning technical workshops, CAD design contests, industrial site visits, and guest lectures for 2025.
              </p>
            </div>
          </div>
        )}

        {/* --- NEWSLETTERS MODAL --- */}
        {activeModal === 'newsletters' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#2F2F2F] pb-4">
              <div className="p-2.5 rounded-xl bg-[#090909] border border-[#2F2F2F] text-[#F97316]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-white">MEGA Newsletters</h3>
                <p className="text-xs text-[#B3B3B3]">Subscribe for guild editions and activity digests</p>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to MEGA Newsletters!'); closeModal(); }} className="space-y-4 bg-[#090909] p-6 rounded-xl border border-[#2F2F2F]">
              <h4 className="font-bold text-white text-base">Subscribe to Guild Updates</h4>
              <p className="text-xs text-[#B3B3B3]">
                Get monthly digests of technical projects, faculty articles, and upcoming events delivered to your inbox.
              </p>

              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your student email..."
                  className="flex-1 bg-[#1C1C1C] border border-[#2F2F2F] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F97316]"
                />
                <button type="submit" className="btn-jaswanth-primary text-xs py-2.5 px-5">
                  <Send className="w-4 h-4" />
                  <span>Join</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
