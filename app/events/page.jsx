import { PageHero } from '../../src/components/PageHero';
import { EventsPage } from '../../src/views/EventsPage';

export const metadata = {
  title: 'Events & Gallery | MEGA NSRIET',
  description: 'Explore upcoming events, past activities, and the photo gallery of the Mechanical Engineering Guild Association.',
};

export default function Events() {
  return (
    <div className="w-full flex flex-col items-center">
      <PageHero 
        title="Events &" 
        accentWord="Gallery"
        subtitle="Explore our upcoming events, past milestones, and photo gallery."
      />
      <EventsPage />
    </div>
  );
}
