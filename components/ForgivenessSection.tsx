import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const ConfettiPiece = ({ index }: { index: number }) => {
  // Pastel palette: Peach, Lavender, Light Blue, Cream, Mint
  const colors = ['#fed7aa', '#ddd6fe', '#bae6fd', '#fef3c7', '#d1fae5', '#fbcfe8'];
  const color = colors[index % colors.length];
  const isCircle = index % 3 === 0;
  
  // Randomize explosion trajectory
  const xTarget = (Math.random() - 0.5) * 1000;
  const yTarget = -Math.random() * 600 - 200;
  const rotation = Math.random() * 1080;
  const delay = Math.random() * 0.3; // Staggered start for a more natural burst
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 0, scale: 0, rotate: 0 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        x: xTarget,
        y: [0, yTarget, yTarget + 800],
        scale: [0, 1.4, 1, 0.4],
        rotate: rotation
      }}
      transition={{ 
        duration: 3 + Math.random() * 2,
        ease: [0.23, 1, 0.32, 1],
        times: [0, 0.1, 0.7, 1],
        delay: delay
      }}
      className={`absolute pointer-events-none z-50 ${isCircle ? 'rounded-full' : 'rounded-sm'}`}
      style={{ 
        backgroundColor: color, 
        left: '50%', 
        top: '50%',
        width: Math.random() * 8 + 6 + 'px',
        height: Math.random() * 8 + 6 + 'px',
      }}
    />
  );
};

const ForgivenessSection: React.FC = () => {
  const [forgiven, setForgiven] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (forgiven) {
      // Small delay to let the message start appearing before the burst
      const timer = setTimeout(() => {
        setShowConfetti(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [forgiven]);

  return (
    <div className="relative text-center py-6 px-4 min-h-[180px] flex items-center justify-center">
      {/* Confetti Container */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {showConfetti && Array.from({ length: 65 }).map((_, i) => (
          <ConfettiPiece key={i} index={i} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!forgiven ? (
          <motion.div
            key="btn-area"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1] 
            }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 30px -5px rgb(0 0 0 / 0.15), 0 12px 15px -6px rgb(0 0 0 / 0.1)" 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setForgiven(true)}
              className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-[1.25rem] font-semibold text-lg transition-all shadow-xl shadow-slate-200"
            >
              Forgive your big brother? 😊
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="thanks-area"
            initial={{ y: 30, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.1
            }}
            className="space-y-4 relative z-10"
          >
            <div className="flex justify-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                transition={{ duration: 0.7, delay: 0.2, ease: "backOut" }}
              >
                <Heart size={64} className="text-pink-400 drop-shadow-xl" fill="currentColor" />
              </motion.div>
            </div>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-5xl font-dancing text-slate-800"
            >
              You're the best, Basma!
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-slate-500 text-base sm:text-xl font-medium"
            >
              Apology accepted. Peace restored! 🕊️
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ForgivenessSection;