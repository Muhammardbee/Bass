
import React from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

const ApologyMessage: React.FC = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 md:p-12 shadow-xl shadow-blue-100/20 border border-white space-y-8">
      <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
        <p className="font-light">
          Hey Basma, I wanted to reach out and say I'm truly sorry for my blunders lately. You are such a <span className="font-semibold text-slate-800">sweet, caring, and loving friend</span>, and I honestly don't know what I'd do without your kindness in my life.
        </p>
        
        <p className="font-light">
          I know I play the "big brother" role a bit too well sometimes—which usually means being stubborn or accidentally annoying—but please know it always comes from a place of care. You deserve nothing but the best treatment, and I'm sorry I fell short of that.
        </p>
        
        <p className="font-light">
          Our friendship is so precious to me. Thank you for being the amazing person you are and for always having such a big heart.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-pink-50/50 border border-pink-100/50">
          <Heart size={20} className="text-pink-400 shrink-0" fill="currentColor" />
          <p className="text-sm font-medium text-pink-700">Kindest soul I know</p>
        </div>
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/50">
          <Sparkles size={20} className="text-blue-400 shrink-0" fill="currentColor" />
          <p className="text-sm font-medium text-blue-700">Always brings the light</p>
        </div>
      </div>

      <div className="text-center pt-6">
        <p className="font-dancing text-2xl text-slate-400 italic">
          "I promise to be much better (and maybe only 5% annoying)."
        </p>
      </div>
    </div>
  );
};

export default ApologyMessage;
