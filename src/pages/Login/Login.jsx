import { Link } from "react-router-dom";
import styles from "./Login.module.css";
const googleIconColored = require("../../assets/img/google-icon-colored.svg");

function Login() {
  return (
    <main
      className={styles["main-container"] + " p-6 flex flex-col items-center"}
    >
      <div className="w-3/4 lg:w-1/2 xl:w-1/4">
        <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
        <form className="flex flex-col gap-6" action="" method="POST">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            className="border"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
            className="border"
          />
          <button className="bg-blue-500 text-white py-4 px-2 rounded-lg">
            Sign in
          </button>
          <a
            href="http://localhost:3001/oauth2/google"
            className="bg-white text-black py-4 px-2 rounded-lg relative border text-center"
          >
            <img
              src={googleIconColored.default}
              alt=""
              className="absolute top-1/2 left-10 -translate-y-1/2 -translate-x-1/2"
            />
            Sign in with Google
          </a>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
