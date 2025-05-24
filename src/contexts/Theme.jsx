import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light"); // 👈 Default to "light"

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");
 console.log("current theme Mode",themeMode);
 


  return (
    <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
