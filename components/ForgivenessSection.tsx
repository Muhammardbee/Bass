
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const ForgivenessSection: React.FC = () => {
  const [forgiven, setForgiven] = useState(false);

  return (
    <div className="text-center py-6">
      <AnimatePresence mode="wait">
        {!forgiven ? (
          <motion.div
            key="btn-area"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setForgiven(true)}
              className="px-10 py-5 bg-slate-800 text-white rounded-2xl font-semibold text-lg transition-colors hover:bg-slate-900"
            >
              Forgive your big brother? 😊
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="thanks-area"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-3"
          >
            <div className="flex justify-center mb-4">
              <Heart size={48} className="text-pink-400 animate-bounce" fill="currentColor" />
            </div>
            <h3 className="text-3xl font-dancing text-slate-800">You're the best, Basma!</h3>
            <p className="text-slate-500 font-medium">Apology accepted. Peace restored! 🕊️</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ForgivenessSection;
