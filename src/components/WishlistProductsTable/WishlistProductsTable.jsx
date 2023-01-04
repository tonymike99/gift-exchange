import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import { Link } from "react-router-dom";

function WishlistProductsTable({ wishlistProducts }) {
  return (
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Id</th>
          <th>Picture</th>
          <th>Name</th>
          <th>Price</th>
          <th>Link</th>
          <th>Notes</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {wishlistProducts.map((product, index) => (
          <tr>
            <td>{index}</td>
            <td>{product.id}</td>
            <td>{product.picture}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              <Link to={product.link} className="underline">
                {product.link}
              </Link>
            </td>
            <td>{product.notes}</td>
            <td>
              <span className="cursor-pointer">
                <EditIcon color="info" />
              </span>
              <span className="cursor-pointer">
                <DeleteIcon color="error" />
              </span>
              <span className="cursor-pointer">
                <TaskAltIcon color="info" />
              </span>
              <span className="cursor-pointer">
                <RemoveDoneIcon color="error" />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WishlistProductsTable;
