import { CreateNewListModalNavbar } from "../index";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";

function Navbar() {
  return (
    <nav className="fixed bottom-0 w-full flex flex-row justify-between p-5">
      <CreateNewListModalNavbar />

      <Link to="/lists/created">
        <EditIcon />
      </Link>
      <Link to="/lists/joined">
        <FolderSharedIcon />
      </Link>
      <Link to="/lists/discover">
        <TravelExploreIcon />
      </Link>
      <Link to="/lists/invitations">
        <MarkEmailUnreadIcon />
      </Link>
    </nav>
  );
}

export default Navbar;
