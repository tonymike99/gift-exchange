import { Link, useLocation } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

function ListsTable({ lists, deleteList }) {
  const location = useLocation();

  // ----------------------------------------------------------------------------------------------------

  return (
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
        {lists.map((list, index) => (
          <tr key={list._id}>
            <td>{index + 1}.</td>
            <td>
              <Link
                to={`${location.pathname}/${list._id}`}
                className="underline capitalize"
              >
                {list.name}
              </Link>
            </td>
            <td className="capitalize">{list.visibility}</td>
            <td>
              {location.pathname === "/lists/created" && (
                <>
                  <span className="cursor-pointer">
                    <EditIcon color="info" />
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => deleteList(list._id)}
                  >
                    <DeleteIcon color="error" />
                  </span>
                </>
              )}

              {location.pathname === "/lists/joined" && (
                <>
                  <span className="cursor-pointer">
                    <ClearIcon color="error" />
                  </span>
                </>
              )}

              {location.pathname === "/lists/discover" && (
                <>
                  <span className="cursor-pointer">
                    <CheckIcon color="info" />
                  </span>
                  <span className="cursor-pointer">
                    <ClearIcon color="error" />
                  </span>
                </>
              )}

              {location.pathname === "/lists/invitations" && (
                <>
                  <span className="cursor-pointer">
                    <CheckIcon color="info" />
                  </span>
                  <span className="cursor-pointer">
                    <ClearIcon color="error" />
                  </span>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListsTable;
