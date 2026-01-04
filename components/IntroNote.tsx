
import React from 'react';
import { motion } from 'framer-motion';
import { MailOpen } from 'lucide-react';

interface IntroNoteProps {
  onOpen: () => void;
}

const IntroNote: React.FC<IntroNoteProps> = ({ onOpen }) => {
  return (
    <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl shadow-blue-100/10 border border-white/50 text-center space-y-8">
      <div className="space-y-4">
        <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-light">
          Basma, you've always been the most patient and caring person I know. 
          I realized I owe you more than just a quick "sorry" in passing. 
          I've put together a small note for you...
        </p>
      </div>

      <motion.button
        onClick={onOpen}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-800 rounded-2xl font-semibold shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-200/30 transition-all border border-slate-100"
      >
        <MailOpen size={20} className="text-blue-400 group-hover:rotate-12 transition-transform" />
        <span>Open my note</span>
        <motion.div
          layoutId="glow"
          className="absolute inset-0 rounded-2xl bg-blue-400/5 -z-10 animate-pulse"
        />
      </motion.button>
    </div>
  );
};

export default IntroNote;
