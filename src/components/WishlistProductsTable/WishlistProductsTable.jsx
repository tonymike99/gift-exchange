import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import LaunchIcon from "@mui/icons-material/Launch";

function WishlistProductsTable({ wishlist }) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Link</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Price</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {wishlist?.map((product, index) => (
            <tr
              key={product._id}
              className={product.isDone ? "line-through" : ""}
            >
              <td>{index}</td>
              <td>
                <a href={product.link} target="_blank" rel="noreferrer">
                  <LaunchIcon />
                </a>
              </td>
              <td>
                <img className="w-20" src={product.picture} alt="" />
              </td>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td>
                <span className="cursor-pointer">
                  <EditIcon color="info" />
                </span>
                <span className="cursor-pointer">
                  <DeleteIcon color="error" />
                </span>
                {product.isDone ? (
                  <span className="cursor-pointer">
                    <RemoveDoneIcon color="error" />
                  </span>
                ) : (
                  <span className="cursor-pointer">
                    <DoneAllIcon color="info" />
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WishlistProductsTable;
