import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  
  const codeLines = [
    "import { Developer } from 'vaibhav-kumar';",
    "const portfolio = new Portfolio();",
    "portfolio.addSkills(['React', 'Node', 'AI/ML']);",
    "portfolio.setPassion(true);",
    "portfolio.initialize();",
    "// Loading experience...",
    "await portfolio.render();"
  ];
  
  useEffect(() => {
    // Progress timer
    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 1000);
        }
        return next;
      });
    }, 30);
    
    // Code typing effect
    const codeTimer = setInterval(() => {
      setCurrentLine(prev => (prev + 1) % codeLines.length);
    }, 1500);
    
    return () => {
      clearInterval(timer);
      clearInterval(codeTimer);
    };
  }, [onLoadingComplete, codeLines.length]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ 
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Code editor background */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <motion.div 
          className="w-full max-w-2xl h-80 bg-gray-900 rounded-lg shadow-2xl overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Editor header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 text-xs text-gray-400 font-mono">portfolio.jsx</div>
          </div>
          
          {/* Code content */}
          <div className="p-4 font-mono text-sm h-full">
            <div className="flex flex-col space-y-2">
              {codeLines.map((line, index) => (
                <motion.div 
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: index <= currentLine ? 1 : 0.3,
                    x: 0,
                    color: index === currentLine ? "#8B5CF6" : "#94A3B8"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-gray-500 w-7 text-right pr-2">{index + 1}</span>
                  <span className="flex-1">{line}</span>
                  {index === currentLine && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >|</motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
     
    </motion.div>
  );
};

export default LoadingScreen;