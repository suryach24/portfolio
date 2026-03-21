import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SLOPanel from './components/SLOPanel';
import About from './components/About';
import CareerJourney from './components/CareerJourney';
import WarStories from './components/WarStories';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <SLOPanel />
        <About />
        <CareerJourney />
        <WarStories />
        <Skills />
        <Certifications />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
