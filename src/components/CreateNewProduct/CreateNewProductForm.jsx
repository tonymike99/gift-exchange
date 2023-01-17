import { SERVER_URL } from "../../constants/constants";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

function CreateNewProductForm() {
  const storedTheme = JSON.parse(JSON.stringify(localStorage.getItem("theme")));
  const toastTheme = storedTheme === "light" ? "dark" : "light";

  const location = useLocation();
  const listId = location.pathname.split("/")[3];

  return (
    <form
      className="flex flex-col gap-6"
      action={`${SERVER_URL}/lists/${listId}/wishlist`}
      method="POST"
      onSubmit={() =>
        toast.success("New product has been added!", {
          theme: toastTheme,
          toastId: "1",
        })
      }
    >
      <input
        className="border"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        required
        maxLength="100"
      />
      <input
        className="border"
        type="number"
        name="price"
        id="price"
        placeholder="Price"
      />
      <input
        className="border"
        type="text"
        name="link"
        id="link"
        placeholder="Product Link"
        required
      />
      <input
        className="border"
        type="text"
        name="notes"
        id="notes"
        placeholder="Notes"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-1 rounded-lg"
      >
        Add Product
      </button>
    </form>
  );
}

export default CreateNewProductForm;
