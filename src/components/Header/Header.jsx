import { DarkMode, MenuList, Spinner } from "../index";
import { APP_NAME_SENTENCE_CASE } from "../../constants/constants";
import { getUserDetails } from "../../redux/features/user/userSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Header() {
  const storedTheme = JSON.parse(JSON.stringify(localStorage.getItem("theme")));
  const toastTheme = storedTheme === "light" ? "dark" : "light";

  // ----------------------------------------------------------------------------------------------------

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // ----------------------------------------------------------------------------------------------------

  const [expandHeader, setExpandHeader] = useState(false);
  const [expandMenu, setExpandMenu] = useState(false);

  // ----------------------------------------------------------------------------------------------------

  useEffect(() => {
    dispatch(getUserDetails());
    // eslint-disable-next-line
  }, []);

  // ----------------------------------------------------------------------------------------------------

  const handleExpandHeaderOnClick = () => {
    setExpandHeader(!expandHeader);
  };

  const handleExpandMenuOnMouseOver = () => {
    setExpandMenu(true);
  };

  const handleExpandMenuOnMouseOut = () => {
    setExpandMenu(false);
  };

  const sessionStorageUserId = JSON.parse(
    JSON.stringify(sessionStorage.getItem("userId"))
  );

  // ----------------------------------------------------------------------------------------------------

  if (sessionStorageUserId !== null) {
    if (user.status === "succeeded" && user.data.name) {
      sessionStorage.setItem("userId", user.data._id);
      setTimeout(() => sessionStorage.removeItem("userId"), 60 * 60 * 1000);
      toast.success("You are now logged in!", {
        theme: toastTheme,
        toastId: "1",
      });
    } else if (user.status === "failed" && user.error) {
      toast.error(user.error, {
        theme: toastTheme,
        toastId: "2",
      });
    }
  }

  // ----------------------------------------------------------------------------------------------------

  return (
    <>
      <header className="p-6">
        <div className="flex flex-row justify-between items-center">
          <h1 className="cursive text-5xl">
            <Link to="/">{APP_NAME_SENTENCE_CASE}</Link>
          </h1>
          <div className="hidden md:flex flex-row gap-4 items-center">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
            {user.status === "succeeded" && user.data.name ? (
              <div
                className="flex flex-row gap-2 items-center relative z-10"
                onMouseOver={handleExpandMenuOnMouseOver}
                onMouseOut={handleExpandMenuOnMouseOut}
              >
                Hi, {user.data.name.split(" ")[0]}
                <img
                  src={user.data.image}
                  alt=""
                  className="w-10 inline-block rounded-full"
                />
                <div
                  className={expandMenu ? "absolute top-9 -left-2" : "hidden"}
                >
                  <MenuList setExpandMenu={setExpandMenu} />
                </div>
              </div>
            ) : (
              <Link to="/login">Login/Signup</Link>
            )}

            <DarkMode />
          </div>
          <span
            className="cursor-pointer md:hidden"
            onClick={handleExpandHeaderOnClick}
          >
            <MenuIcon />
          </span>
        </div>
        <div
          className={
            expandHeader
              ? "md:hidden flex flex-row gap-4 justify-center items-end pt-6"
              : "hidden"
          }
        >
          <Link to="/">Home</Link>
          <Link to="/contact">Contact Us</Link>
          {user.status === "succeeded" && user.data.name ? (
            <div
              className="flex flex-row gap-2 items-end relative z-10"
              onMouseOver={handleExpandMenuOnMouseOver}
              onMouseLeave={handleExpandMenuOnMouseOut}
            >
              Hi, {user.data.name.split(" ")[0]}
              <KeyboardArrowDownIcon />
              <div className={expandMenu ? "absolute top-6 -left-2" : "hidden"}>
                <MenuList setExpandMenu={setExpandMenu} />
              </div>
            </div>
          ) : (
            <Link to="/login">Login/Signup</Link>
          )}
          <DarkMode />
        </div>
      </header>
      <Spinner loading={user.status === "loading"} />
    </>
  );
}

export default Header;
