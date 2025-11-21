import React, { useState } from 'react';
import { Sparkles, Send, Bot } from 'lucide-react';
import { getCleaningAdvice } from '../services/geminiService';

const StainExpertAI: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(false);
    setResponse('');

    try {
      const advice = await getCleaningAdvice(query);
      setResponse(advice);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
             <div className="absolute top-10 left-10 w-72 h-72 bg-brand-500 rounded-full blur-3xl animate-pulse-slow"></div>
             <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-brand-500/10 rounded-xl mb-6 backdrop-blur-sm border border-brand-500/30">
            <Sparkles className="text-brand-400" size={28} />
          </div>
          <h2 className="text-2xl font-semibold text-brand-300 mb-3">Ask the No-Cat Cleaning Concierge</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Got a tough mess? We have an answer.</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Not sure how to treat a specific surface or stain? Ask our AI expert powered by Gemini for instant, customized cleaning advice.
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-700/50 shadow-2xl">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., How do I get dried urine out of a velvet couch?"
              className="w-full bg-slate-900/80 border-2 border-slate-700 text-white placeholder-slate-400 rounded-xl py-4 pl-6 pr-20 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={loading || !query}
              className="absolute right-3 top-3 bottom-3 bg-brand-500 hover:bg-brand-600 text-white px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Send size={20} />
              )}
            </button>
          </form>

          {response && (
            <div className="mt-6 bg-slate-900/80 rounded-xl p-6 border-2 border-slate-700 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="bg-brand-500/10 p-2 rounded-full flex-shrink-0 border-2 border-brand-500/30">
                    <Bot size={24} className="text-brand-400" />
                </div>
                <div>
                    <h4 className="font-bold text-brand-300 mb-2">Expert Advice:</h4>
                    <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">{response}</p>
                </div>
              </div>
            </div>
          )}
          
          {error && (
              <div className="mt-4 text-red-400 text-center text-sm">
                  Something went wrong. Please try again.
              </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <button onClick={() => setQuery("How to clean hardwood floors?")} className="text-sm bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full text-slate-300 transition-colors border border-slate-700">
                Hardwood floors?
            </button>
            <button onClick={() => setQuery("Can I use this on my mattress?")} className="text-sm bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full text-slate-300 transition-colors border border-slate-700">
                Mattress stains?
            </button>
            <button onClick={() => setQuery("Is it safe for kittens?")} className="text-sm bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full text-slate-300 transition-colors border border-slate-700">
                Safe for kittens?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StainExpertAI;