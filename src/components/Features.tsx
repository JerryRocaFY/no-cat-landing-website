import React from 'react';
import { ShieldCheck, Zap, RefreshCw, Wind } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 1,
    title: "Patented Formula",
    description: "Our patented formula immediately eliminates all odors from cat litter, cat beds, and cat accidents. It doesn't just mask smells—it destroys them.",
    icon: <Zap className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "No Fragrance",
    description: "100% fragrance-free. We don't cover up odors with heavy perfumes. When the odor is gone, your home smells like... nothing.",
    icon: <Wind className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    title: "Safe for Pets & Kids",
    description: "Non-toxic and biodegradable. You can use it freely around your furry friends and little ones without worry.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
  },
  {
    id: 4,
    title: "All Surface Safe",
    description: "From hardwood to deep-pile carpet, upholstery to laundry. If it can get wet with water, No-Cat can clean it safely.",
    icon: <RefreshCw className="w-6 h-6 text-white" />,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-500 dark:text-brand-400 font-semibold tracking-wide uppercase text-base mb-3">Why Choose No-Cat?</h2>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Patented Odor Removal</h3>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Stop wasting money on sprays that don't work. Our advanced formula is the final solution for pet odors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 shadow-sm dark:shadow-lg hover:shadow-md dark:hover:shadow-brand-500/10 transition-shadow border border-slate-200 dark:border-slate-700/50 dark:backdrop-blur-sm">
              <div className="w-14 h-14 bg-brand-500 dark:bg-brand-500/10 rounded-xl flex items-center justify-center mb-6 border border-brand-500 dark:border-brand-500/30">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
