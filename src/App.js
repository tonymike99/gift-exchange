import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  ContactUs,
  Login,
  Signup,
  Profile,
  PersonalLists,
  PublicLists,
  PageNotFound,
  SharedWithMeLists,
} from "./pages/index";
import { Header, Footer } from "./components/index";
import { ToastContainer } from "react-toastify";

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
        <Route path="/lists/personal" element={<PersonalLists />} />
        <Route path="/lists/public" element={<PublicLists />} />
        <Route path="/lists/shared-with-me" element={<SharedWithMeLists />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnHover={false}
        rtl={false}
        pauseOnFocusLoss
        closeOnClick
        draggable
      />
    </>
  );
}

export default App;
