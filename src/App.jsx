
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import NotFound from './NotFound';


const HomePage = () => {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
