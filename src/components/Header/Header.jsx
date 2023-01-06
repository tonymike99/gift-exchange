import { Link } from "react-router-dom";
import { DarkMode, MenuList } from "../index";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";
import { APP_NAME_SENTENCE_CASE } from "../../constants/constants";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails } from "../../redux/features/user/userSlice";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";

function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const storedTheme = localStorage.getItem("theme");
  const toastTheme = storedTheme === "light" ? "dark" : "light";

  useEffect(() => {
    dispatch(getUserDetails());
    // eslint-disable-next-line
  }, []);

  const [expandHeader, setExpandHeader] = useState(false);

  const handleExpandHeaderOnClick = () => {
    setExpandHeader(!expandHeader);
  };

  const [expandMenu, setExpandMenu] = useState(false);

  const handleExpandMenuOnMouseOver = () => {
    setExpandMenu(true);
  };

  const handleExpandMenuOnMouseOut = () => {
    setExpandMenu(false);
  };

  if (user.status === "succeeded" && user.data.name) {
    localStorage.setItem("userId", user.data.id);
    toast.success("You are now logged in!", {
      theme: toastTheme,
      toastId: "1",
    });
  }

  if (user.status === "failed" && user.error) {
    toast.error(user.error, {
      theme: toastTheme,
      toastId: "2",
    });
  }

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
