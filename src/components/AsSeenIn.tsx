import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/images/press/moderncat-cover.jpg', alt: 'Modern Cat Magazine Cover — Fall/Winter 2025/26', caption: 'Magazine Cover' },
  { src: '/images/press/moderncat-fullpage-ad.jpg', alt: 'No-Cat Full Page Ad in Modern Cat Magazine', caption: 'Full Page Ad' },
  { src: '/images/press/moderncat-halfpage-ad.jpg', alt: 'No-Cat Half Page Ad in Modern Cat Magazine', caption: 'Half Page Ad' },
];

const AsSeenIn: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const navigate = (direction: number) => {
    if (lightboxIndex === null) return;
    const next = (lightboxIndex + direction + images.length) % images.length;
    setLightboxIndex(next);
  };

  return (
    <>
      <section className="py-20 bg-slate-50 dark:bg-slate-800/40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-brand-500 dark:text-brand-400 font-semibold tracking-wide uppercase text-base mb-3">As Seen In</h2>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Featured in Modern Cat Magazine</h3>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              No-Cat was proudly featured in the Fall/Winter 2025 issue of Modern Cat — the lifestyle magazine for modern cats and their companions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-brand-500/5 border border-slate-200 dark:border-slate-700/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{image.caption}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Click to enlarge</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={closeLightbox}>
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
          >
            <X size={24} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-center text-white/80 text-sm mt-4 font-medium">{images[lightboxIndex].caption} — Modern Cat Magazine, Fall/Winter 2025</p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
};

export default AsSeenIn;
