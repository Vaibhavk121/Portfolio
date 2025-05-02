import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to Vaibhav\'s Terminal. Type "help" for available commands.' }
  ]);
  const terminalRef = useRef(null);
  
  const commands = {
    help: () => ({
      type: 'system',
      content: `Available commands:
      - about: Learn more about me
      - skills: View my technical skills
      - projects: List my projects
      - contact: How to reach me
      - clear: Clear terminal
      - secret: ???`
    }),
    about: () => ({
      type: 'system',
      content: "I'm Vaibhav Kumar, a 3rd year engineering student exploring MERN stack, AI/ML, and mobile development."
    }),
    skills: () => ({
      type: 'system',
      content: "Skills: React, Node.js, MongoDB, Express, Python, TensorFlow, React Native"
    }),
    projects: () => ({
      type: 'system',
      content: "Projects: DDOS.AI, Fearlessher, Samskruhti-2k25"
    }),
    contact: () => ({
      type: 'system',
      content: "Email: vaibhavkumar2k24@gmail.com | LinkedIn: vaibhav-kumar-b366872a6"
    }),
    clear: () => {
      setHistory([]);
      return null;
    },
    secret: () => ({
      type: 'system',
      content: "🎉 You found a secret! Here's a special link to my experimental project: [REDACTED]"
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newEntry = { type: 'user', content: input };
    const command = input.trim().toLowerCase();
    
    let response;
    if (commands[command]) {
      response = commands[command]();
    } else if (command) {
      response = { type: 'error', content: `Command not found: ${command}` };
    }
    
    setHistory(prev => [...prev, newEntry, ...(response ? [response] : [])]);
    setInput('');
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <>
      <motion.button
        className="fixed bottom-5 right-5 z-40 p-3 rounded-full bg-gray-800 text-white shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      </motion.button>
      
      {isOpen && (
        <motion.div
          className="fixed bottom-20 right-5 w-80 h-96 bg-gray-900 rounded-lg shadow-2xl overflow-hidden z-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="bg-gray-800 p-2 flex justify-between items-center">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-gray-400">vaibhav@portfolio:~</div>
          </div>
          
          <div ref={terminalRef} className="p-3 h-72 overflow-y-auto font-mono text-sm text-green-400 bg-gray-900">
            {history.map((entry, index) => (
              <div key={index} className={`mb-2 ${entry.type === 'error' ? 'text-red-400' : ''}`}>
                {entry.type === 'user' ? (
                  <div>
                    <span className="text-blue-400">vaibhav@portfolio:~$</span> {entry.content}
                  </div>
                ) : (
                  <div>{entry.content}</div>
                )}
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="border-t border-gray-800 p-2">
            <div className="flex items-center">
              <span className="text-blue-400 mr-2 text-sm font-mono">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent border-none outline-none text-green-400 font-mono text-sm flex-1"
                autoFocus
              />
            </div>
          </form>
        </motion.div>
      )}
    </>
  );
};

export default Terminal;