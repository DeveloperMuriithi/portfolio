import { useEffect } from "react";

export const useScrollReveal = (ref) => {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let hasRevealed = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRevealed) {
          node.classList.add("visible");
          hasRevealed = true;
          observer.unobserve(node); // stop watching to save resources
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [ref]);
};
