import React, { useState } from 'react';
import { Send, Star, CheckCircle } from 'lucide-react';

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbx2HZX32KQtVypGA-PGpInK-swRsmkoHaNGyDyjX7Dq_wRGGvcxGnVbHO-y8ZTB4bWLSg/exec';

const easeOfUseOptions = ['Very Easy', 'Somewhat Easy', 'Neutral', 'Difficult'];
const usageLocationOptions = ['Litter box', 'Cat Bed', 'Carpet/Furniture', 'Trash Can', 'Other'];
const catCountOptions = ['1', '2', '3', 'Other'];
const repurchaseOptions = ['Yes', 'No'];

const ReviewForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [effectiveness, setEffectiveness] = useState(0);
  const [easeOfUse, setEaseOfUse] = useState('');
  const [usageLocations, setUsageLocations] = useState<string[]>([]);
  const [likedMost, setLikedMost] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [catCount, setCatCount] = useState('');
  const [wouldRepurchase, setWouldRepurchase] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const payload = {
      firstName,
      lastName,
      email,
      effectiveness,
      easeOfUse,
      usageLocation: usageLocations.join(', '),
      likedMost,
      suggestions,
      catCount,
      wouldRepurchase,
      timestamp: new Date().toISOString(),
    };

    try {
      const formData = new URLSearchParams();
      Object.entries(payload).forEach(([key, value]) => {
        formData.append(key, String(value));
      });

      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="feedback" className="py-20 bg-slate-900">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-slate-800/50 rounded-2xl p-12 border border-slate-700/50">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">Thank you for your review!</h3>
            <p className="text-slate-400">Your feedback helps us make No-Cat even better.</p>
          </div>
        </div>
      </section>
    );
  }

  const inputClass = "w-full bg-slate-800/50 border border-slate-600 text-white placeholder-slate-500 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all";
  const labelClass = "block text-sm font-semibold text-slate-300 mb-1.5";
  const radioGroupClass = "flex flex-wrap gap-3";
  const radioLabelClass = (selected: boolean) =>
    `cursor-pointer px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
      selected
        ? 'bg-brand-500 text-white border-brand-500 shadow-md shadow-brand-500/20'
        : 'bg-slate-800/50 text-slate-400 border-slate-600 hover:border-brand-400'
    }`;

  return (
    <section id="feedback" className="py-20 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-2">We Value Your Opinion</h2>
          <h3 className="text-3xl font-bold text-white sm:text-4xl">Please provide your review for No-Cat!</h3>
          <p className="mt-4 text-lg text-slate-400">
            Your honest feedback helps us improve and helps other pet owners make informed decisions.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-800/50 rounded-2xl p-8 md:p-10 border border-slate-700/50 backdrop-blur-sm space-y-8">
          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>First Name <span className="text-red-400">*</span></label>
              <input type="text" required value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First name" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Last Name</label>
              <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last name" className={inputClass} />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className={labelClass}>Email <span className="text-red-400">*</span></label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" className={inputClass} />
          </div>

          {/* Effectiveness Rating */}
          <div>
            <label className={labelClass}>
              How effective was No-Cat at eliminating odors? <span className="text-red-400">*</span>
            </label>
            <p className="text-xs text-slate-500 mb-3">1 = Not effective, 5 = Extremely effective</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setEffectiveness(star)}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  className="p-1 transition-transform hover:scale-110"
                >
                  <Star
                    size={32}
                    className={`transition-colors ${
                      star <= (hoveredStar || effectiveness)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-slate-600'
                    }`}
                  />
                </button>
              ))}
            </div>
            <input type="number" required value={effectiveness || ''} onChange={() => {}} className="sr-only" tabIndex={-1} />
          </div>

          {/* Ease of Use */}
          <div>
            <label className={labelClass}>How easy was No-Cat to use? <span className="text-red-400">*</span></label>
            <div className={radioGroupClass}>
              {easeOfUseOptions.map(option => (
                <label key={option} className={radioLabelClass(easeOfUse === option)}>
                  <input type="radio" name="easeOfUse" value={option} required checked={easeOfUse === option} onChange={e => setEaseOfUse(e.target.value)} className="sr-only" />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Usage Location (multi-select) */}
          <div>
            <label className={labelClass}>Where did you use No-Cat? <span className="text-red-400">*</span></label>
            <p className="text-xs text-slate-500 mb-3">Select all that apply</p>
            <div className={radioGroupClass}>
              {usageLocationOptions.map(option => {
                const selected = usageLocations.includes(option);
                return (
                  <label key={option} className={radioLabelClass(selected)}>
                    <input
                      type="checkbox"
                      value={option}
                      checked={selected}
                      onChange={() =>
                        setUsageLocations(prev =>
                          selected ? prev.filter(o => o !== option) : [...prev, option]
                        )
                      }
                      className="sr-only"
                    />
                    {option}
                  </label>
                );
              })}
            </div>
            <input type="text" required value={usageLocations.length ? usageLocations.join(',') : ''} onChange={() => {}} className="sr-only" tabIndex={-1} />
          </div>

          {/* Liked Most */}
          <div>
            <label className={labelClass}>What did you like most about No-Cat? <span className="text-red-400">*</span></label>
            <textarea required value={likedMost} onChange={e => setLikedMost(e.target.value)} rows={3} placeholder="Tell us what stood out to you..." className={inputClass + " resize-none"} />
          </div>

          {/* Suggestions */}
          <div>
            <label className={labelClass}>Suggestions</label>
            <textarea value={suggestions} onChange={e => setSuggestions(e.target.value)} rows={3} placeholder="Any ideas on how we can improve?" className={inputClass + " resize-none"} />
          </div>

          {/* Cat Count */}
          <div>
            <label className={labelClass}>How many cats do you have?</label>
            <div className={radioGroupClass}>
              {catCountOptions.map(option => (
                <label key={option} className={radioLabelClass(catCount === option)}>
                  <input type="radio" name="catCount" value={option} checked={catCount === option} onChange={e => setCatCount(e.target.value)} className="sr-only" />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Would Repurchase */}
          <div>
            <label className={labelClass}>Would you consider purchasing No-Cat in the future?</label>
            <div className={radioGroupClass}>
              {repurchaseOptions.map(option => (
                <label key={option} className={radioLabelClass(wouldRepurchase === option)}>
                  <input type="radio" name="wouldRepurchase" value={option} checked={wouldRepurchase === option} onChange={e => setWouldRepurchase(e.target.value)} className="sr-only" />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-brand-500 hover:bg-brand-600 text-white text-lg px-8 py-4 rounded-xl font-bold shadow-lg shadow-brand-500/30 transition-all hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {submitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={20} />
                  Send Feedback
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReviewForm;
