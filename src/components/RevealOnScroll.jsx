// components/RevealOnScroll.jsx
import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};

export default RevealOnScroll;
