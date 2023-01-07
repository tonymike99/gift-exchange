import styles from "./CreatedLists.module.css";
import { Sidebar, Navbar, ListsTable } from "../../components/index";

function CreatedLists() {
  return (
    <div className={styles["main-container"]}>
      <Sidebar />
      <main className=" p-6 flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Created Lists</h1>
        <ListsTable list={[]} />
      </main>
      <Navbar />
    </div>
  );
}

export default CreatedLists;
