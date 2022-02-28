import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

function About() {


  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div id="about" className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">What is RedN?</h1>
            <p className="text-xl text-gray-600">RedN is a framework that enables complex offloads on commodity RDMA NICs. It shows that, by combining RDMA operations together into chains, one could realize complex functionality such as conditional logic (e.g. if statements) and loops.</p>
          </div>

        </div >
      </div >
    </section >
  );
}

export default About;
