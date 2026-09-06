import { useState, useEffect, useCallback } from 'react';

const PHOTOS = [
  { id: 10,  caption: 'Opening Keynote' },
  { id: 20,  caption: 'Networking Lunch' },
  { id: 30,  caption: 'Workshop in Action' },
  { id: 40,  caption: 'Panel Discussion' },
  { id: 50,  caption: 'Evening Reception' },
  { id: 60,  caption: 'Hands-on Lab' },
];

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
  const [activeIndex, setActiveIndex] = useState(null);

  const isOpen = activeIndex !== null;

  const open  = (i) => setActiveIndex(i);
  const close = useCallback(() => setActiveIndex(null), []);
  const prev  = useCallback(() => setActiveIndex(i => (i - 1 + PHOTOS.length) % PHOTOS.length), []);
  const next  = useCallback(() => setActiveIndex(i => (i + 1) % PHOTOS.length), []);

  return (
    <section id="gallery">
      <div className="container">
        <p className="section-label">Past Events</p>
        <h2 className="section-title">Moments from previous summits</h2>
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>
          A look at what happens when great minds gather in one room.
        </p>

        <div className="gallery-grid">
          {PHOTOS.map((photo, i) => (
            <button
              key={photo.id}
              className="gallery-item"
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
          photos={PHOTOS}
          index={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}
