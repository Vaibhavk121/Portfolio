import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiMessageCircle, FiCoffee, FiCode, FiHeart, FiSend, FiMapPin, FiClock, FiSmile } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [activeMethod, setActiveMethod] = useState('email');
  const [hoveredCard, setHoveredCard] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Get form data
      const formData = new FormData(form.current);
      const userName = formData.get('user_name');
      const userEmail = formData.get('user_email');
      const originalMessage = formData.get('message');

      // Create enhanced message with name and email
      const enhancedMessage = `From: ${userName}
Email: ${userEmail}

Message:
${originalMessage}`;

      // Update the message field with enhanced content
      const messageField = form.current.querySelector('textarea[name="message"]');
      const originalValue = messageField.value;
      messageField.value = enhancedMessage;

      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Restore original message value for user experience
      messageField.value = originalValue;

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: '🎉 Message launched successfully! I\'ll get back to you faster than a console.log() execution!'
        });
        form.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: '😅 Oops! Something went wrong. Maybe try turning it off and on again?'
      });
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      id: 'email',
      title: 'Send an Email',
      subtitle: 'For when you want to be formal',
      icon: <FiMail />,
      color: 'from-blue-500 to-purple-600',
      description: 'Drop me a line and I\'ll respond faster than you can say "async/await"'
    },
    {
      id: 'social',
      title: 'Social Connect',
      subtitle: 'For the casual vibes',
      icon: <FiMessageCircle />,
      color: 'from-pink-500 to-rose-600',
      description: 'Slide into my DMs (professionally, of course)'
    },
    {
      id: 'coffee',
      title: 'Coffee Chat',
      subtitle: 'For the caffeine addicts',
      icon: <FiCoffee />,
      color: 'from-amber-500 to-orange-600',
      description: 'Let\'s discuss code over coffee - the perfect debugging combo'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub />,
      url: 'https://github.com/Vaibhavk121',
      color: 'hover:text-gray-900 dark:hover:text-white',
      description: 'Where my code lives'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin />,
      url: 'https://www.linkedin.com/in/vaibhav-kumar-b366872a6/',
      color: 'hover:text-blue-600',
      description: 'Professional networking'
    },
    {
      name: 'Instagram',
      icon: <FiInstagram />,
      url: 'https://www.instagram.com/vaibhav.k111?utm_source=qr&igsh=dXNjbGJoazJjanY=',
      color: 'hover:text-pink-600',
      description: 'Behind the scenes'
    }
  ];

  const quickFacts = [
    { icon: <FiMapPin />, text: 'Based in Bengaluru, India' },
    { icon: <FiClock />, text: 'Usually responds within 24 hours' },
    { icon: <FiCode />, text: 'Always up for tech discussions' },
    { icon: <FiHeart />, text: 'Loves collaborative projects' }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 to-purple-600/5 dark:from-primary-dark/5 dark:to-purple-400/5"></div>
      
      <div className="section-container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Let's Build Something Amazing Together</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Got a project idea? Need a coding buddy? Or just want to chat about the latest JavaScript framework? 
            <br />
            <span className="text-primary-light dark:text-primary-dark font-semibold">I'm just a message away!</span>
          </p>
        </motion.div>

        {/* Contact Method Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative cursor-pointer group ${
                activeMethod === method.id ? 'ring-2 ring-primary-light dark:ring-primary-dark' : ''
              }`}
              onClick={() => setActiveMethod(method.id)}
              onMouseEnter={() => setHoveredCard(method.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full transition-all duration-300 hover:shadow-xl">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center text-white text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{method.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-3">{method.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">{method.description}</p>
                
                {hoveredCard === method.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center"
                  >
                    <FiSmile className="text-white text-sm" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {activeMethod === 'email' && (
                <motion.div
                  key="email-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl mr-4">
                      <FiMail />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Send Me a Message</h3>
                      <p className="text-gray-600 dark:text-gray-400">I promise to read every single one!</p>
                    </div>
                  </div>

                  <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    {/* Hidden fields for better email context */}
                    <input type="hidden" name="to_name" value="Vaibhav Kumar" />
                    <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">What should I call you?</label>
                        <input
                          type="text"
                          name="user_name"
                          placeholder="Your awesome name"
                          required
                          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 backdrop-blur-sm focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">How can I reach you?</label>
                        <input
                          type="email"
                          name="user_email"
                          placeholder="your.email@awesome.com"
                          required
                          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 backdrop-blur-sm focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">What's on your mind?</label>
                      <textarea
                        name="message"
                        placeholder="Tell me about your project, ask a question, or just say hi! I love hearing from fellow developers and creators."
                        required
                        rows="6"
                        className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 backdrop-blur-sm focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all duration-300 resize-none"
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold disabled:opacity-50 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Launching message...</span>
                        </>
                      ) : (
                        <>
                          <FiSend />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>

                    {status.message && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-center p-4 rounded-lg ${
                          status.type === 'success' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-800/30 dark:text-green-400' 
                            : 'bg-red-100 text-red-700 dark:bg-red-800/30 dark:text-red-400'
                        }`}
                      >
                        {status.message}
                      </motion.div>
                    )}
                  </form>
                </motion.div>
              )}

              {activeMethod === 'social' && (
                <motion.div
                  key="social-connect"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white text-xl mr-4">
                      <FiMessageCircle />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Let's Connect</h3>
                      <p className="text-gray-600 dark:text-gray-400">Choose your favorite platform!</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-light dark:hover:border-primary-dark transition-all duration-300 group"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className={`text-2xl mr-4 transition-colors duration-300 ${social.color}`}>
                          {social.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{social.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{social.description}</p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <FiSend className="text-primary-light dark:text-primary-dark" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeMethod === 'coffee' && (
                <motion.div
                  key="coffee-chat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white text-xl mr-4">
                      <FiCoffee />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Coffee & Code</h3>
                      <p className="text-gray-600 dark:text-gray-400">Best conversations happen over coffee!</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-6xl mb-4">☕</div>
                    <h4 className="text-xl font-semibold mb-4">Let's Meet for Coffee!</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      I'm always up for a good coffee chat about tech, projects, or life in general. 
                      If you're in Bengaluru or planning to visit, let's grab a cup and discuss some code!
                    </p>
                    <motion.a
                      href="mailto:vaibhavkumar2k24@gmail.com?subject=Coffee Chat Request&body=Hi Vaibhav! I'd love to meet up for coffee and chat about..."
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiCoffee />
                      <span>Schedule Coffee Chat</span>
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Quick Info & Fun Facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Quick Facts */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FiSmile className="mr-2 text-primary-light dark:text-primary-dark" />
                Quick Facts About Me
              </h3>
              <div className="space-y-3">
                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="text-primary-light dark:text-primary-dark">
                      {fact.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{fact.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fun Message */}
            <div className="bg-gradient-to-r from-primary-light/10 to-purple-600/10 dark:from-primary-dark/10 dark:to-purple-400/10 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Why Reach Out?</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>🚀 Got a cool project idea?</li>
                <li>🤝 Looking for collaboration?</li>
                <li>💡 Need help with a coding problem?</li>
                <li>☕ Just want to chat about tech?</li>
                <li>🎯 Interested in hiring me?</li>
              </ul>
              <p className="mt-4 text-sm font-medium text-primary-light dark:text-primary-dark">
                Whatever it is, I'd love to hear from you!
              </p>
            </div>

            {/* Response Time */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold mb-2">Lightning Fast Responses</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I typically respond within 24 hours. If it's urgent, mention it in the subject line!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Fun Footer Message */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <blockquote className="text-xl italic text-gray-700 dark:text-gray-300">
            "The best projects start with a simple 'Hello' message."
          </blockquote>
          <p className="mt-2 text-gray-500 dark:text-gray-500">— Every successful collaboration ever</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;