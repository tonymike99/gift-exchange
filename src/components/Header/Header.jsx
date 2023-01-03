import { Link } from "react-router-dom";
import { DarkMode } from "../index";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center p-6">
      <h1 className="cursive text-5xl">
        <Link to="/">Gift Exchange</Link>
      </h1>
      <div className="flex flex-row gap-4">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login">Login/Signup</Link>
        <DarkMode />
      </div>
    </header>
  );
}

export default Header;
