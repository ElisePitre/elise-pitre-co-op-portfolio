import React, { useEffect, useRef, useState } from "react";
import "../styles/App.css";

function Header() {
  const dropdownRef = useRef(null);
  const [isWorkTermsOpen, setIsWorkTermsOpen] = useState(false);

  useEffect(() => {
    function handlePointerDown(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsWorkTermsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsWorkTermsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <a href="#top">About Me</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <div className="nav-dropdown" ref={dropdownRef}>
          <button
            type="button"
            className="nav-dropdown-toggle"
            aria-haspopup="true"
            aria-expanded={isWorkTermsOpen}
            onClick={() => setIsWorkTermsOpen((open) => !open)}
          >
            Work Term Reports
            <span className={`nav-dropdown-caret ${isWorkTermsOpen ? "open" : ""}`} aria-hidden="true">
              ▾
            </span>
          </button>
          <div className={`nav-dropdown-menu ${isWorkTermsOpen ? "open" : ""}`}>
            <a href="#work-term-2" onClick={() => setIsWorkTermsOpen(false)}>
              Work Term 2
            </a>
            <a href="#work-term-1" onClick={() => setIsWorkTermsOpen(false)}>
              Work Term 1
            </a>
          </div>
        </div>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
