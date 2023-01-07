import styles from "./DiscoverLists.module.css";
import { Sidebar, Navbar, ListsTable } from "../../components/index";

function DiscoverLists() {
  return (
    <div className={styles["main-container"]}>
      <Sidebar />
      <main className=" p-6 flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Discover Lists</h1>
        <ListsTable lists={[]} />
      </main>
      <Navbar />
    </div>
  );
}

export default DiscoverLists;
