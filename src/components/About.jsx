import { motion } from 'framer-motion';
import { FiCoffee, FiCode, FiMusic, FiBookOpen, FiStar, FiZap, FiSmile } from 'react-icons/fi';
import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('funFacts');

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const funFacts = [
    {
      icon: <FiCoffee />,
      title: 'Strategy Fuel',
      description: 'I can turn coffee into strategic insights with surprising efficiency. My record is 3 product roadmaps in one caffeine session!'
    },
    {
      icon: <FiMusic />,
      title: 'Focus Mode Master',
      description: 'I have a perfectly curated playlist for every type of strategic work. User research has its own soundtrack!'
    },
    {
      icon: <FiZap />,
      title: 'Data Detective',
      description: 'My best insights happen when diving deep into user behavior data. The patterns reveal themselves to those who look closely.'
    }
  ];

  const quirkyHabits = [
    { title: 'User vs Business', description: 'Will passionately advocate for user needs while balancing business objectives (users always win in my heart)' },
    { title: 'Process Documentation', description: 'Spend more time documenting processes than most people spend using them' },
    { title: 'Data Patterns', description: 'Can spot user behavior anomalies from just a quick glance at analytics dashboards' },
    { title: 'Stakeholder Translation', description: 'Actually enjoy translating between technical teams and business stakeholders' }
  ];

  const randomSkills = [
    { skill: 'Explaining complex strategies to diverse stakeholders', level: 88 },
    { skill: 'Finding the perfect framework for any operational challenge', level: 85 },
    { skill: 'Staying calm when user metrics suddenly drop', level: 75 },
    { skill: 'Pretending I have all the answers in meetings', level: 92 },
    { skill: 'Actually having data-backed answers', level: 80 }
  ];

  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Beyond The Strategy</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            The strategic mind behind the operations (and yes, I still love a good coffee)
          </p>
        </motion.div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            {['funFacts', 'quirkyHabits', 'randomSkills'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab 
                    ? 'bg-white dark:bg-gray-700 shadow-sm' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {tab === 'funFacts' ? 'Fun Facts' : tab === 'quirkyHabits' ? 'Quirky Habits' : 'Random Skills'}
              </button>
            ))}
          </div>
        </div>
        
        {/* Fun Facts */}
        {activeTab === 'funFacts' && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-b-4 border-transparent hover:border-primary-light dark:hover:border-primary-dark transition-all duration-300"
                whileHover={{ y: -10, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="w-12 h-12 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full flex items-center justify-center text-primary-light dark:text-primary-dark text-2xl mb-4">
                  {fact.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{fact.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {fact.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {/* Quirky Habits */}
        {activeTab === 'quirkyHabits' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full flex items-center justify-center text-primary-light dark:text-primary-dark text-3xl mx-auto mb-4">
                <FiStar />
              </div>
              <h3 className="text-2xl font-bold mb-2">Product Quirks</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We all have our little quirks. Here are some of mine that make me... uniquely strategic.
              </p>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {quirkyHabits.map((habit, index) => (
                <motion.div 
                  key={index}
                  className="p-6 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="text-lg font-semibold mb-2">{habit.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{habit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Random Skills */}
        {activeTab === 'randomSkills' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full flex items-center justify-center text-primary-light dark:text-primary-dark text-3xl mx-auto mb-4">
                <FiBookOpen />
              </div>
              <h3 className="text-2xl font-bold mb-2">Strategic Skills</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Skills you won't find on traditional PM job descriptions, but are equally important!
              </p>
            </div>
            <div className="space-y-6">
              {randomSkills.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-primary-light dark:text-primary-dark font-bold">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="bg-primary-light dark:bg-primary-dark h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Fun Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <blockquote className="text-xl italic text-gray-700 dark:text-gray-300">
            "The best products are born when user needs, business goals, and operational excellence converge."
          </blockquote>
          <p className="mt-2 text-gray-500 dark:text-gray-500">— Product Management Philosophy</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;