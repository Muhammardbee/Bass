
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
            <button
              onClick={() => setForgiven(true)}
              className="px-8 py-4 bg-slate-800 text-white rounded-2xl font-semibold text-lg hover:bg-slate-900 transition-all hover:shadow-xl active:scale-95"
            >
              Forgive your big brother? 😊
            </button>
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
            <p className="text-slate-500">Apology accepted. Peace restored! 🕊️</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ForgivenessSection;
