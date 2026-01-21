import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Advantages } from './components/Advantages';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { Results } from './components/Results';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Advantages />
      <Services />
      <Team />
      <Results />
      <Testimonials />
      <Footer />
    </div>
  );
}