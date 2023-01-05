import { Link } from "react-router-dom";
import { DarkMode } from "../index";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { APP_NAME_SENTENCE_CASE } from "../../constants/constants";

function Header() {
  const [expandMenu, setExpandMenu] = useState(false);

  const handleExpandMenuOnClick = () => {
    setExpandMenu(!expandMenu);
  };

  return (
    <header className="p-6">
      <div className="flex flex-row justify-between items-center">
        <h1 className="cursive text-5xl">
          <Link to="/">{APP_NAME_SENTENCE_CASE}</Link>
        </h1>
        <div className="hidden md:flex flex-row gap-4">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login/Signup</Link>
          <DarkMode />
        </div>
        <span
          className="cursor-pointer md:hidden"
          onClick={handleExpandMenuOnClick}
        >
          <MenuIcon />
        </span>
      </div>
      <div
        className={
          expandMenu
            ? "md:hidden flex flex-row gap-4 justify-center pt-6"
            : "hidden"
        }
      >
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login">Login/Signup</Link>
        <DarkMode />
      </div>
    </header>
  );
}

export default Header;
