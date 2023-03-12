import styles from "./CreatedLists.module.css";
import { SERVER_URL } from "../../constants/constants";
import { Sidebar, Navbar, ListsTable } from "../../components/index";
import { useEffect, useState } from "react";
import axios from "axios";

function CreatedLists() {
  const [createdLists, setCreatedLists] = useState([]);

  // ----------------------------------------------------------------------------------------------------

  useEffect(() => {
    getAllCreatedListsData();
    // eslint-disable-next-line
  }, []);

  // ----------------------------------------------------------------------------------------------------

  const getAllCreatedListsData = async () => {
    const response = await axios.request({
      method: "GET",
      baseURL: SERVER_URL,
      url: "/lists",
      withCredentials: true,
      params: {
        type: "created",
      },
    });

    setCreatedLists(response.data.lists);
  };

  const deleteList = async (listId) => {
    await axios.request({
      method: "DELETE",
      baseURL: SERVER_URL,
      url: `/lists/${listId}`,
      withCredentials: true,
    });

    getAllCreatedListsData();
  };

  // ----------------------------------------------------------------------------------------------------

  return (
    <div className={styles["main-container"]}>
      <Sidebar />
      <main className=" p-6 flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Created Lists</h1>
        <ListsTable lists={createdLists} deleteList={deleteList} />
      </main>
      <Navbar />
    </div>
  );
}

export default CreatedLists;
