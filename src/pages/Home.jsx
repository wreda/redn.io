import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import About from '../partials/About';
import Features from '../partials/Features';
import Publications from '../partials/Publications';
import Contact from '../partials/Contact';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
	<About />
	<Features />
        <Publications />
        <Contact />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;
