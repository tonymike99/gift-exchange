import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, ContactUs, Login, Signup } from "./pages/index";
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
