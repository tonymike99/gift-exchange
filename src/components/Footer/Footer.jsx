import { Link } from "react-router-dom";
import { APP_NAME_SENTENCE_CASE } from "../../constants/constants";

function Footer() {
  return (
    <footer className="text-center p-6">
      <h1 className="cursive text-5xl">
        <Link to="/">{APP_NAME_SENTENCE_CASE}</Link>
      </h1>
    </footer>
  );
}

export default Footer;
