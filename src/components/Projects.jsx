import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiCpu, FiSmartphone, FiGlobe } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Dev', icon: <FiGlobe /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <FiSmartphone /> },
    { id: 'ai', label: 'AI/ML', icon: <FiCpu /> },
    { id: 'fullstack', label: 'Full Stack', icon: <FiCode /> }
  ];
  
  const projects = [
    {
        id: 1,
        title: 'DDOS.AI- AI based DDoS Attack Detection System',
        description: 'An AI-powered DDoS attack detection system that uses machine learning algorithms to identify and block DDoS attacks in real-time.',
        image: './projects/ddos.webp',
        category: ['ai'],
        technologies: ['Python', 'TensorFlow', 'Flask', 'GNN'],
        links: {
          github: 'https://github.com/Vaibhavk121/ddos.ai-public.git'
        }
      },
    {
      id: 2,
      title: 'Fearlessher-Comunity based women Safety App',
      description: 'A community based women safety application for women.Which leverages the power of technology to provide women with a safe and secure environment.',
      image: './projects/fearlessher.png',
      category: ['mobile', 'fullstack'],
      technologies: ['React Native','Expo', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
      links: {
        
        github: 'https://github.com/Vaibhavk121/FearlessHer-Frontend.git'
      }
    },
    {
      id: 3,
      title: 'Samskruhti-2k25',
      description: 'The website for Samskruhti 2k25. Our College annual cultural fest on the theme of - World Under the Sea',
      image: './projects/samskruhti2k25.png',
      category: ['web'],
      technologies: ['React', 'Tailwind', 'Framer Motion'],
      links: {
        demo: 'https://www.samskruthi.co.in/',
        github: 'https://github.com/Vaibhavk121/Samskruthi_2k25.git'
      }
    },
    
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));
  
  return (
    <section id="projects" className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Createive Lab
        </motion.h2>
        
        <motion.div
          className="flex flex-wrap justify-center gap-0 mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="card overflow-hidden"
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-end space-x-2">
                        <motion.a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiExternalLink className="text-white" />
                        </motion.a>
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiGithub className="text-white" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.category.map((cat, index) => {
                      const categoryFilter = filters.find(f => f.id === cat);
                      return (
                        <span 
                          key={index}
                          className="flex items-center gap-1 text-xs text-primary-light dark:text-primary-dark"
                        >
                          {categoryFilter?.icon}
                          <span>{categoryFilter?.label}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10"
          >
            <p className="text-lg">No projects found in this category.</p>
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a 
            href="https://github.com/vaibhavk121" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <FiGithub />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;