import { useState } from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
  const [activeEvent, setActiveEvent] = useState(null);
  
  const journeyEvents = [
    {
      id: 1,
      year: '2021',
      title: 'Started College',
      description: 'Began my engineering journey at XYZ University',
      icon: '🎓'
    },
    {
      id: 2,
      year: '2022',
      title: 'First Hackathon',
      description: 'Won 2nd place at College Hackathon with project XYZ',
      icon: '🏆'
    },
    {
      id: 3,
      year: '2023',
      title: 'Internship',
      description: 'Worked as a frontend developer intern at ABC Company',
      icon: '💼'
    },
    {
      id: 4,
      year: '2023',
      title: 'DDOS.AI Project',
      description: 'Developed an AI-based DDoS attack detection system',
      icon: '🛡️'
    },
    {
      id: 5,
      year: '2024',
      title: 'Fearlessher App',
      description: 'Created a community-based women safety application',
      icon: '📱'
    }
  ];
  
  return (
    <section id="journey" className="py-20">
      <div className="section-container">
        <motion.h2
          className="section-title mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Journey
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Timeline events */}
          <div className="space-y-20">
            {journeyEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActiveEvent(event.id)}
                onMouseLeave={() => setActiveEvent(null)}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-10 text-right' : 'pl-10 text-left'}`}>
                  <motion.div
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-sm text-primary-light dark:text-primary-dark font-bold mb-1">{event.year}</div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                  </motion.div>
                </div>
                
                {/* Center icon */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary-light dark:bg-primary-dark flex items-center justify-center text-white z-10"
                  animate={{ 
                    scale: activeEvent === event.id ? 1.2 : 1,
                    boxShadow: activeEvent === event.id ? '0 0 20px rgba(99, 102, 241, 0.6)' : '0 0 0 rgba(99, 102, 241, 0)'
                  }}
                >
                  <span className="text-xl">{event.icon}</span>
                </motion.div>
                
                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;