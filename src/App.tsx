import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ProductSelection from './components/ProductSelection';
import StainExpertAI from './components/StainExpertAI';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        {/* Product Selection Section */}
        <ProductSelection />
        {/* AI Section placed strategically after products to answer specific doubts */}
        <StainExpertAI />
        
        {/* Simple Testimonial Banner */}
        <section id="reviews" className="py-20 bg-slate-800/70 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex justify-center gap-1.5 mb-8">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-7 h-7 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium italic mb-8 leading-relaxed text-slate-200">
              "I thought I had to replace my carpets. No-Cat literally saved me thousands of dollars. The smell is completely gone, not just covered up."
            </blockquote>
            <cite className="not-italic font-semibold text-brand-300 text-lg">— Sarah Jenkins, Cat Mom of 3</cite>
          </div>
        </section>

        <section className="py-24 bg-slate-900 text-center">
          <div className="max-w-3xl mx-auto px-4">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for a fresh home?</h2>
             <p className="text-lg text-slate-400 mb-10">Join thousands of happy customers who have reclaimed their homes from pet odors.</p>
             <a href="http://www.christhecat.com/nocat" className="inline-block bg-brand-500 hover:bg-brand-600 text-white text-xl px-10 py-5 rounded-full font-bold shadow-2xl shadow-brand-500/40 transition-transform hover:scale-105">
               Order No-Cat Now
             </a>
             <p className="mt-8 text-sm text-slate-500">30-Day Money Back Guarantee • Free Shipping on Orders $50+</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;