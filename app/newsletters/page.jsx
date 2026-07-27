import { PageHero } from '../../src/components/PageHero';
import { NewslettersPage } from '../../src/views/NewslettersPage';

export const metadata = {
  title: 'Newsletters | MEGA NSRIET',
  description: 'Browse past newsletters and monthly bulletins published by the Mechanical Engineering Guild Association.',
};

export default function Newsletters() {
  return (
    <div className="w-full flex flex-col items-center">
      <PageHero 
        title="Monthly" 
        accentWord="Newsletters"
        subtitle="Browse our published bulletins and monthly edition recaps."
      />
      <NewslettersPage />
    </div>
  );
}
