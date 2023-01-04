import { Link } from "react-router-dom";

const mysteryBox = require("../../assets/img/mystery-box.svg");

function Home() {
  return (
    <main className="p-6 flex flex-col justify-center gap-4 md:flex-row md:justify-between md:items-center">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-5xl font-bold text-center">
          Looking to gift someone?
        </h1>
        <p className="w-4/5 text-center">
          People are always confused on what to gift on special occasions like
          birthdays, weddings, anniversaries, etc. We help you solve this.
        </p>
        <Link to="/login">
          <button className="bg-blue-500 text-white py-2 rounded-lg w-40 md:w-80">
            Get started
          </button>
        </Link>
      </div>
      <div className="md:w-3/4 xl:w-1/2 2xl:w-1/4">
        <img src={mysteryBox.default} alt="" />
      </div>
    </main>
  );
}

export default Home;
