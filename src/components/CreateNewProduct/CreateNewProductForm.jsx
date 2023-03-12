import { SERVER_URL } from "../../constants/constants";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function CreateNewProductForm({ getListData, closeModal }) {
  const storedTheme = JSON.parse(JSON.stringify(localStorage.getItem("theme")));
  const toastTheme = storedTheme === "light" ? "dark" : "light";

  // ----------------------------------------------------------------------------------------------------

  const [link, setLink] = useState("");

  // ----------------------------------------------------------------------------------------------------

  const location = useLocation();
  const listId = location.pathname.split("/")[3];

  // ----------------------------------------------------------------------------------------------------

  const createProductInWishlist = async () => {
    await axios.request({
      method: "POST",
      baseURL: SERVER_URL,
      url: `/lists/${listId}/wishlist`,
      data: {
        link,
      },
      withCredentials: true,
    });

    getListData();
  };

  // ----------------------------------------------------------------------------------------------------

  const handleCreateProductFormOnSubmit = (e) => {
    e.preventDefault();
    createProductInWishlist();
    closeModal();
    setLink("");
    toast.success("New product has been added!", {
      theme: toastTheme,
      toastId: "1",
    });
  };

  // ----------------------------------------------------------------------------------------------------

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={handleCreateProductFormOnSubmit}
    >
      <input
        className="border"
        type="text"
        name="link"
        id="link"
        placeholder="Amazon Product Link *"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required
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
