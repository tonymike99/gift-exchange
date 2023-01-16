import { SERVER_URL } from "../../constants/constants";
import { toast } from "react-toastify";

function CreateNewListForm() {
  const storedTheme = JSON.parse(JSON.stringify(localStorage.getItem("theme")));
  const toastTheme = storedTheme === "light" ? "dark" : "light";

  return (
    <form
      className="flex flex-col gap-6"
      action={SERVER_URL + "/lists"}
      method="POST"
      onSubmit={() =>
        toast.success("New list has been created!", {
          theme: toastTheme,
          toastId: "1",
        })
      }
    >
      <select name="visibility" id="visibility">
        <option value="private">Private</option>
        <option value="shared">Shared</option>
        <option value="public">Public</option>
      </select>
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
        type="date"
        name="endDate"
        id="endDate"
        placeholder="Date of gift exchange"
      />
      <input
        className="border"
        type="number"
        name="budget"
        id="budget"
        placeholder="Budget"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-1 rounded-lg"
      >
        Create List
      </button>
    </form>
  );
}

export default CreateNewListForm;
