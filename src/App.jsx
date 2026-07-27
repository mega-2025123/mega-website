import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { BlogPage } from './pages/BlogPage';
import { EventsPage } from './pages/EventsPage';
import { NewslettersPage } from './pages/NewslettersPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-orange-600 selection:text-white">
        {/* Sticky Header & Navigation */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1 w-full flex flex-col items-center">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/newsletters" element={<NewslettersPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
