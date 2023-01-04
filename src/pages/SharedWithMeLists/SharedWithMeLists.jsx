import styles from "./SharedWithMeLists.module.css";
import { Sidebar, Navbar, ListTable } from "../../components/index";
import PeopleIcon from "@mui/icons-material/People";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";

function SharedWithMeLists() {
  return (
    <div className={styles["main-container"]}>
      <Sidebar />
      <main className=" p-6 flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Shared with me Lists</h1>

        <h2 className="text-2xl font-bold">
          <PeopleIcon /> Joined
        </h2>
        <ListTable />

        <h2 className="text-2xl font-bold">
          <MarkEmailUnreadIcon /> Invitations
        </h2>
        <ListTable />
      </main>
      <Navbar />
    </div>
  );
}

export default SharedWithMeLists;
