import styles from "./ContactUs.module.css";

function ContactUs() {
  return (
    <main
      className={styles["main-container"] + " p-6 flex flex-col items-center"}
    >
      <div className="w-3/4 lg:w-1/2 xl:w-1/4">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <form className="flex flex-col gap-6" action="" method="POST">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="border"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="border"
          />
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Description"
            required
            className="border"
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
