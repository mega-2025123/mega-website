import { PageHero } from '../../src/components/PageHero';
import { NewslettersPage } from '../../src/views/NewslettersPage';

export const metadata = {
  title: 'Newsletters | MEGA NSRIET',
  description: 'Official bulletins and newsletters published by the Mechanical Engineering Guild Association.',
};

export default function Newsletters() {
  return (
    <div className="w-full flex flex-col items-center">
      <PageHero 
        accentWord="Newsletters"
        subtitle="Official bulletins, technical insights, and guild announcements from MEGA."
      />
      <NewslettersPage />
    </div>
  );
}
