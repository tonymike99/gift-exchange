import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, ContactUs } from "./pages/index";
import { Header, Footer, Sidebar, Navbar } from "./components/index";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
