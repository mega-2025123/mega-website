import { PageHero } from '../../../src/components/PageHero';
import { GalleryPage } from '../../../src/views/GalleryPage';

export const metadata = {
  title: 'Gallery | MEGA NSRIET',
  description: 'Explore photo highlights, memorable moments, and industrial visits of the Mechanical Engineering Guild Association.',
};

export default function Gallery() {
  return (
    <div className="w-full flex flex-col items-center">
      <PageHero 
        title="Guild" 
        accentWord="Gallery"
        subtitle="Memorable moments, event highlights, and industrial exposure photo gallery."
      />
      <GalleryPage />
    </div>
  );
}
