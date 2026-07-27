import React from 'react';
import { X, Mail, Bell, BookOpen, Calendar, ShieldCheck, CheckCircle2, ArrowRight, Send } from 'lucide-react';

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
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 border border-white/10 text-gray-400 hover:text-white hover:border-orange-500 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* --- OFFICIAL MESSAGE MODAL --- */}
        {activeModal === 'official-message' && modalData && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-12 h-12 rounded-xl bg-orange-950/80 border border-orange-500/40 flex items-center justify-center text-orange-400 font-bold font-heading text-lg">
                {modalData.initials}
              </div>
              <div>
                <span className="role-tag block">{modalData.role}</span>
                <h3 className="text-2xl font-bold font-heading text-white">{modalData.name}</h3>
                <p className="text-xs text-orange-400 font-medium">{modalData.qualification}</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none text-gray-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p className="font-semibold text-white text-base">
                Greetings to the faculty, students, and well-wishers of NSRIET!
              </p>
              <p>{modalData.message}</p>
              <p>
                "Mechanical engineering is the backbone of technological progress. With unity and perseverance, MEGA will inspire our students to scale new heights."
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span>{modalData.institution}</span>
              <span className="text-orange-400 font-bold">ESTD 2025</span>
            </div>
          </div>
        )}

        {/* --- NOTIFICATIONS MODAL --- */}
        {activeModal === 'notifications' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2.5 rounded-xl bg-orange-950/60 border border-orange-500/40 text-orange-400">
                <Bell className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-white">Guild Notifications</h3>
                <p className="text-xs text-gray-400">Official announcements and activity feeds</p>
              </div>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              <div className="p-4 rounded-xl bg-neutral-900 border border-orange-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-950 text-orange-400 uppercase tracking-wider">Launch</span>
                  <span className="text-[11px] text-gray-500">2025</span>
                </div>
                <h4 className="font-bold text-white text-base">Official MEGA Guild Website Released!</h4>
                <p className="text-xs text-gray-300">
                  Welcome to the standalone official web portal of the Mechanical Engineering Guild Association at NSRIET.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-neutral-800 text-gray-300 uppercase tracking-wider">Emblem</span>
                  <span className="text-[11px] text-gray-500">2025</span>
                </div>
                <h4 className="font-bold text-white text-base">New Guild Emblem & Colors Unveiled</h4>
                <p className="text-xs text-gray-300">
                  Our heat-treated steel and fire glow branding represents the strength, passion, and resilience of our mechanical engineers.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* --- BLOG MODAL --- */}
        {activeModal === 'blog' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2.5 rounded-xl bg-orange-950/60 border border-orange-500/40 text-orange-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-white">Guild Blog & Publications</h3>
                <p className="text-xs text-gray-400">Articles, technical guides, and student highlights</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="steel-card p-5 bg-neutral-900">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">Featured Article</span>
                <h4 className="text-lg font-bold text-white mt-1">Founding MEGA: A New Era for NSRIET Mechanical Engineers</h4>
                <p className="text-xs text-gray-300 mt-2">
                  An inside look at how the students and faculty united in 2025 to create a dedicated guild for technical growth, innovation, and unity.
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                  <span>By Executive Team</span>
                  <span className="text-orange-400 font-semibold cursor-pointer">Read Full Article →</span>
                </div>
              </div>

              <div className="steel-card p-5 bg-neutral-900">
                <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Tech Spotlight</span>
                <h4 className="text-lg font-bold text-white mt-1">The Role of CAD/CAM & Robotics in Modern Manufacturing</h4>
                <p className="text-xs text-gray-300 mt-2">
                  Exploring industry 4.0 trends and how mechanical engineering students can leverage digital twin technologies.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* --- EVENTS MODAL --- */}
        {activeModal === 'events' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2.5 rounded-xl bg-orange-950/60 border border-orange-500/40 text-orange-400">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-white">Events Calendar</h3>
                <p className="text-xs text-gray-400">Symposiums, workshops, and guild activities</p>
              </div>
            </div>

            <div className="p-8 text-center bg-neutral-900/80 border border-dashed border-orange-500/30 rounded-2xl space-y-3">
              <span className="px-3 py-1 rounded-full bg-orange-950 text-orange-400 text-xs font-bold tracking-widest uppercase">
                COMING SOON
              </span>
              <h4 className="text-xl font-bold text-white uppercase font-heading tracking-wide">
                WE WILL POST UPCOMING EVENTS
              </h4>
              <p className="text-xs text-gray-400 max-w-sm mx-auto">
                We are actively planning technical workshops, CAD design contests, industrial site visits, and guest lectures for 2025.
              </p>
            </div>
          </div>
        )}

        {/* --- NEWSLETTERS MODAL --- */}
        {activeModal === 'newsletters' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2.5 rounded-xl bg-orange-950/60 border border-orange-500/40 text-orange-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-white">MEGA Newsletters</h3>
                <p className="text-xs text-gray-400">Subscribe for guild editions and activity digests</p>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to MEGA Newsletters!'); closeModal(); }} className="space-y-4 bg-neutral-900 p-6 rounded-xl border border-white/10">
              <h4 className="font-bold text-white text-base">Subscribe to Guild Updates</h4>
              <p className="text-xs text-gray-300">
                Get monthly digests of technical projects, faculty articles, and upcoming events delivered to your inbox.
              </p>

              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your student email..."
                  className="flex-1 bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
                />
                <button type="submit" className="btn-fire text-xs py-2.5 px-5">
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
