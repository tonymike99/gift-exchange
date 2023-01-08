import styles from "./IndividualList.module.css";
import { Sidebar, Navbar, WishlistProductsTable } from "../../components/index";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EventIcon from "@mui/icons-material/Event";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import GroupIcon from "@mui/icons-material/Group";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../constants/constants";
import { useLocation } from "react-router-dom";

function IndividualList() {
  useEffect(() => {
    (async () => {
      const response = await axios.request({
        method: "GET",
        baseURL: SERVER_URL,
        url: `/lists/${listId}`,
        withCredentials: true,
      });
      setList(response.data.list);
    })();
  }, []);

  const location = useLocation();
  const listId = location.pathname.split("/")[3];
  const [list, setList] = useState([]);

  return (
    <div className={styles["main-container"]}>
      <Sidebar />
      <main className=" p-6 flex flex-col gap-8">
        <h1 className="text-4xl font-bold capitalize">{list.name}</h1>
        <p className="text-lg font-bold capitalize">
          <VisibilityIcon />
          {" Visibility: " + list.visibility}
        </p>
        <p className="text-lg font-bold">
          <EventIcon />
          {" Date of gift exchange: " + list.date}
        </p>
        <p className="text-lg font-bold">
          <CurrencyRupeeIcon />
          {" Budget: " + list.budget}
        </p>
        <p className="text-lg font-bold capitalize">
          <PersonIcon />
          {" Name: "} {list.patron?.name}
        </p>
        <p className="text-lg font-bold">
          <HomeIcon />
          {" Address: "} {list.patron?.address}
        </p>
        <p className="text-lg font-bold">
          <GroupIcon />
          {" Members: " + list.members?.length}
        </p>
        <div className="flex gap-2">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            <AddIcon /> Invite member
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            Show all members
          </button>
        </div>
        <p className="text-lg font-bold">
          <FavoriteIcon />
          {" Wishlist: " + list.wishlist?.length}
        </p>
        <WishlistProductsTable wishlistProducts={list.wishlist} />
      </main>
      <Navbar />
    </div>
  );
}

export default IndividualList;
