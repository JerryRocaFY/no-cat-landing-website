import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const storeUrl = "http://www.christhecat.com/nocat";

  return (
    <footer className="bg-slate-800/50 text-slate-400 py-12 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2">
             <span className="font-bold text-2xl text-white block mb-4">No-Cat<span className="text-brand-400">.</span></span>
             <p className="max-w-sm text-slate-400 mb-6">
               The ultimate solution for pet owners. Reclaim your home from unwanted odors with our science-backed, pet-safe formula.
             </p>
             <div className="flex space-x-5">
               <a href="#" className="text-slate-500 hover:text-brand-400 transition-colors"><Instagram size={22}/></a>
               <a href="#" className="text-slate-500 hover:text-brand-400 transition-colors"><Facebook size={22}/></a>
               <a href="#" className="text-slate-500 hover:text-brand-400 transition-colors"><Twitter size={22}/></a>
             </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">Shop</h4>
            <ul className="space-y-3">
              <li><a href={storeUrl} className="hover:text-brand-400 transition-colors">Original Formula</a></li>
              <li><a href={storeUrl} className="hover:text-brand-400 transition-colors">Gallon Refill</a></li>
              <li><a href={storeUrl} className="hover:text-brand-400 transition-colors">Bundles</a></li>
              <li><a href={storeUrl} className="hover:text-brand-400 transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-700/50 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} No-Cat. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Pet Lovers, by Pet Lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;