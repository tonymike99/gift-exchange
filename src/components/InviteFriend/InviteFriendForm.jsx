import { SERVER_URL } from "../../constants/constants";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

function InviteFriendForm() {
  const storedTheme = JSON.parse(JSON.stringify(localStorage.getItem("theme")));
  const toastTheme = storedTheme === "light" ? "dark" : "light";

  const location = useLocation();
  const listId = location.pathname.split("/")[3];

  return (
    <form
      className="flex flex-col gap-6"
      action={`${SERVER_URL}/lists/${listId}/invite`}
      method="POST"
      onSubmit={() =>
        toast.success("Your friend has been invited!", {
          theme: toastTheme,
          toastId: "1",
        })
      }
    >
      <input
        className="border"
        type="email"
        name="email"
        id="email"
        placeholder="Enter your friend's email"
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
