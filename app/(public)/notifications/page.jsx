import { PageHero } from '../../../src/components/PageHero';
import { NotificationsPage } from '../../../src/views/NotificationsPage';

export const metadata = {
  title: 'Notifications | MEGA NSRIET',
  description: 'Latest official announcements and notifications from the Mechanical Engineering Guild Association at NSRIET.',
};

export default function Notifications() {
  return (
    <div className="w-full flex flex-col items-center">
      <PageHero 
        title="Notification" 
        accentWord="Feed"
        subtitle="Stay informed with the latest official announcements from MEGA."
      />
      <NotificationsPage />
    </div>
  );
}
