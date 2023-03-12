import { CreateNewListModalSidebar } from "../index";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";

function Sidebar() {
  return (
    <aside className="p-6 w-full grid">
      <div className="flex flex-col gap-2">
        <CreateNewListModalSidebar />

        <Link to="/lists/created" className="px-2 py-1">
          <EditIcon /> Created Lists
        </Link>
        <Link to="/lists/joined" className="px-2 py-1">
          <FolderSharedIcon /> Joined Lists
        </Link>
        <Link to="/lists/discover" className="px-2 py-1">
          <TravelExploreIcon /> Discover Lists
        </Link>
        <Link to="/lists/invitations" className="px-2 py-1">
          <MarkEmailUnreadIcon /> Invitations
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
