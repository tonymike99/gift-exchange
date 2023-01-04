import styles from "./PersonalLists.module.css";
import { Sidebar, Navbar, ListTable } from "../../components/index";
import AddIcon from "@mui/icons-material/Add";

function PersonalLists() {
  return (
    <div className={styles["main-container"]}>
      <Sidebar />
      <main className=" p-6 flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Personal Lists</h1>

        <button className="bg-blue-500 text-white py-2 rounded-lg w-32">
          <AddIcon /> Create list
        </button>

        <ListTable />
      </main>
      <Navbar />
    </div>
  );
}

export default PersonalLists;
