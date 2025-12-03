import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { useState, useEffect, useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';

// Simple Image Carousel with fade effect and optimized loading
const SimpleImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set([0]));

  // Preload images on component mount
  useEffect(() => {
    images.forEach((img, index) => {
      const image = new Image();
      image.src = `./me/${img}`;
      image.onload = () => {
        setLoadedImages((prev) => new Set([...prev, index]));
      };
    });
  }, [images]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div className="w-full h-full relative ">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={`./me/${images[currentIndex]}`}
            alt={`Vaibhav Kumar ${currentIndex}`}
            className="w-full h-full object-cover rounded-lg"
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Preload next image */}
      <link 
        rel="preload" 
        as="image" 
        href={`./me/${images[nextIndex]}`}
      />
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 md:pt-0">
      <div className="section-container py-8 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <TypeAnimation
                sequence={[
                  'Hi, I\'m',
                  1000,
                  'Hi, I\'m Vaibhav Kumar',
                  1000,
                  'I\'m a Developer',
                  1000,
                  'I\'m a Tech Explorer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary-light dark:text-primary-dark"
              />
            </h1>
            <h2 className="text-xl sm:text-2xl mb-6 text-gray-600 dark:text-gray-300">
              Engineering Student & Tech Explorer
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              I'm a 3rd year engineering student exploring multiple domains including MERN stack, AI/ML,
              cross-platform mobile development, and full-stack web development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="projects" smooth={true} duration={500} offset={-70}>
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-70}>
                <motion.button
                  className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary-light dark:hover:border-primary-dark transition-all duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>
            <div className="flex mt-8 space-x-4">
              <motion.a
                href="https://github.com/Vaibhavk121"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary-light dark:hover:border-primary-dark transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/vaibhav-kumar-b366872a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary-light dark:hover:border-primary-dark transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FiLinkedin size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/vaibhav.k111?utm_source=qr&igsh=dXNjbGJoazJjanY="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary-light dark:hover:border-primary-dark transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FiInstagram size={20} />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center order-1 md:order-2"
          >
            <div className="relative w-full max-w-sm md:max-w-md">
              <div className="absolute -inset-0.3 bg-gradient-to-r from-primary-light to-purple-600 rounded-lg blur opacity-75 animate-pulse"></div>
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <SimpleImageCarousel
                  images={['Hi.png', 'thinking.png', 'profile.png', 'coding.png']}
                  interval={3000}
                />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;