import { useEffect, useState } from "react";
import styles from "./CreatedLists.module.css";
import { Sidebar, Navbar, ListsTable } from "../../components/index";
import axios from "axios";
import { SERVER_URL } from "../../constants/constants";

function CreatedLists() {
  useEffect(() => {
    (async () => {
      const response = await axios.request({
        method: "GET",
        params: {
          type: "created",
        },
        baseURL: SERVER_URL,
        url: "/lists",
        withCredentials: true,
      });
      setCreatedLists(response.data.lists);
    })();
  }, []);

  const [createdLists, setCreatedLists] = useState([]);

  return (
    <div className={styles["main-container"]}>
      <Sidebar />
      <main className=" p-6 flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Created Lists</h1>
        <ListsTable lists={createdLists} />
      </main>
      <Navbar />
    </div>
  );
}

export default CreatedLists;
