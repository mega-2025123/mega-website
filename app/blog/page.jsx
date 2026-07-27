import { PageHero } from '../../src/components/PageHero';
import { BlogPage } from '../../src/views/BlogPage';

export const metadata = {
  title: 'Blog | MEGA NSRIET',
  description: 'Read articles, stories, and insights from the Mechanical Engineering Guild Association at NSRIET.',
};

export default function Blog() {
  return (
    <div className="w-full flex flex-col items-center">
      <PageHero 
        title="Guild" 
        accentWord="Blog"
        subtitle="Articles, stories, and insights from the MEGA community."
      />
      <BlogPage />
    </div>
  );
}
