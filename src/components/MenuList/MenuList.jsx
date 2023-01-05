import { SERVER_URL } from "../../constants/constants";
import { Link } from "react-router-dom";

function MenuList() {
  return (
    <div className="rounded">
      <Link
        to="/profile"
        className="hover:bg-slate-500 cursor-pointer py-1 pl-2 pr-10 rounded block"
      >
        Profile
      </Link>
      <a
        href={SERVER_URL + "/logout"}
        className="hover:bg-slate-500 cursor-pointer py-1 pl-2 pr-10 rounded block"
      >
        Logout
      </a>
    </div>
  );
}

export default MenuList;
