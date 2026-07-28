import { PageHero } from '../../../src/components/PageHero';
import { TeamGrid } from '../../../src/components/TeamGrid';

export const metadata = {
  title: 'Executive Team | MEGA NSRIET',
  description: 'Meet the 11 executive student office bearers leading the Mechanical Engineering Guild Association at NSRIET.',
};

export default function Team() {
  return (
    <div className="w-full flex flex-col items-center">
      <PageHero 
        title="Executive" 
        accentWord="Team"
        subtitle="The passionate student leaders driving MEGA forward at NSRIET."
      />
      <TeamGrid />
    </div>
  );
}
