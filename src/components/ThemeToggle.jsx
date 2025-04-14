import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg z-50"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {theme === 'light' ? (
        <FiMoon className="text-gray-800" size={20} />
      ) : (
        <FiSun className="text-yellow-300" size={20} />
      )}
    </motion.button>
  );
};

export default ThemeToggle;