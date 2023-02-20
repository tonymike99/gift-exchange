import { SERVER_URL } from "../../constants/constants";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateNewListForm({ closeModal }) {
  const storedTheme = JSON.parse(JSON.stringify(localStorage.getItem("theme")));
  const toastTheme = storedTheme === "light" ? "dark" : "light";

  const [visibility, setVisibility] = useState("private");
  const [name, setName] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");

  const navigate = useNavigate();

  const createList = async () => {
    await axios.request({
      method: "POST",
      baseURL: SERVER_URL,
      url: `/lists`,
      data: {
        visibility,
        name,
        endDate,
        budget,
      },
      withCredentials: true,
    });

    // Hack
    navigate("/login");
  };

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        createList();
        closeModal();
        setVisibility("");
        setName("");
        setEndDate("");
        setBudget("");
        toast.success("New list has been created!", {
          theme: toastTheme,
          toastId: "1",
        });
      }}
    >
      <select
        name="visibility"
        id="visibility"
        onChange={(e) => setVisibility(e.target.value)}
      >
        <option value="private">Private</option>
        <option value="shared">Shared</option>
        <option value="public">Public</option>
      </select>
      <input
        className="border"
        type="text"
        name="name"
        id="name"
        placeholder="Name *"
        required
        maxLength="100"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border"
        type="text"
        name="endDate"
        id="endDate"
        placeholder="Date of gift exchange"
        min={new Date().toISOString().split("T")[0]}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <input
        className="border"
        type="number"
        name="budget"
        id="budget"
        placeholder="Budget"
        onChange={(e) => setBudget(e.target.value)}
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
