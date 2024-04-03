import React from 'react';

import Hero from './components/Hero';
import About from './components/About';

// import ContactSection from './components/ContactSection';
// import BookingSection from './components/BookingSection';
// import Footer from './components/Footer';
import Custom from './components/Custom';

function App() {
  return (
    <div>
      <Custom />
      <Hero />
      <About />
      
      {/* <ContactSection />
      <BookingSection />
      <Footer /> */}
    </div>
  );
}

export default App;
