import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="bg-brand-500 text-white p-2 rounded-lg">
               <ShoppingBag size={24} />
            </div>
            <span className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white">No-Cat<span className="text-brand-400">.</span></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10">
            <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 font-medium transition-colors">Features</a>
            <a href="#how-it-works" className="text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 font-medium transition-colors">How it Works</a>
            <a href="#reviews" className="text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 font-medium transition-colors">Reviews</a>
          </nav>

          {/* Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="http://www.christhecat.com/nocat" className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg shadow-brand-500/30 transform hover:-translate-y-0.5">
              Buy Now
            </a>
          </div>

          {/* Mobile: theme toggle + menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-700/50 absolute w-full transition-colors duration-300">
          <div className="px-5 pt-4 pb-8 space-y-4">
            <a href="#features" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-500 dark:hover:text-brand-400 rounded-lg font-medium">Features</a>
            <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-500 dark:hover:text-brand-400 rounded-lg font-medium">How it Works</a>
            <a href="#reviews" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-500 dark:hover:text-brand-400 rounded-lg font-medium">Reviews</a>
             <a href="http://www.christhecat.com/nocat" onClick={() => setIsOpen(false)} className="block w-full text-center mt-6 bg-brand-500 text-white px-6 py-4 rounded-lg font-semibold shadow-md">
              Buy Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
