import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-5 right-5 p-3 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-full shadow-lg transition-all duration-300"
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;
