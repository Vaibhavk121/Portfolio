import { useState } from 'react';
import { motion } from 'framer-motion';

const ARBusinessCard = () => {
  const [showQR, setShowQR] = useState(false);
  
  const handleShowAR = () => {
    setShowQR(true);
  };
  
  return (
    <div className="my-10">
      <motion.div
        className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        whileHover={{ y: -5 }}
      >
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">Experience My Portfolio in AR</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Scan this QR code with your phone to view my interactive AR business card.
          </p>
          
          {!showQR ? (
            <motion.button
              className="btn-primary w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShowAR}
            >
              View AR Experience
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center"
            >
              {/* Replace with a static QR code image */}
              <img 
                src="/qr-code.png" 
                alt="AR Experience QR Code"
                width={200}
                height={200}
                className="mb-4"
              />
              <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                Scan with your phone camera to launch AR experience
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ARBusinessCard;