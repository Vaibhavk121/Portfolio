import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMic, FiMicOff, FiInfo, FiX } from 'react-icons/fi';

const VoiceNavigation = ({ toggleTheme }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  
  const commands = {
    'home': 'home',
    'btc': 'about',
    'tech stack': 'skills',
    'projects': 'projects',
    'journey': 'blog',
    'contact': 'contact',
    'dark mode': 'toggleTheme',
    'light mode': 'toggleTheme'
  };
  
  useEffect(() => {
    // Check if we've shown the guide before
    const hasSeenGuide = localStorage.getItem('hasSeenVoiceGuide');
    if (hasSeenGuide) {
      setShowGuide(false);
    } else {
      // Force show guide on first visit
      setShowGuide(true);
    }
    
    // Make the pulse animation more noticeable
    const pulseTimeout = setTimeout(() => {
      const micButton = document.getElementById('voice-nav-button');
      if (micButton) {
        micButton.classList.add('animate-pulse');
        setTimeout(() => {
          micButton.classList.remove('animate-pulse');
        }, 5000); // Longer pulse animation
      }
    }, 2000);
    
    return () => clearTimeout(pulseTimeout);
  }, []);
  
  useEffect(() => {
    let recognition = null;
    
    if ('webkitSpeechRecognition' in window) {
      recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      
      recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript.toLowerCase();
        setTranscript(speechResult);
        
        // Process command
        for (const [command, action] of Object.entries(commands)) {
          if (speechResult.includes(command)) {
            if (action === 'toggleTheme') {
              toggleTheme();
              setFeedback(`Switching to ${command}`);
            } else {
              setFeedback(`Navigating to ${command}`);
              
              // Scroll to section
              const element = document.getElementById(action);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }
            
            setShowFeedback(true);
            setTimeout(() => setShowFeedback(false), 3000);
            break;
          }
        }
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      // Add error handling
      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setFeedback(`Error: ${event.error}`);
        setShowFeedback(true);
        setTimeout(() => setShowFeedback(false), 3000);
        setIsListening(false);
      };
    }
    
    if (isListening && recognition) {
      recognition.start();
    }
    
    return () => {
      if (recognition) recognition.stop();
    };
  }, [isListening, toggleTheme]);
  
  const toggleListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      setFeedback('Voice recognition not supported in this browser');
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 3000);
      return;
    }
    
    setIsListening(!isListening);
    if (!isListening) {
      setFeedback('Listening for commands...');
      setShowFeedback(true);
    } else {
      setShowFeedback(false);
    }
  };
  
  const closeGuide = () => {
    setShowGuide(false);
    localStorage.setItem('hasSeenVoiceGuide', 'true');
  };
  
  return (
    <>
      <motion.button
        id="voice-nav-button"
        className="fixed left-5 bottom-5 z-40 p-3 rounded-full bg-indigo-600 text-white shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleListening}
        aria-label={isListening ? "Stop voice commands" : "Start voice commands"}
        initial={{ scale: 1 }}
        animate={{ 
          scale: [1, 1.1, 1],
          boxShadow: isListening ? "0 0 15px rgba(99, 102, 241, 0.8)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
        }}
        transition={{ 
          duration: 2,
          repeat: isListening ? Infinity : 0,
          repeatType: "reverse"
        }}
      >
        {isListening ? <FiMic size={24} /> : <FiMicOff size={24} />}
      </motion.button>
      
      {/* Add a small tooltip that appears briefly */}
      <AnimatePresence>
        {!showGuide && !showFeedback && (
          <motion.div
            className="fixed left-16 bottom-5 z-40 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg text-xs"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ delay: 3 }}
            onAnimationComplete={() => {
              setTimeout(() => {
                const tooltip = document.getElementById('voice-tooltip');
                if (tooltip) tooltip.style.display = 'none';
              }, 5000);
            }}
            id="voice-tooltip"
          >
            Click to use voice commands
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            className="fixed left-5 bottom-20 z-40 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <p className="text-sm">{feedback}</p>
            {transcript && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">"{transcript}"</p>}
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showGuide && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 max-w-md mx-4"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold flex items-center">
                  <FiMic className="text-indigo-600 mr-2" size={24} />
                  Voice Navigation Feature
                </h3>
                <button 
                  onClick={closeGuide}
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiX size={24} />
                </button>
              </div>
              
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                This portfolio supports <span className="font-bold text-indigo-600">hands-free voice navigation</span>! Click the microphone button in the bottom left corner and speak one of these commands:
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <ul className="space-y-2">
                  {Object.entries(commands).map(([command, action], index) => (
                    <li key={index} className="flex items-center">
                      <span className="font-mono bg-indigo-100 dark:bg-indigo-900 px-2 py-1 rounded text-sm mr-2">
                        "{command}"
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {action === 'toggleTheme' 
                          ? 'Switch between light and dark mode' 
                          : `Navigate to ${action} section`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded-lg mb-4">
                <p className="text-sm text-yellow-800 dark:text-yellow-200 flex items-center">
                  <FiInfo className="mr-2 flex-shrink-0" />
                  Voice commands work best in Chrome and Edge browsers in a quiet environment.
                </p>
              </div>
              
              <div className="flex justify-between">
                <label className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <input 
                    type="checkbox" 
                    className="mr-2"
                    onChange={() => {
                      closeGuide();
                    }}
                  />
                  Don't show this again
                </label>
                
                <button
                  onClick={closeGuide}
                  className="btn-primary text-sm"
                >
                  Try it now!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Floating indicator when voice is active */}
      <AnimatePresence>
        {isListening && (
          <motion.div
            className="fixed left-5 bottom-5 z-30 w-12 h-12 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.5, 1], opacity: 0.3 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="absolute inset-0 rounded-full bg-indigo-600"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VoiceNavigation;