import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to a container ref.
 * All children with className "reveal" become visible when they enter the viewport.
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const targets = container.querySelectorAll('.reveal');
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
