import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center p-6">
      <h1 className="cursive text-5xl">
        <Link to="/">Gift Exchange</Link>
      </h1>
    </footer>
  );
}

export default Footer;
