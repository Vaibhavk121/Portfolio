import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart, FiInstagram } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/Vaibhavk121' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/vaibhav-kumar-b366872a6/' },
    { icon: <FiInstagram />, url: 'https://www.instagram.com/vaibhav.k111?utm_source=qr&igsh=dXNjbGJoazJjanY=' }
  ];
  
  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Blog', to: 'blog' },
    { name: 'Contact', to: 'contact' }
  ];
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl font-bold cursor-pointer"
            >
              Vaibhav<span className="text-primary-dark"> Kumar</span>
            </Link>
            <p className="mt-4 text-gray-400">
              A passionate engineering student exploring multiple domains in technology.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>vaibhavkumar10112004@gmail.com</li>
              <li>India</li>
              <li>+91 97318 14995</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p className="flex items-center justify-center">
            © {currentYear} Vaibhav Kumar. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center text-sm">
            Made with <FiHeart className="text-red-500 mx-1" /> using React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;