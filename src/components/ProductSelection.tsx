import React from 'react';
import { Check, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: '3.4oz',
    name: 'No-Cat Travel Size',
    size: '3.4 fl oz',
    description: 'The perfect trial size or on-the-go companion. TSA-compliant, fitting easily into bags for emergencies anywhere.',
    price: '$4.95', 
    features: ['Fragrance Free', 'Pet & People Friendly', 'Non-Toxic Biodegradable', 'TSA Compliant'],
    // Reliable placeholder for small black spray bottle
    image: '/images/BothSizes.jpg', 
    highlight: false
  },
  {
    id: '8oz',
    name: 'No-Cat Home Essential',
    size: '8 fl oz',
    description: 'Our signature concentrated formula. The professional choice for households with multiple pets or frequent accidents.',
    price: '$8.95',
    features: ['Patented Formula', 'Pet & People Friendly', 'Non-Toxic Biodegradable', 'Fragrance Free'],
    // Reliable placeholder for larger black bottle
    image: '/images/BothSizes.jpg', 
    highlight: true
  }
];

const ProductSelection: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-slate-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-base mb-3">Shop No-Cat</h2>
           <h3 className="text-3xl font-bold text-white sm:text-4xl">Choose the Perfect Size</h3>
           <p className="mt-4 text-lg text-slate-400">Whether you need a quick fix on the go or a permanent solution for your home.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className={`relative bg-slate-800/50 rounded-2xl shadow-2xl overflow-hidden border-2 flex flex-col transition-all duration-300 ${product.highlight ? 'border-brand-500/80 ring-4 ring-brand-500/10' : 'border-slate-700/50 hover:border-brand-500/50'}`}>
              {product.highlight && (
                <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg z-10">
                  BEST SELLER
                </div>
              )}
              
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-800 relative group p-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 opacity-50"></div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-500 relative z-10 drop-shadow-2xl" 
                    loading="lazy"
                  />
              </div>

              <div className="p-8 flex-1 flex flex-col bg-slate-900/60">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <h4 className="text-xl font-bold text-white">{product.name}</h4>
                        <p className="text-brand-400 font-medium text-lg">{product.size}</p>
                    </div>
                    <div className="text-2xl font-bold text-white">{product.price}</div> 
                </div>
                
                <p className="text-slate-400 mb-6 flex-1">{product.description}</p>
                
                <ul className="space-y-3 mb-8">
                    {product.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-300">
                            <Check size={16} className="text-brand-400 mr-3 flex-shrink-0" />
                            {feat}
                        </li>
                    ))}
                </ul>

                <a href="http://www.christhecat.com/nocat" className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${product.highlight ? 'bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/30' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}>
                    <ShoppingCart size={20} />
                    Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSelection;