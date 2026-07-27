import { Hero } from '../src/components/Hero';
import { WelcomeSection } from '../src/components/WelcomeSection';
import { LatestUpdates } from '../src/components/LatestUpdates';
import { UpcomingEvents } from '../src/components/UpcomingEvents';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <WelcomeSection />
      <LatestUpdates />
      <UpcomingEvents />
    </div>
  );
}
