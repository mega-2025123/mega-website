import React from 'react';
import { Hero } from '../components/Hero';
import { WelcomeSection } from '../components/WelcomeSection';
import { LatestUpdates } from '../components/LatestUpdates';

export const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <WelcomeSection />
      <LatestUpdates />
    </div>
  );
};
