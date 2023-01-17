import styles from "./ContactUs.module.css";
import { SERVER_URL } from "../../constants/constants";
import { toast } from "react-toastify";

function ContactUs() {
  const storedTheme = JSON.parse(JSON.stringify(localStorage.getItem("theme")));
  const toastTheme = storedTheme === "light" ? "dark" : "light";

  return (
    <main
      className={styles["main-container"] + " p-6 flex flex-col items-center"}
    >
      <div className="w-3/4 lg:w-1/2 xl:w-1/4">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <form
          className="flex flex-col gap-6"
          action={SERVER_URL + "/contactus"}
          method="POST"
          onSubmit={() =>
            toast.success("Your response has been recorded!", {
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
            placeholder="Name *"
            required
            maxLength="100"
          />
          <input
            className="border"
            type="email"
            name="email"
            id="email"
            placeholder="Email *"
            required
            maxLength="100"
          />
          <input
            className="border"
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject *"
            required
            maxLength="250"
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
