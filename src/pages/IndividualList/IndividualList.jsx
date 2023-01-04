import styles from "./Individual.module.css";
import { Sidebar, Navbar, WishlistProductsTable } from "../../components/index";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EventIcon from "@mui/icons-material/Event";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import GroupIcon from "@mui/icons-material/Group";
import FavoriteIcon from "@mui/icons-material/Favorite";

function IndividualList({
  name,
  visibility,
  date,
  patron,
  budget,
  wishlistProducts,
}) {
  return (
    <div className={styles["main-container"]}>
      <Sidebar />
      <main className=" p-6 flex flex-col gap-8">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-lg font-bold">
          <VisibilityIcon />
          Visibility: {visibility}
        </p>
        <p className="text-lg font-bold">
          <EventIcon />
          Date of gift exchange: {date}
        </p>
        <p className="text-lg font-bold">
          <PersonIcon />
          Name: {patron.name}
        </p>
        <p className="text-lg font-bold">
          <HomeIcon />
          Address: {patron.address}
        </p>
        <p className="text-lg font-bold">
          <PhoneIcon />
          Phone: {patron.phone}
        </p>
        <p className="text-lg font-bold">
          <CurrencyRupeeIcon />
          Budget: {budget}
        </p>
        <div>
          <p className="text-lg font-bold">
            <GroupIcon />
            Members: {budget}
          </p>
          <button className="bg-blue-500 text-white py-2 rounded-lg w-32">
            <AddIcon /> Add member
          </button>
          <button className="bg-blue-500 text-white py-2 rounded-lg w-32">
            Show members
          </button>
        </div>
        <p className="text-lg font-bold">
          <FavoriteIcon />
          Wishlist
        </p>
        <WishlistProductsTable wishlistProducts={wishlistProducts} />
      </main>
      <Navbar />
    </div>
  );
}

export default IndividualList;
