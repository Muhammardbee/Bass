
import React from 'react';
import { Heart, Star, Sparkles, Flower, Feather, Moon, Cloud, Leaf, Wind, Sun } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const elements = [
    { Icon: Heart, color: 'text-pink-200', size: 24, top: '10%', left: '5%', delay: 'delay-1' },
    { Icon: Star, color: 'text-yellow-200', size: 20, top: '20%', left: '85%', delay: 'delay-2' },
    { Icon: Sparkles, color: 'text-blue-200', size: 28, top: '60%', left: '10%', delay: 'delay-3' },
    { Icon: Heart, color: 'text-purple-200', size: 32, top: '80%', left: '80%', delay: 'delay-1' },
    { Icon: Star, color: 'text-orange-100', size: 18, top: '40%', left: '90%', delay: 'delay-2' },
    { Icon: Sparkles, color: 'text-green-100', size: 22, top: '75%', left: '15%', delay: 'delay-3' },
    { Icon: Flower, color: 'text-rose-100', size: 26, top: '35%', left: '25%', delay: 'delay-1' },
    { Icon: Feather, color: 'text-indigo-100', size: 24, top: '55%', left: '75%', delay: 'delay-2' },
    { Icon: Flower, color: 'text-yellow-100', size: 20, top: '15%', left: '45%', delay: 'delay-3' },
    { Icon: Feather, color: 'text-cyan-100', size: 22, top: '5%', left: '60%', delay: 'delay-3' },
    { Icon: Flower, color: 'text-fuchsia-100', size: 28, top: '90%', left: '40%', delay: 'delay-2' },
    { Icon: Sparkles, color: 'text-amber-100', size: 20, top: '45%', left: '5%', delay: 'delay-1' },
    { Icon: Moon, color: 'text-teal-100', size: 24, top: '15%', left: '70%', delay: 'delay-1' },
    { Icon: Cloud, color: 'text-yellow-50', size: 32, top: '65%', left: '85%', delay: 'delay-2' },
    { Icon: Moon, color: 'text-indigo-50', size: 20, top: '40%', left: '35%', delay: 'delay-3' },
    // Flourish elements
    { Icon: Leaf, color: 'text-emerald-100', size: 22, top: '30%', left: '50%', delay: 'delay-1' },
    { Icon: Wind, color: 'text-sky-100', size: 24, top: '50%', left: '95%', delay: 'delay-2' },
    { Icon: Leaf, color: 'text-orange-50', size: 18, top: '85%', left: '20%', delay: 'delay-3' },
    { Icon: Sun, color: 'text-rose-50', size: 30, top: '25%', left: '75%', delay: 'delay-2' },
    // New varied elements
    { Icon: Star, color: 'text-teal-100', size: 22, top: '45%', left: '40%', delay: 'delay-1' },
    { Icon: Sparkles, color: 'text-yellow-100', size: 24, top: '15%', left: '20%', delay: 'delay-2' },
    { Icon: Moon, color: 'text-purple-100', size: 20, top: '70%', left: '55%', delay: 'delay-3' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el, i) => (
        <div
          key={i}
          className={`absolute animate-float ${el.delay}`}
          style={{ top: el.top, left: el.left }}
        >
          <el.Icon className={el.color} size={el.size} fill="currentColor" />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
