import { Link } from "react-router-dom";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

function Navbar() {
  return (
    <nav className="fixed bottom-0 w-full flex flex-row justify-between py-6">
      <Link to="/personal" className="ml-3 px-3">
        <FolderSpecialIcon /> Personal
      </Link>
      <Link to="/shared-with-me" className="ml-3 px-3">
        <FolderSharedIcon /> Shared with Me
      </Link>
      <Link to="/public" className="ml-3 px-3">
        <FolderOpenIcon /> Public
      </Link>
    </nav>
  );
}

export default Navbar;
