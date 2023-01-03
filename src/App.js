import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  ContactUs,
  Login,
  Signup,
  Profile,
  PageNotFound,
} from "./pages/index";
import { Header, Footer } from "./components/index";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
