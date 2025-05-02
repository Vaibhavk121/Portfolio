import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMusic, FiPlay, FiPause, FiSkipForward, FiSkipBack, FiVolume2, FiVolumeX, FiInfo, FiX } from 'react-icons/fi';

const MusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showGuide, setShowGuide] = useState(false);
  
  const audioRef = useRef(null);
  const progressInterval = useRef(null);
  
  const playlist = [
    {
      title: "Coding Focus",
      artist: "Fein",
      src: "/songs/fein.mp3" // Replace with actual URLs
    },
    {
      title: "Deep Work",
      artist: "Passo Bem Solto",
      src: "/songs/passo_bem_solto.mp3"
    },
    {
      title: "Debugging Mode",
      artist: "Venom",
      src: "/songs/venom.mp3"
    }
  ];
  
  useEffect(() => {
    // Show music player tooltip after a delay
    const hasSeenMusicGuide = localStorage.getItem('hasSeenMusicGuide');
    
    if (!hasSeenMusicGuide) {
      const guideTimeout = setTimeout(() => {
        setShowGuide(true);
      }, 8000); // Show after voice guide has likely been seen
      
      return () => clearTimeout(guideTimeout);
    }
    
    // Pulse animation for the music button
    const pulseTimeout = setTimeout(() => {
      const musicButton = document.getElementById('music-player-button');
      if (musicButton) {
        musicButton.classList.add('animate-pulse');
        setTimeout(() => {
          musicButton.classList.remove('animate-pulse');
        }, 3000);
      }
    }, 6000);
    
    return () => clearTimeout(pulseTimeout);
  }, []);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
      
      if (isPlaying) {
        audioRef.current.play().catch(err => console.error("Playback failed:", err));
        
        progressInterval.current = setInterval(() => {
          if (audioRef.current) {
            setProgress(
              (audioRef.current.currentTime / audioRef.current.duration) * 100
            );
          }
        }, 1000);
      } else {
        audioRef.current.pause();
        if (progressInterval.current) {
          clearInterval(progressInterval.current);
        }
      }
    }
    
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying, currentTrack, volume, isMuted]);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
    if (isPlaying) {
      setIsPlaying(false);
      setTimeout(() => setIsPlaying(true), 100);
    }
  };
  
  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
    if (isPlaying) {
      setIsPlaying(false);
      setTimeout(() => setIsPlaying(true), 100);
    }
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
    if (isMuted) setIsMuted(false);
  };
  
  const closeGuide = () => {
    setShowGuide(false);
    localStorage.setItem('hasSeenMusicGuide', 'true');
  };
  
  return (
    <>
      <motion.button
        id="music-player-button"
        className="fixed right-20 bottom-5 z-40 p-3 rounded-full bg-purple-600 text-white shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle music player"
      >
        <FiMusic size={24} />
      </motion.button>
      
      {/* Add a small tooltip that appears briefly */}
      <AnimatePresence>
        {!showGuide && !isOpen && (
          <motion.div
            className="fixed right-36 bottom-5 z-40 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg text-xs"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ delay: 7 }}
            onAnimationComplete={() => {
              setTimeout(() => {
                const tooltip = document.getElementById('music-tooltip');
                if (tooltip) tooltip.style.display = 'none';
              }, 5000);
            }}
            id="music-tooltip"
          >
            Click for background music
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-5 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden z-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <audio
              ref={audioRef}
              src={playlist[currentTrack].src}
              onEnded={nextTrack}
            />
            
            <div className="p-4">
              <h3 className="font-bold text-lg">{playlist[currentTrack].title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{playlist[currentTrack].artist}</p>
              
              <div className="mt-4 mb-2">
                <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div 
                    className="h-full bg-purple-600 dark:bg-purple-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <button 
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={prevTrack}
                >
                  <FiSkipBack size={20} />
                </button>
                
                <button 
                  className="p-3 rounded-full bg-purple-600 dark:bg-purple-500 text-white"
                  onClick={togglePlay}
                >
                  {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
                </button>
                
                <button 
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={nextTrack}
                >
                  <FiSkipForward size={20} />
                </button>
              </div>
              
              <div className="flex items-center mt-4">
                <button 
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={toggleMute}
                >
                  {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
                </button>
                
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full ml-2"
                />
              </div>
            </div>
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
                  <FiMusic className="text-purple-600 mr-2" size={24} />
                  Background Music
                </h3>
                <button 
                  onClick={closeGuide}
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiX size={24} />
                </button>
              </div>
              
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Enhance your browsing experience with a curated playlist of background music! Click the music icon in the bottom right corner to:
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-purple-100 dark:bg-purple-900 p-1 rounded mr-2">
                      <FiPlay size={16} />
                    </span>
                    <span className="text-sm">Play focus-enhancing background music</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-purple-100 dark:bg-purple-900 p-1 rounded mr-2">
                      <FiSkipForward size={16} />
                    </span>
                    <span className="text-sm">Skip between different tracks</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-purple-100 dark:bg-purple-900 p-1 rounded mr-2">
                      <FiVolume2 size={16} />
                    </span>
                    <span className="text-sm">Adjust volume or mute</span>
                  </li>
                </ul>
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
                  onClick={() => {
                    closeGuide();
                    setIsOpen(true);
                  }}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm"
                >
                  Try it now!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;