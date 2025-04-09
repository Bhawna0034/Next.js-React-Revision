"use client";
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Theme />
      </ThemeContext.Provider>
    </div>
  );
};

export const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <form className={`border p-4 mb-4 ${theme === "dark" ? "bg-gray-800 text-white": "bg-white text-black"}`}>
        <h2>Welcome to React World</h2>
        <div className="space-x-2 mb-4">
          <button className="border px-4 py-2">Sign up</button>
          <button className="border px-4 py-2">Log in</button>
        </div>
      </form>
      <button onClick={toggleTheme} className="border px-4 py-2 bg-blue-600 text-white ">Change Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
