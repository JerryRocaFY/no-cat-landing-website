import React from 'react';
import { Trash2, RefreshCw, Calendar } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Accidents Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
             <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1535268620699-00c64511b912?auto=format&fit=crop&w=800&q=80" 
                  alt="Happy cat rolling on a clean carpet" 
                  className="rounded-3xl shadow-2xl z-10 relative border-4 border-slate-700/50"
                />
                <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-accent-500/20 rounded-full blur-3xl -z-0"></div>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">For Accidents & Stains</h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 text-brand-400 flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Spray Liberally</h3>
                  <p className="text-slate-400">Soak the affected area with No-Cat. Ensure you spray enough to reach the subfloor or padding where the odor lives.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 text-brand-400 flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Wait & Let it Work</h3>
                  <p className="text-slate-400">Let the enzymes do their job. For older, stubborn stains, cover with a damp towel and leave overnight.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 text-brand-400 flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Blot & Dry</h3>
                  <p className="text-slate-400">Blot away excess moisture with a clean cloth. As it dries, the odor disappears completely.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Litter Box Instructions Section */}
        <div className="bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-700/50 backdrop-blur-sm">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Litter Box Maintenance Protocol</h2>
            <p className="text-slate-400">Follow our patented process to keep your litter areas completely odor-free.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Daily Maintenance */}
            <div className="bg-slate-900/70 p-6 rounded-xl shadow-lg border border-slate-700 hover:border-brand-500/50 transition-all">
              <div className="w-12 h-12 bg-brand-500/10 text-brand-400 rounded-lg flex items-center justify-center mb-4 border border-brand-500/30">
                <Calendar size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Daily Maintenance</h3>
              <p className="text-slate-400 text-sm">
                Spray No-Cat directly into soiled litter once or twice a day as needed to neutralize odors immediately on contact.
              </p>
            </div>

            {/* Changing Routine */}
            <div className="bg-slate-900/70 p-6 rounded-xl shadow-lg border border-slate-700 hover:border-brand-500/50 transition-all">
              <div className="w-12 h-12 bg-brand-500/10 text-brand-400 rounded-lg flex items-center justify-center mb-4 border border-brand-500/30">
                <RefreshCw size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">When Changing Litter</h3>
              <p className="text-slate-400 text-sm">
                Empty the soiled litter box, spray No-Cat liberally inside the box, and wipe clean before refilling with fresh litter.
              </p>
            </div>

             {/* Trash Odor */}
             <div className="bg-slate-900/70 p-6 rounded-xl shadow-lg border border-slate-700 hover:border-brand-500/50 transition-all">
              <div className="w-12 h-12 bg-brand-500/10 text-brand-400 rounded-lg flex items-center justify-center mb-4 border border-brand-500/30">
                <Trash2 size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Trash Can Odors</h3>
              <p className="text-slate-400 text-sm">
                Don't let the trash stink up the room. Spray directly on litter placed in trash cans to instantly eliminate the odor.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;