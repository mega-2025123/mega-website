import { PageHero } from '../../src/components/PageHero';
import { AboutPage } from '../../src/views/AboutPage';

export const metadata = {
  title: 'About Us | MEGA NSRIET',
  description: 'Learn about the Mechanical Engineering Guild Association at NSRIET, our founding vision, college officials, and department leadership.',
};

export default function About() {
  return (
    <div className="w-full flex flex-col items-center">
      <PageHero 
        title="About" 
        accentWord="MEGA"
        subtitle="Discover our founding story, leadership team, and the vision behind the Mechanical Engineering Guild Association."
      />
      <AboutPage />
    </div>
  );
}
