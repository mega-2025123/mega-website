import { Navbar } from '../../src/components/Navbar';
import { Footer } from '../../src/components/Footer';

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#090909] text-white flex flex-col justify-between selection:bg-[#F97316] selection:text-white relative">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center relative z-10 bg-[#090909]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
