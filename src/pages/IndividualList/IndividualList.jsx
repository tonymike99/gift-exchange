import styles from "./IndividualList.module.css";
import {
  Sidebar,
  Navbar,
  WishlistProductsTable,
  CreateNewProductModal,
  InviteFriendModal,
} from "../../components/index";
import { SERVER_URL } from "../../constants/constants";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EventIcon from "@mui/icons-material/Event";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import GroupIcon from "@mui/icons-material/Group";
import FavoriteIcon from "@mui/icons-material/Favorite";

function IndividualList() {
  const [list, setList] = useState([]);

  // ----------------------------------------------------------------------------------------------------

  useEffect(() => {
    getListData();
    // eslint-disable-next-line
  }, []);

  // ----------------------------------------------------------------------------------------------------

  const location = useLocation();
  const listId = location.pathname.split("/")[3];

  // ----------------------------------------------------------------------------------------------------

  const getListData = async () => {
    const response = await axios.request({
      method: "GET",
      baseURL: SERVER_URL,
      url: `/lists/${listId}`,
      withCredentials: true,
    });

    setList(response.data.list);
  };

  const updateProductInWishlist = async (asin, isDone) => {
    await axios.request({
      method: "PUT",
      baseURL: SERVER_URL,
      url: `/lists/${listId}/wishlist`,
      data: {
        asin,
        isDone,
      },
      withCredentials: true,
    });

    getListData();
  };

  const deleteProductInWishlist = async (asin) => {
    await axios.request({
      method: "DELETE",
      baseURL: SERVER_URL,
      url: `/lists/${listId}/wishlist`,
      data: {
        asin,
      },
      withCredentials: true,
    });

    getListData();
  };

  // ----------------------------------------------------------------------------------------------------

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
          {" Date of gift exchange: " + list.endDate?.slice(0, 10)}
        </p>
        <p className="text-lg font-bold">
          <CurrencyRupeeIcon />
          {" Budget: " + list.budget}
        </p>
        {list.visibility !== "private" && (
          <>
            <p className="text-lg font-bold">
              <GroupIcon />
              {" Members: " + list.members?.length}
            </p>
            {list.members?.map((member) => (
              <div>
                {member.name} - {member.email}
              </div>
            ))}
            <InviteFriendModal getListData={getListData} />
            <p className="text-lg font-bold">
              <GroupIcon />
              {" Invited: " + list.invitees?.length}
            </p>
            {list.invitees?.map((invitee) => (
              <div>
                {invitee.name} - {invitee.email}
              </div>
            ))}
          </>
        )}
        <p className="text-lg font-bold">
          <FavoriteIcon />
          {" Wishlist: " + list.wishlist?.length}
        </p>
        <WishlistProductsTable
          wishlist={list.wishlist}
          updateProductInWishlist={updateProductInWishlist}
          deleteProductInWishlist={deleteProductInWishlist}
        />
        <div>
          <CreateNewProductModal getListData={getListData} />
        </div>
      </main>
      <Navbar />
    </div>
  );
}

export default IndividualList;
