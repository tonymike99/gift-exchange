import styles from "./Signup.module.css";
import { SERVER_URL } from "../../constants/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const googleIconColored = require("../../assets/img/google-icon-colored.svg");

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main
      className={styles["main-container"] + " p-6 flex flex-col items-center"}
    >
      <div className="w-3/4 lg:w-1/2 xl:w-1/4">
        <h1 className="text-4xl font-bold mb-6 text-center">Sign up</h1>
        <form className="flex flex-col gap-6" action="" method="POST">
          <input
            className="border"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border"
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-4 px-2 rounded-lg"
            onClick={async () => {
              console.log("CLicked");
              await axios.request({
                method: "POST",
                baseURL: SERVER_URL,
                url: `/auth/local/signup`,
                data: {
                  name,
                  email,
                  username,
                  password,
                },
              });
            }}
          >
            Sign up
          </button>
          <p className="text-center">OR</p>
          <a
            href={`${SERVER_URL}/oauth2/google`}
            className="bg-white text-black py-4 px-2 rounded-lg relative border text-center"
          >
            <img
              src={googleIconColored.default}
              alt=""
              className="absolute top-1/2 left-10 -translate-y-1/2 -translate-x-1/2"
            />
            Sign up with Google
          </a>
        </form>
        <p className="mt-4 text-center">
          Have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Signup;
