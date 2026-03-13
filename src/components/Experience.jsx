import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiBriefcase, FiCode, FiCoffee, FiZap, FiTool, FiUsers } from 'react-icons/fi';
import { useState } from 'react';

const Experience = () => {
  const [activeView, setActiveView] = useState('timeline');

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const experiences = [
    {
      title: "Operations Intern - Product Team",
      company: "Signzy",
      type: "Internship",
      duration: "Feb 2026 - Present ",
      location: "Bengaluru, Karnataka, India · Hybrid",
      description: "Working as Operations Intern in the Product Team at Signzy, a leading fintech company. Contributing to product operations, user experience optimization, and cross-functional collaboration. Learning to apply product thinking to operational challenges while supporting product strategy and execution.",
      logo: "/logos/signzy.jpg",
      current: true
    },
    {
      title: "Operations Intern",
      company: "Scaler AI Labs",
      type: "Internship",
      duration: "Dec 2024 - Jan 2026 · 2 mos",
      location: "Bengaluru, Karnataka, India · Hybrid",
      description: "Learned operational excellence and cross-functional collaboration in AI education. Gained hands-on experience in process optimization, stakeholder management, and data-driven decision making while contributing to user experience improvements.",
      logo: "/logos/scaler.png",
      current: false
    },
    {
      title: "Full Stack Developer",
      company: "Trikona Tech",
      type: "Internship",
      duration: "Aug 2024 - Nov 2024 · 4 mos",
      location: "Bengaluru, Karnataka, India · Hybrid",
      description: "Started as a technical developer and began learning product thinking. Built full-stack features while discovering the importance of user-centric design, product strategy, and cross-functional collaboration in delivering meaningful solutions.",
      logo: "/trikona.ico",
      current: false
    }
  ];

  const highlights = [
    {
      icon: <FiBriefcase />,
      title: "Learning Operations",
      description: "Gaining experience in process optimization and workflow improvement at Scaler AI Labs"
    },
    {
      icon: <FiUsers />,
      title: "Cross-functional Learning",
      description: "Learning to work with product, engineering, and business teams to understand different perspectives"
    },
    {
      icon: <FiZap />,
      title: "Product Thinking",
      description: "Developing product mindset by applying user-centric thinking to operational challenges"
    },
    {
      icon: <FiTool />,
      title: "Process Improvement",
      description: "Learning to identify bottlenecks and contribute to solutions that improve team productivity"
    }
  ];

  const skills = [
    "Learning Operations Management",
    "Developing Product Thinking",
    "Cross-functional Collaboration",
    "Process Analysis",
    "Data Interpretation",
    "Stakeholder Communication",
    "User Experience Awareness",
    "Strategic Learning"
  ];

  const funStats = [
    { label: "Processes Analyzed", value: "5+", icon: <FiTool /> },
    { label: "Learning Projects", value: "3+", icon: <FiUsers /> },
    { label: "Team Meetings", value: "25+", icon: <FiBriefcase /> },
    { label: "Learning Insights", value: "∞", icon: <FiZap /> }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Learning Experience</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            My journey from technical development to product thinking - learning through hands-on experience and mentorship
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            {['timeline', 'highlights', 'stats'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveView(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeView === tab
                  ? 'bg-white dark:bg-gray-700 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
              >
                {tab === 'timeline' ? 'Timeline' : tab === 'highlights' ? 'Highlights' : 'Fun Stats'}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline View */}
        {activeView === 'timeline' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-light to-primary-dark"></div>

              {/* Experience Cards */}
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative pl-20 pb-12"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 top-6 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 shadow-lg ${experience.current
                    ? 'bg-green-500 animate-pulse'
                    : 'bg-primary-light dark:bg-primary-dark'
                    }`}></div>

                  {/* Experience Card */}
                  <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border-l-4 hover:shadow-xl transition-all duration-300 ${experience.current
                    ? 'border-green-500'
                    : 'border-primary-light dark:border-primary-dark'
                    }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={experience.logo}
                          alt={experience.company}
                          className="w-14 h-14 rounded-lg object-contain"
                        />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {experience.title}
                            </h3>

                          </div>
                          <p className="text-lg text-primary-light dark:text-primary-dark font-semibold">
                            {experience.company} · {experience.type}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <FiCalendar className="w-4 h-4" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiMapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Highlights View */}
        {activeView === 'highlights' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-b-4 border-transparent hover:border-primary-light dark:hover:border-primary-dark transition-all duration-300"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="w-12 h-12 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full flex items-center justify-center text-primary-light dark:text-primary-dark text-2xl mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Fun Stats View */}
        {activeView === 'stats' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {funStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full flex items-center justify-center text-primary-light dark:text-primary-dark text-3xl mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
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
            "The best learning happens when you combine curiosity with real-world application."
          </blockquote>
          <p className="mt-2 text-gray-500 dark:text-gray-500">— My Learning Philosophy</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;