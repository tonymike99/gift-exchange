import { SERVER_URL } from "../../constants/constants";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function InviteFriendForm({ getListData, closeModal }) {
  const storedTheme = JSON.parse(JSON.stringify(localStorage.getItem("theme")));
  const toastTheme = storedTheme === "light" ? "dark" : "light";

  // ----------------------------------------------------------------------------------------------------

  const [email, setEmail] = useState("");

  // ----------------------------------------------------------------------------------------------------

  const location = useLocation();
  const listId = location.pathname.split("/")[3];

  // ----------------------------------------------------------------------------------------------------

  const handleInviteFriendFormOnSubmit = (e) => {
    e.preventDefault();
    inviteFriend();
    closeModal();
    setEmail("");
    toast.success("Your friend has been invited!", {
      theme: toastTheme,
      toastId: "1",
    });
  };

  // ----------------------------------------------------------------------------------------------------

  const inviteFriend = async () => {
    await axios.request({
      method: "POST",
      baseURL: SERVER_URL,
      url: `/lists/${listId}/invite`,
      data: {
        email,
      },
      withCredentials: true,
    });

    getListData();
  };

  // ----------------------------------------------------------------------------------------------------

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(e) => handleInviteFriendFormOnSubmit(e)}
    >
      <input
        className="border"
        type="email"
        name="email"
        id="email"
        placeholder="Enter your friend's email *"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-1 rounded-lg"
      >
        Invite friend
      </button>
    </form>
  );
}

export default InviteFriendForm;
