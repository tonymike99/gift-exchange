import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";

function Sidebar() {
  const handleCreateListButtonOnClick = (e) => {
    e.target.classList.add("opacity-50");
    e.target.disabled = true;
    setTimeout(() => {
      e.target.classList.remove("opacity-50");
      e.target.disabled = false;
    }, 2000);
  };

  return (
    <aside className="p-6 w-full grid">
      <div className="flex flex-col gap-2">
        <button
          className="bg-blue-500 text-white -ml-1 px-2 py-1 rounded-lg w-32"
          onClick={handleCreateListButtonOnClick}
        >
          <AddIcon /> Create list
        </button>

        <Link to="/lists/created" className="px-3 py-1">
          <EditIcon /> Created Lists
        </Link>
        <Link to="/lists/joined" className="px-3 py-1">
          <FolderSharedIcon /> Joined Lists
        </Link>
        <Link to="/lists/discover" className="px-3 py-1">
          <TravelExploreIcon /> Discover Lists
        </Link>
        <Link to="/lists/invitations" className="px-3 py-1">
          <MarkEmailUnreadIcon /> Invitations
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
