import { PageHero } from '../../src/components/PageHero';
import { AboutSection } from '../../src/components/AboutSection';
import { CollegeOfficials } from '../../src/components/CollegeOfficials';
import { DepartmentSection } from '../../src/components/DepartmentSection';

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
      <AboutSection />
      <CollegeOfficials />
      <DepartmentSection />
    </div>
  );
}
