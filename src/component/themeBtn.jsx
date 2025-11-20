import React, { useEffect } from "react";
import { useTheme } from "../contexts/themeContex.jsx";

const ThemeBtn = () => {
  const { themeMode, darkTheme, whiteTheme } = useTheme();

  // ensure the <html> element and data-theme reflect current theme
  useEffect(() => {
    const root = document.documentElement;
    if (themeMode === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
  }, [themeMode]);

  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        value=""
        className="peer sr-only"
        checked={themeMode === "dark"}
        onChange={(e) => (e.target.checked ? darkTheme() : whiteTheme())}
      />
            <div className="
        relative w-11 h-6 
        bg-gray-200 dark:bg-gray-700 
        peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-blue-300 peer-focus:ring-blue-800
        rounded-full 
        dark:border-gray-600
        peer-checked:bg-gray-900 dark:peer-checked:bg-blue-800
        peer-checked:after:translate-x-full
        peer-checked:after:bg-blue-800
        after:content-['']
        after:absolute after:top-[2px] after:left-[2px]
        after:bg-white dark:after:bg-gray-900
        after:border-gray-300 after:border
        after:rounded-full 
        after:h-5 after:w-5 
        after:transition-all
      "></div>

      <span className="ml-3 text-3xl font-bold text-white-900 dark:text-black-100">
             {themeMode === "light" ?  "🌞": "🌚"}
      </span>
    </label>
  );
};
export default ThemeBtn;