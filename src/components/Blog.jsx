import { motion } from 'framer-motion';
import { FiCalendar, FiLinkedin, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  // LinkedIn posts
  const linkedinPosts = [
    {
      id: 1,
      title: 'Haccverse At Reva University',
      excerpt: 'Sharing my experience with modern frontend development tools and frameworks.',
      date: 'March 21st, 2023',
      engagement: '168 reactions',
      image: './linkdin/reva.jpeg'
    },
    {
      id: 2,
      title: 'Kodikon 4.0 At PES University',
      date: 'October 26th, 2024',
      engagement: '1242 reactions',
      image: './linkdin/pes.jpeg'
    },
    {
      id: 3,
      title: 'TECHNOSPARK Hackathon at DSATM',
     
      date: 'July 22nd, 2024',
      engagement: '65 reactions',
      image: './linkdin/dsatm.jpeg'
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Professional Insights</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Connect with me on LinkedIn to see my latest posts and professional updates.
            
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {linkedinPosts.map((post) => (
            <motion.article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: post.id * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center">
                    <FiCalendar className="mr-1" />
                    {post.date}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <FiLinkedin className="mr-1" />
                    {post.engagement}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-[#0A66C2] transition-colors">
                  {post.title}
                </h3>
                
                <a
                  href="https://www.linkedin.com/in/vaibhav-kumar-b366872a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#0A66C2] font-medium hover:underline"
                >
                  View on LinkedIn <FiArrowRight className="ml-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="https://www.linkedin.com/in/vaibhav-kumar-b366872a6/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#0A66C2]/90 transition-colors"
          >
            <FiLinkedin className="mr-2" size={20} />
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;