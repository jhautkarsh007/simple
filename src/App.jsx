import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BroadAreas from './components/BroadAreas';
import Speakers from './components/Speakers';
import Committee from './components/Committee';
import Registration from './components/Registration';
import VenueContact from './components/VenueContact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <BroadAreas />
        <Speakers />
        <Committee />
        <Registration />
        <VenueContact />
      </main>
      <Footer />
    </div>
  );
}
