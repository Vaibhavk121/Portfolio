import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ResumeGame = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [skills, setSkills] = useState([]);
  const gameAreaRef = useRef(null);
  
  const allSkills = [
    { name: 'React', points: 10 },
    { name: 'JavaScript', points: 8 },
    { name: 'Node.js', points: 10 },
    { name: 'MongoDB', points: 8 },
    { name: 'Express', points: 8 },
    { name: 'Python', points: 7 },
    { name: 'TensorFlow', points: 12 },
    { name: 'Tailwind', points: 6 },
    { name: 'Three.js', points: 10 },
    { name: 'Git', points: 5 }
  ];
  
  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(30);
    setSkills([]);
  };
  
  const endGame = () => {
    setIsPlaying(false);
  };
  
  const addSkill = () => {
    if (!isPlaying || !gameAreaRef.current) return;
    
    const gameArea = gameAreaRef.current.getBoundingClientRect();
    const randomSkill = allSkills[Math.floor(Math.random() * allSkills.length)];
    
    const newSkill = {
      ...randomSkill,
      id: Date.now(),
      x: Math.random() * (gameArea.width - 100),
      y: Math.random() * (gameArea.height - 40),
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2
    };
    
    setSkills(prev => [...prev, newSkill]);
  };
  
  const removeSkill = (id) => {
    const skill = skills.find(s => s.id === id);
    if (skill) {
      setScore(prev => prev + skill.points);
      setSkills(prev => prev.filter(s => s.id !== id));
    }
  };
  
  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            endGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      const skillTimer = setInterval(addSkill, 1000);
      
      return () => {
        clearInterval(timer);
        clearInterval(skillTimer);
      };
    }
  }, [isPlaying]);
  
  useEffect(() => {
    if (isPlaying && skills.length > 0) {
      const moveInterval = setInterval(() => {
        setSkills(prev => prev.map(skill => {
          let { x, y, speedX, speedY } = skill;
          const gameArea = gameAreaRef.current.getBoundingClientRect();
          
          // Bounce off walls
          if (x <= 0 || x >= gameArea.width - 100) speedX = -speedX;
          if (y <= 0 || y >= gameArea.height - 40) speedY = -speedY;
          
          return {
            ...skill,
            x: x + speedX,
            y: y + speedY,
            speedX,
            speedY
          };
        }));
      }, 30);
      
      return () => clearInterval(moveInterval);
    }
  }, [isPlaying, skills]);
  
  return (
    <div className="my-10 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">Skill Collector Game</h3>
          
          {!isPlaying ? (
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Click on my skills as they float around to collect points! 
                Higher value skills are worth more points.
              </p>
              
              {score > 0 && (
                <div className="mb-6">
                  <p className="text-lg font-bold">Your Score: {score}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {score < 50 ? "Good start! Try again?" : 
                     score < 100 ? "Nice job! Can you beat your score?" : 
                     "Impressive! You really know your tech!"}
                  </p>
                </div>
              )}
              
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startGame}
              >
                {score > 0 ? "Play Again" : "Start Game"}
              </motion.button>
            </div>
          ) : (
            <div>
              <div className="flex justify-between mb-4">
                <div className="text-lg font-bold">Score: {score}</div>
                <div className="text-lg font-bold">Time: {timeLeft}s</div>
              </div>
              
              <div 
                ref={gameAreaRef}
                className="relative bg-gray-100 dark:bg-gray-700 rounded-lg h-80 overflow-hidden"
              >
                {skills.map(skill => (
                  <motion.button
                    key={skill.id}
                    className="absolute px-3 py-1 bg-primary-light dark:bg-primary-dark text-white rounded-md shadow-md"
                    style={{ left: skill.x, top: skill.y }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => removeSkill(skill.id)}
                  >
                    {skill.name} (+{skill.points})
                  </motion.button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeGame;