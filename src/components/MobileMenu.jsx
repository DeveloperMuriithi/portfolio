import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Ping Me", href: "#contact", highlight: true },
  ];

  return (
    <div
      className={`
        fixed inset-0 z-50 flex flex-col items-center justify-center
        bg-black/90 text-white transition-opacity duration-300 ease-in-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      role="dialog"
      aria-modal="true"
      aria-hidden={!menuOpen}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl focus:outline-none"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Nav Links */}
      <nav className="flex flex-col space-y-6 text-2xl font-semibold">
        {links.map(({ label, href, highlight }, idx) => (
          <a
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            className={`
              transform transition duration-300 ease-in-out
              ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              ${highlight ? "text-green-400" : "text-white"}
            `}
            style={{ transitionDelay: `${idx * 75}ms` }} // staggered animation
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
};
