// import { createContext,useContext } from "react";
// export const ThemeContext = createContext({
//     theme: "light", 
//     darkMode:()=>{},
//     lightMode:()=>{}
// });

// export const useTheme = () => useContext(ThemeContext);     
// export const ThemeProvider = ThemeContext.Provider;
import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => setThemeMode("dark");
  const whiteTheme = () => setThemeMode("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, whiteTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

