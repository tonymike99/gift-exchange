import styles from "./PublicLists.module.css";
import { Sidebar, Navbar, ListsTable } from "../../components/index";
import PeopleIcon from "@mui/icons-material/People";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

function PublicLists() {
  return (
    <div className={styles["main-container"]}>
      <Sidebar />
      <main className=" p-6 flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Public Lists</h1>

        <h2 className="text-2xl font-bold">
          <PeopleIcon /> Joined
        </h2>
        <ListsTable />

        <h2 className="text-2xl font-bold">
          <TravelExploreIcon /> Discover from friends
        </h2>
        <ListsTable />
      </main>
      <Navbar />
    </div>
  );
}

export default PublicLists;
