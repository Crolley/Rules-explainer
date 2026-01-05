import { useState, useEffect } from "react";

export const THEMES = [
  "dark",
  "light",
  "sunset",
  "ocean",
  "forest",
  "cyber",
  "rose",
  "midnight",
];

export const THEME_LABELS = {
  dark: "🌙 Sombre",
  light: "☀️ Clair",
  sunset: "🌅 Sunset",
  ocean: "🌊 Ocean",
  forest: "🌲 Forest",
  cyber: "⚡ Cyber",
  rose: "🌸 Rose",
  midnight: "🌑 Midnight",
};

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const currentIndex = THEMES.indexOf(currentTheme);
      const nextIndex = (currentIndex + 1) % THEMES.length;
      return THEMES[nextIndex];
    });
  };

  const getThemeLabel = () => {
    return THEME_LABELS[theme];
  };

  return {
    theme,
    setTheme,
    toggleTheme,
    getThemeLabel,
    themes: THEMES,
    themeLabels: THEME_LABELS,
  };
};
