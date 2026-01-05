import { useState, useRef, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import "../styles/ThemeSelector.css";

export const ThemeSelector = () => {
  const { theme, toggleTheme, setTheme, themes, themeLabels } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="theme-selector" ref={ref}>
      <button className="theme-main" onClick={toggleTheme}>
        {themeLabels[theme]}
      </button>

      <button
        className="theme-arrow"
        onClick={() => setOpen((o) => !o)}
        aria-label="Choisir un thème"
      >
        ▾
      </button>

      {open && (
        <ul className="theme-dropdown">
          {themes.map((t) => (
            <li key={t}>
              <button
                className={t === theme ? "active" : ""}
                onClick={() => {
                  setTheme(t);
                  setOpen(false);
                }}
              >
                {themeLabels[t]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
