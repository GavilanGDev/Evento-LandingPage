import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const targets = document.querySelectorAll('section, footer');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const items = entry.target.querySelectorAll('.animate-item');
          if (entry.isIntersecting) {
            items.forEach(el => el.classList.add('is-visible'));
          } else {
            items.forEach(el => el.classList.remove('is-visible'));
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach(el => observer.observe(el));

    const mutationObserver = new MutationObserver(() => {
      targets.forEach(target => {
        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          target.querySelectorAll('.animate-item:not(.is-visible)').forEach(el => el.classList.add('is-visible'));
        }
      });
    });

    targets.forEach(el => mutationObserver.observe(el, { childList: true, subtree: true }));

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
