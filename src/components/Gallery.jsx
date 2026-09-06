import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../LanguageContext';

const PHOTO_IDS = [10, 20, 30, 40, 50, 60];

function photoUrl(id, width, height) {
  return `https://picsum.photos/id/${id}/${width}/${height}`;
}

function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const photo = photos[index];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    function onKey(e) {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowLeft')  onPrev();
      if (e.key === 'ArrowRight') onNext();
    }
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>

      <button
        className="lightbox-arrow lightbox-arrow--prev"
        onClick={e => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous photo"
      >
        ‹
      </button>

      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <img
          className="lightbox-img"
          src={photoUrl(photo.id, 1200, 800)}
          alt={photo.caption}
        />
        <p className="lightbox-caption">{photo.caption}</p>
        <span className="lightbox-counter">{index + 1} / {photos.length}</span>
      </div>

      <button
        className="lightbox-arrow lightbox-arrow--next"
        onClick={e => { e.stopPropagation(); onNext(); }}
        aria-label="Next photo"
      >
        ›
      </button>
    </div>
  );
}

export default function Gallery() {
  const { t } = useLanguage();
  const g = t.gallery;

  const photos = PHOTO_IDS.map((id, i) => ({ id, caption: g.captions[i] }));

  const [activeIndex, setActiveIndex] = useState(null);

  const isOpen = activeIndex !== null;
  const open  = (i) => setActiveIndex(i);
  const close = useCallback(() => setActiveIndex(null), []);
  const prev  = useCallback(() => setActiveIndex(i => (i - 1 + PHOTO_IDS.length) % PHOTO_IDS.length), []);
  const next  = useCallback(() => setActiveIndex(i => (i + 1) % PHOTO_IDS.length), []);

  return (
    <section id="gallery">
      <div className="container">
        <p className="section-label animate-item" style={{ '--delay': '0s' }}>{g.label}</p>
        <h2 className="section-title animate-item" style={{ '--delay': '0.1s' }}>{g.title}</h2>
        <p className="section-subtitle animate-item" style={{ '--delay': '0.2s', marginBottom: '48px' }}>
          {g.subtitle}
        </p>

        <div className="gallery-grid">
          {photos.map((photo, i) => (
            <button
              key={photo.id}
              className="gallery-item animate-item"
              style={{ '--delay': `${0.3 + i * 0.07}s` }}
              onClick={() => open(i)}
              aria-label={`Open photo: ${photo.caption}`}
            >
              <img
                className="gallery-img"
                src={photoUrl(photo.id, 600, 400)}
                alt={photo.caption}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-caption">{photo.caption}</span>
                <span className="gallery-zoom">⤢</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <Lightbox
          photos={photos}
          index={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}
