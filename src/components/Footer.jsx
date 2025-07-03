import { FaEnvelope } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { useEffect, useState } from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
  const [showButton, setShowButton] = useState(false);

  // Show scroll-to-top button only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full text-gray-400 mt-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Spacer for visual flow */}
        <div className="h-12" />

        {/* Divider line */}
        <div className="border-t border-white/5" />

        {/* Content */}
        <div className="py-10 text-center space-y-6">

          {/* Icons Row */}
          <div className="flex justify-center space-x-5 text-2xl">
            {[
              {
                Icon: FaEnvelope,
                href: "mailto:info@developermuriithi.engineer",
                label: "Email",
              },
              {
                Icon: LuGithub,
                href: "https://github.com/DeveloperMuriithi",
                label: "GitHub",
              },
              {
                Icon: FaLinkedinIn,
                href: "https://www.linkedin.com/in/joshua-muriithi",
                label: "LinkedIn",
              },
              {
                Icon: FaXTwitter,
                href: "https://x.com/DvlprMuriithi",
                label: "X (formerly Twitter)",
              },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-600">
            &copy; {year} Joshua Muriithi. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
{/* Scroll to Top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-20 sm:bottom-8 right-6 z-50 p-3 rounded-full border border-white/10 text-white hover:text-green-400 hover:border-green-400 transition duration-300 backdrop-blur"
          >
            ↑
          </button>
        )}

    </footer>
  );
};
