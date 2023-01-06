import { SERVER_URL } from "../../constants/constants";
import { Link } from "react-router-dom";

function MenuList({ setExpandMenu }) {
  const handleProfileOnClick = () => {
    setExpandMenu(false);
  };

  const handleLogoutOnClick = () => {
    localStorage.removeItem("userId");
  };

  return (
    <>
      <Link
        to="/profile"
        className="hover:bg-slate-500 cursor-pointer py-1 pl-2 pr-4 rounded block"
        onClick={handleProfileOnClick}
      >
        Profile
      </Link>
      <a
        href={SERVER_URL + "/logout"}
        className="hover:bg-slate-500 cursor-pointer py-1 pl-2 pr-4 rounded block"
        onClick={handleLogoutOnClick}
      >
        Logout
      </a>
    </>
  );
}

export default MenuList;
