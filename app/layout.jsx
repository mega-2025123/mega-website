import './globals.css';
import { Navbar } from '../src/components/Navbar';
import { Footer } from '../src/components/Footer';
import { EmberCanvas } from '../src/components/EmberCanvas';
import ClickSparkle from '../src/components/ClickSparkle';
import DotField from '../src/components/DotField';

export const metadata = {
  title: 'MEGA — Mechanical Engineering Guild Association | NSRIET',
  description: 'Official website of the Mechanical Engineering Guild Association (MEGA) at N S Raju Institute of Engineering and Technology (NSRIET), Visakhapatnam. Established 2025.',
  keywords: ['MEGA', 'NSRIET', 'Mechanical Engineering', 'Mechanical Guild', 'Visakhapatnam', 'Engineering Club'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-between selection:bg-orange-600 selection:text-white relative">
        <ClickSparkle />
        <DotField className="opacity-40" />
        <EmberCanvas />
        <Navbar />
        <main className="flex-1 w-full flex flex-col items-center relative z-10 pt-32 md:pt-36 lg:pt-40">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
