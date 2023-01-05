import styles from "./Lists.module.css";
import { Sidebar, Navbar } from "../../components/index";

function Lists() {
  return (
    <div className={styles["main-container"]}>
      <Sidebar />
      <main className=" p-6 flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Lists</h1>
      </main>
      <Navbar />
    </div>
  );
}

export default Lists;
