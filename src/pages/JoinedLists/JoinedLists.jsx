import styles from "./JoinedLists.module.css";
import { Sidebar, Navbar, ListsTable } from "../../components/index";

function JoinedLists() {
  return (
    <div className={styles["main-container"]}>
      <Sidebar />
      <main className=" p-6 flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Joined Lists</h1>
        <ListsTable lists={[]} />
      </main>
      <Navbar />
    </div>
  );
}

export default JoinedLists;
