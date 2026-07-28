import { PageHero } from '../../../src/components/PageHero';
import { EventsPage } from '../../../src/views/EventsPage';

export const metadata = {
  title: 'Events | MEGA NSRIET',
  description: 'Explore upcoming events and technical workshops of the Mechanical Engineering Guild Association.',
};

export default function Events() {
  return (
    <div className="w-full flex flex-col items-center">
      <PageHero 
        title="Guild" 
        accentWord="Events"
        subtitle="Explore our upcoming events, technical workshops, and industrial visits."
      />
      <EventsPage />
    </div>
  );
}
