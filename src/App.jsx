import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import './index.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
