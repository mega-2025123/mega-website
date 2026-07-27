'use client';

import React, { useState } from 'react';
import { BookOpen, Clock, User, ArrowRight, X, Sparkles } from 'lucide-react';

export const BlogPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const blogs = [
    {
      id: 1,
      title: 'Welcome to the Official MEGA Guild Portal 🚀',
      author: 'Rohith Pramodh Kottoju',
      role: 'President, MEGA Guild',
      date: '2025',
      readTime: '3 min read',
      category: 'President\'s Desk',
      summary: 'An introduction to our new guild portal, our vision for mechanical engineering students at NSRIET, and our roadmap for technical excellence in 2025.',
      content: `Welcome students, faculty, and engineering enthusiasts! 

As the President of the Mechanical Engineering Guild Association (MEGA), it brings me tremendous excitement to launch our brand-new official website and digital portal.

MEGA was established with a singular focus: to bridge the gap between classroom theory and real-world engineering practice. Through technical symposiums, hands-on CAD workshops, 3D printing labs, and industrial plant visits, our guild is dedicated to creating a vibrant ecosystem of future-ready mechanical engineers.

We invite all mechanical engineering students at NSRIET to actively participate in our upcoming events, join our executive committees, and lead innovative technical projects. Together, we build, innovate, and forge the future!`,
      featured: true,
    },
    {
      id: 2,
      title: 'The Future of Additive Manufacturing & 3D Printing in Mechanical Engineering ⚙️',
      author: 'Jaswanth Ganta',
      role: 'Executive Member',
      date: '2025',
      readTime: '4 min read',
      category: 'Tech Insights',
      summary: 'Exploring how FDM 3D printing and generative design are revolutionizing rapid prototyping in modern mechanical engineering.',
      content: `Additive manufacturing has transitioned from rapid prototyping to direct digital manufacturing. In this article, we explore how 3D printing technologies like Fused Deposition Modeling (FDM) and Selective Laser Sintering (SLS) empower mechanical engineers to iterate complex geometries faster than ever before.

Key Takeaways:
1. Generative Design: Optimizing weight while maintaining structural strength using AI algorithms.
2. Rapid Tooling: Custom jigs and fixtures created in hours rather than weeks.
3. Student Prototyping: How MEGA labs provide hands-on 3D printing access to mechanical students at NSRIET.`,
      featured: false,
    }
  ];

  return (
    <div className="pb-20 pt-2 px-6 md:px-12 max-w-6xl mx-auto w-full flex justify-center min-h-[60vh]">
      <div className="w-full space-y-8">

        {/* Blogs List */}
        <div className="space-y-6">
          {blogs.map((blog, i) => (
            <div 
              key={blog.id} 
              className={`card-jaswanth-24 ${blog.featured ? 'fire-border-left bg-gradient-to-r from-orange-500/10 via-transparent to-transparent' : ''} space-y-4 animate-fadeInUp`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-orange-400 font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px]">
                    {blog.category}
                  </span>
                  {blog.featured && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full uppercase">
                      <Sparkles className="w-3 h-3" /> Featured Post
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-orange-500" /> {blog.readTime}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white hover:text-orange-400 transition-colors leading-snug">
                {blog.title}
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                {blog.summary}
              </p>

              <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 text-xs font-bold">
                    {blog.author.charAt(0)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">{blog.author}</span>
                    <span className="text-[10px] text-gray-400 block font-light">{blog.role}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedArticle(blog)}
                  className="btn-jaswanth-secondary text-xs group"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-orange-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Full Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
            <div className="relative max-w-3xl w-full bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl space-y-6">
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-full bg-black/60 border border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full inline-block">
                  {selectedArticle.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {selectedArticle.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-gray-400 pt-1">
                  <span>By <strong className="text-white">{selectedArticle.author}</strong> ({selectedArticle.role})</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div className="text-gray-300 text-sm font-light leading-relaxed space-y-4 whitespace-pre-line">
                {selectedArticle.content}
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="btn-jaswanth-secondary text-xs py-2 px-5"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
