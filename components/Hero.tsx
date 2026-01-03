
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="text-center space-y-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-500 text-xs font-bold uppercase tracking-widest mb-2"
      >
        A special note
      </motion.div>
      <motion.h1 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl md:text-6xl font-bold font-poppins text-slate-800 tracking-tight"
      >
        For Basma <span className="text-blue-400">💙</span>
      </motion.h1>
      
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg text-slate-500 font-medium italic"
      >
        To a truly sweet, caring, and loving friend.
      </motion.p>
    </div>
  );
};

export default Hero;
