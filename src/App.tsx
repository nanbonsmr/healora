import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AppPreview from './components/AppPreview';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';
import ChatWidget from './components/ChatWidget';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-950 selection:bg-primary-100 selection:text-primary-900">
      <Navbar onGetStarted={openModal} />
      <main>
        <Hero onGetStarted={openModal} />
        <Features />
        <HowItWorks />
        <AppPreview onDownload={openModal} />
        <Testimonials />
        <Pricing onGetStarted={openModal} />
        <CTA onGetStarted={openModal} />
      </main>
      <Footer />
      <DownloadModal isOpen={isModalOpen} onClose={closeModal} />
      <ChatWidget />
    </div>
  );
}
