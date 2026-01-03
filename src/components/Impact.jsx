import { motion } from 'framer-motion';
import { FiTrendingUp, FiUsers, FiTarget, FiZap, FiBarChart, FiCheckCircle } from 'react-icons/fi';
import { useState } from 'react';

const Impact = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    {
      icon: <FiTrendingUp />,
      value: '20%',
      label: 'Engagement Learning',
      description: 'Contributed to user engagement improvements for Samskruhti-2k25 through better registration flow',
      color: 'text-green-500'
    },
    {
      icon: <FiUsers />,
      value: '5+',
      label: 'Processes Analyzed',
      description: 'Learning to identify and analyze operational processes at Scaler AI Labs',
      color: 'text-blue-500'
    },
    {
      icon: <FiTarget />,
      value: '3+',
      label: 'Learning Projects',
      description: 'Applied product thinking to past projects while learning new methodologies',
      color: 'text-purple-500'
    },
    {
      icon: <FiZap />,
      value: 'Growing',
      label: 'Learning Curve',
      description: 'Continuously learning through mentorship and hands-on experience',
      color: 'text-orange-500'
    }
  ];

  const achievements = [
    {
      title: 'Product Thinking Development',
      description: 'Learning to apply product strategy concepts to DDOS.AI through market research and user validation',
      impact: 'Gained foundational understanding of product-market fit and user-centric design'
    },
    {
      title: 'Community Growth Learning',
      description: 'Exploring community building strategies for Fearlessher while learning about user acquisition',
      impact: 'Developed understanding of user engagement and community dynamics'
    },
    {
      title: 'Operations Experience',
      description: 'Currently learning operational excellence at Scaler AI Labs through hands-on experience',
      impact: 'Building skills in process analysis and cross-functional collaboration'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };

  return (
    <section id="impact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Learning Impact</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Early wins and lessons learned as I transition from development to product thinking and operations
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setActiveMetric(index)}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-3xl ${metric.color}`}>
                {metric.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Active Metric Description */}
        <motion.div
          key={activeMetric}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16 text-center"
        >
          <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-2xl ${metrics[activeMetric].color}`}>
            {metrics[activeMetric].icon}
          </div>
          <h3 className="text-2xl font-bold mb-4">{metrics[activeMetric].label}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {metrics[activeMetric].description}
          </p>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Learning Milestones</h3>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border-l-4 border-primary-light dark:border-primary-dark"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full flex items-center justify-center text-primary-light dark:text-primary-dark flex-shrink-0 mt-1">
                    <FiCheckCircle />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-3">{achievement.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="bg-primary-light/5 dark:bg-primary-dark/5 rounded-lg p-4 border-l-2 border-primary-light dark:border-primary-dark">
                      <p className="text-primary-light dark:text-primary-dark font-medium">
                        Impact: {achievement.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-primary-light to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Learn and Grow Together?</h3>
            <p className="text-lg mb-6 opacity-90">
              I'm eager to learn more about product strategy and operations. Let's connect for mentorship opportunities or collaborative learning.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-light rounded-lg font-medium hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiBarChart className="mr-2" />
              Let's Connect
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;