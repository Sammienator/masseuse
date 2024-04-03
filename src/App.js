import React from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Items from './components/Items';
import ContactSection from './components/Contact';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import Custom from './components/Custom';

function App() {
  return (
    <div>
      <Custom />
      <Hero />
      <About />
      <Items />
      <ContactSection />
      <BookingSection />
      <Footer />
    </div>
  );
}

export default App;
