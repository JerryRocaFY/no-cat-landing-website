import React, { useState, useEffect } from 'react';
import { Send, Star, CheckCircle, X, MessageSquarePlus } from 'lucide-react';

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbx2HZX32KQtVypGA-PGpInK-swRsmkoHaNGyDyjX7Dq_wRGGvcxGnVbHO-y8ZTB4bWLSg/exec';

const easeOfUseOptions = ['Very Easy', 'Somewhat Easy', 'Neutral', 'Difficult'];
const usageLocationOptions = ['Litter box', 'Cat Bed', 'Carpet/Furniture', 'Trash Can', 'Other'];
const catCountOptions = ['1', '2', '3', 'Other'];
const repurchaseOptions = ['Yes', 'No'];

const ReviewForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
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

  // Show floating button when the reviews section is in view
  useEffect(() => {
    const reviewsSection = document.getElementById('reviews');
    if (!reviewsSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowButton(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(reviewsSection);
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

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

  const inputClass = "w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all";
  const labelClass = "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5";
  const radioGroupClass = "flex flex-wrap gap-2";
  const radioLabelClass = (selected: boolean) =>
    `cursor-pointer px-3 py-2 rounded-xl border text-sm font-medium transition-all ${
      selected
        ? 'bg-brand-500 text-white border-brand-500 shadow-md shadow-brand-500/20'
        : 'bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-600 hover:border-brand-400'
    }`;

  return (
    <>
      {/* Floating "Submit Review" Button */}
      <button
        onClick={() => { setIsOpen(true); setSubmitted(false); }}
        className={`fixed bottom-8 right-8 z-40 bg-brand-500 hover:bg-brand-600 text-white px-6 py-4 rounded-full font-bold shadow-2xl shadow-brand-500/40 flex items-center gap-2 transition-all duration-500 hover:scale-105 ${
          showButton && !isOpen
            ? 'translate-y-0 opacity-100'
            : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <MessageSquarePlus size={22} />
        Submit Review
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700/50 w-full max-w-2xl max-h-[90vh] overflow-y-auto transition-colors duration-300 animate-fade-in">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="p-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 dark:text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Thank you for your review!</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">Your feedback helps us make No-Cat even better.</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="text-center mb-8 pr-8">
                  <h2 className="text-brand-500 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm mb-2">We Value Your Opinion</h2>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Review No-Cat!</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Your honest feedback helps us improve.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>First Name <span className="text-red-500 dark:text-red-400">*</span></label>
                      <input type="text" required value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First name" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Last Name</label>
                      <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last name" className={inputClass} />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>Email <span className="text-red-500 dark:text-red-400">*</span></label>
                    <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" className={inputClass} />
                  </div>

                  {/* Effectiveness Rating */}
                  <div>
                    <label className={labelClass}>
                      How effective was No-Cat at eliminating odors? <span className="text-red-500 dark:text-red-400">*</span>
                    </label>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">1 = Not effective, 5 = Extremely effective</p>
                    <div className="flex gap-1">
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
                            size={28}
                            className={`transition-colors ${
                              star <= (hoveredStar || effectiveness)
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-slate-300 dark:text-slate-600'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    <input type="number" required value={effectiveness || ''} onChange={() => {}} className="sr-only" tabIndex={-1} />
                  </div>

                  {/* Ease of Use */}
                  <div>
                    <label className={labelClass}>How easy was No-Cat to use? <span className="text-red-500 dark:text-red-400">*</span></label>
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
                    <label className={labelClass}>Where did you use No-Cat? <span className="text-red-500 dark:text-red-400">*</span></label>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">Select all that apply</p>
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
                    <label className={labelClass}>What did you like most about No-Cat? <span className="text-red-500 dark:text-red-400">*</span></label>
                    <textarea required value={likedMost} onChange={e => setLikedMost(e.target.value)} rows={2} placeholder="Tell us what stood out to you..." className={inputClass + " resize-none"} />
                  </div>

                  {/* Suggestions */}
                  <div>
                    <label className={labelClass}>Suggestions</label>
                    <textarea value={suggestions} onChange={e => setSuggestions(e.target.value)} rows={2} placeholder="Any ideas on how we can improve?" className={inputClass + " resize-none"} />
                  </div>

                  {/* Cat Count & Repurchase side by side */}
                  <div className="grid md:grid-cols-2 gap-6">
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
                    <div>
                      <label className={labelClass}>Would you purchase No-Cat again?</label>
                      <div className={radioGroupClass}>
                        {repurchaseOptions.map(option => (
                          <label key={option} className={radioLabelClass(wouldRepurchase === option)}>
                            <input type="radio" name="wouldRepurchase" value={option} checked={wouldRepurchase === option} onChange={e => setWouldRepurchase(e.target.value)} className="sr-only" />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {error && <p className="text-red-500 dark:text-red-400 text-sm text-center">{error}</p>}

                  {/* Submit */}
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
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewForm;
