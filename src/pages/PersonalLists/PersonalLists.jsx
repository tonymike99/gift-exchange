import styles from "./PersonalLists.module.css";
import { Sidebar, Navbar } from "../../components/index";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

function PersonalLists() {
  return (
    <div className={styles["main-container"]}>
      <Sidebar />
      <main className=" p-6 flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Personal Lists</h1>

        <button className="bg-blue-500 text-white py-2 rounded-lg w-32">
          <AddIcon /> Create list
        </button>

        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Visibility</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>
                <Link to={`/`} className="underline">
                  Birthday
                </Link>
              </td>
              <td>Private</td>
              <td>
                <span className="cursor-pointer">
                  <EditIcon color="info" />
                </span>
                <span className="cursor-pointer">
                  <DeleteIcon color="error" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
      <Navbar />
    </div>
  );
}

export default PersonalLists;
