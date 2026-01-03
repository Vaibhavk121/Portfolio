import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Impact from './components/Impact';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import AnimatedBackground from './components/AnimatedBackground';
import Terminal from './components/Terminal';
import SEOHead from './components/SEOHead';
import emailjs from '@emailjs/browser';
import { preloadImages, getCriticalImages } from './utils/imageOptimization';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    
    // Preload critical images for faster deployment
    preloadImages(getCriticalImages()).catch(err => console.warn('Image preload warning:', err));
  }, []);

  // Add theme state and toggle function
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  // Check for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    setTheme(savedTheme);

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <>
      <SEOHead />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedBackground />
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            {/* <Impact /> */}
            <Blog />
            <Contact />
            <Footer />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <Terminal />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
