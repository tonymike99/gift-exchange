import { Link } from "react-router-dom";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

function Sidebar() {
  return (
    <aside className="p-6 w-full grid">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Lists</span>
        <Link to="/lists/personal" className="ml-3 px-3 py-1">
          <FolderSpecialIcon /> Personal
        </Link>
        <Link to="/lists/shared-with-me" className="ml-3 px-3 py-1">
          <FolderSharedIcon /> Shared with Me
        </Link>
        <Link to="/lists/public" className="ml-3 px-3 py-1">
          <FolderOpenIcon /> Public
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
