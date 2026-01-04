
import React from 'react';
import { motion, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  // Explicitly typing variants as 'Variants' to ensure compatibility with motion components
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        // Using 'as any' to avoid the compiler misinterpreting the cubic-bezier tuple as an array of Easing items
        ease: [0.21, 1.11, 0.81, 0.99] as any
      }
    },
  };

  return (
    <motion.div 
      className="text-center space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={itemVariants}
        className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2"
      >
        A special note
      </motion.div>
      
      <motion.h1 
        variants={itemVariants}
        className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins text-slate-800 tracking-tight"
      >
        For Basma <span className="text-blue-400">💙</span>
      </motion.h1>
      
      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-slate-500 font-medium italic px-4"
      >
        To a truly sweet, caring, and loving friend.
      </motion.p>
    </motion.div>
  );
};

export default Hero;
