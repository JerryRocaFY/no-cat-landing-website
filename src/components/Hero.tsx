import React from 'react';
import { CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-900 text-white pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-brand-500/20 opacity-50 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 rounded-full bg-accent-500/20 opacity-50 blur-3xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-sm font-semibold mb-8">
              #1 Rated by Cat Parents
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Eliminate Cat Odors. <br />
              <span className="text-brand-400">Don't Just Mask Them.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
              The professional-grade enzymatic formula that destroys urine, vomit, and organic stains at the molecular level. Safe for pets, tough on smells.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12">
              <a href="http://www.christhecat.com/nocat" className="bg-brand-500 hover:bg-brand-600 text-white text-lg px-8 py-4 rounded-full font-bold transition-all shadow-2xl shadow-brand-500/30 transform hover:-translate-y-1 inline-block text-center">
                Get No-Cat Today
              </a>
              <a href="#how-it-works" className="bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-slate-300 text-lg px-8 py-4 rounded-full font-semibold transition-all inline-block text-center">
                Learn How
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4 text-sm font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-500" size={20} />
                <span>100% Pet Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-500" size={20} />
                <span>Enzyme Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-500" size={20} />
                <span>Money Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-800 border-4 border-slate-700/50 aspect-square lg:aspect-[4/3] group">
               <img 
                src="/images/nocat_small_and_large_products.jpg" 
                alt="Content cat relaxing on a clean surface" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
               <div className="absolute bottom-6 left-6 bg-slate-900/50 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 shadow-lg">
                  <p className="text-sm font-bold text-white">Professional Strength</p>
                  <p className="text-xs text-slate-400">Available in 3.4oz & 8oz</p>
               </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -top-8 -right-8 bg-accent-500 text-white w-28 h-28 rounded-full flex flex-col items-center justify-center shadow-lg shadow-accent-500/30 animate-bounce-slow p-3 text-center">
                <span className="font-bold text-xl leading-none">10k+</span>
                <span className="text-xs font-medium">Happy Noses</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;