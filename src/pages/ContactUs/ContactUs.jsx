function ContactUs() {
  return (
    <main className="p-6 flex flex-col items-center">
      <div className="w-3/4 xl:w-1/2">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <form className="flex flex-col gap-6" action="" method="POST">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Description"
            required
          ></textarea>
        </form>
      </div>
    </main>
  );
}

export default ContactUs;
