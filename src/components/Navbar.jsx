import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'BtC', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Tech Stack', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Journey', to: 'blog' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 w-full">
          <div className="flex-shrink-0 min-w-0">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer block"
            >
              <img 
                src="./mylogo.png" 
                alt="Vaibhav Kumar" 
                className="h-10 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-light/10 hover:text-primary-light dark:hover:bg-primary-dark/10 dark:hover:text-primary-dark cursor-pointer transition-all duration-300"
                  activeClass="bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark"
                  spy={true}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 focus:outline-none z-50 relative shadow-lg mr-6 ${
                scrolled
                  ? 'bg-gray-100 dark:bg-gray-800 hover:bg-primary-light/10 hover:text-primary-light dark:hover:bg-primary-dark/10 dark:hover:text-primary-dark'
                  : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200'
              }`}
            >
              {isOpen ? <FiX size={16} /> : <FiMenu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-800 absolute top-full left-0 right-0 z-40"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-primary-light/10 hover:text-primary-light dark:hover:bg-primary-dark/10 dark:hover:text-primary-dark cursor-pointer transition-all duration-300"
                activeClass="bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark"
                spy={true}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;