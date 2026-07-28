import { Navbar } from '../../src/components/Navbar';
import { Footer } from '../../src/components/Footer';
import { EmberCanvas } from '../../src/components/EmberCanvas';
import ClickSparkle from '../../src/components/ClickSparkle';
import DotField from '../../src/components/DotField';

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-between selection:bg-orange-600 selection:text-white relative">
      <ClickSparkle />
      <DotField className="opacity-40" />
      <EmberCanvas />
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center relative z-10 pt-32 md:pt-36 lg:pt-40">
        {children}
      </main>
      <Footer />
    </div>
  );
}
