import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Load the initial theme from localStorage or default to false
    return JSON.parse(localStorage.getItem("isDarkTheme")) || false;
  });

  useEffect(() => {
    // Apply the theme class to the body
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  useEffect(() => {
    // Save the theme preference to localStorage
    localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
