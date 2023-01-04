import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";

function ListTable() {
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
            <span className="cursor-pointer">
              <CheckIcon color="info" />
            </span>
            <span className="cursor-pointer">
              <ClearIcon color="error" />
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ListTable;
