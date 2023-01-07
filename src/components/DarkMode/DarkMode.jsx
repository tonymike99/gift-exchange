import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { useState } from "react";
import "./DarkMode.css";

function DarkMode() {
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = JSON.parse(JSON.stringify(localStorage.getItem("theme")));

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  const [darkMode, setDarkMode] = useState(defaultDark);

  if (defaultDark) {
    setDark();
  }

  const handleDarkModeOnClick = () => {
    if (darkMode) {
      setDarkMode(false);
      setLightMode();
    } else {
      setDarkMode(true);
      setDark();
    }
  };

  return (
    <div>
      <span>☀️</span>
      <span className="cursor-pointer" onClick={handleDarkModeOnClick}>
        {darkMode ? <ToggleOnIcon color="info" /> : <ToggleOffIcon />}
      </span>
      <span>🌒</span>
    </div>
  );
}

export default DarkMode;
