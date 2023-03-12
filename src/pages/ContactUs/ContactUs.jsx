import styles from "./ContactUs.module.css";
import { SERVER_URL } from "../../constants/constants";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function ContactUs() {
  const storedTheme = JSON.parse(JSON.stringify(localStorage.getItem("theme")));
  const toastTheme = storedTheme === "light" ? "dark" : "light";

  // ----------------------------------------------------------------------------------------------------

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  // ----------------------------------------------------------------------------------------------------

  const registerContactUsRequest = async () => {
    await axios.request({
      method: "POST",
      baseURL: SERVER_URL,
      url: `/contactus`,
      data: {
        name,
        email,
        subject,
        description,
      },
      withCredentials: true,
    });
  };

  // ----------------------------------------------------------------------------------------------------

  const handleContactUsFormOnSubmit = (e) => {
    e.preventDefault();
    registerContactUsRequest();
    setName("");
    setEmail("");
    setSubject("");
    setDescription("");
    toast.success("Your response has been recorded!", {
      theme: toastTheme,
      toastId: "1",
    });
  };

  // ----------------------------------------------------------------------------------------------------

  return (
    <main
      className={styles["main-container"] + " p-6 flex flex-col items-center"}
    >
      <div className="w-3/4 lg:w-1/2 xl:w-1/4">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => handleContactUsFormOnSubmit(e)}
        >
          <input
            className="border"
            type="text"
            name="name"
            id="name"
            placeholder="Name *"
            required
            maxLength="100"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border"
            type="email"
            name="email"
            id="email"
            placeholder="Email *"
            required
            maxLength="100"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border"
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject *"
            required
            maxLength="250"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            className="border"
            name="description"
            id="description"
            cols="30"
            rows="8"
            placeholder="Description *"
            required
            maxLength="750"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-4 px-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default ContactUs;
