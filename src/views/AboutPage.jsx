'use client';

import React, { useState } from 'react';
import { AboutSection } from '../components/AboutSection';
import { CollegeOfficials } from '../components/CollegeOfficials';
import { DepartmentSection } from '../components/DepartmentSection';
import { Modals } from '../components/Modals';

export const AboutPage = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [modalData, setModalData] = useState(null);

  const openOfficialMessage = (officialData) => {
    setActiveModal('official-message');
    setModalData(officialData);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalData(null);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <AboutSection />
      <CollegeOfficials openOfficialMessage={openOfficialMessage} />
      <DepartmentSection />
      <Modals activeModal={activeModal} closeModal={closeModal} modalData={modalData} />
    </div>
  );
};
