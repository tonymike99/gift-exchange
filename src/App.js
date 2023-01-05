import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  ContactUs,
  Login,
  Signup,
  Profile,
  Lists,
  PersonalLists,
  PublicLists,
  PageNotFound,
  SharedWithMeLists,
} from "./pages/index";
import { Header, Footer } from "./components/index";
import { ToastContainer, Slide } from "react-toastify";
import { PrivateRoute, RestrictedRoute } from "./auth/index";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/*" element={<PageNotFound />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/lists" element={<Lists />} />

          <Route path="/lists/personal" element={<PersonalLists />} />
          <Route path="/lists/public" element={<PublicLists />} />
          <Route path="/lists/shared-with-me" element={<SharedWithMeLists />} />
        </Route>

        {/* Restricted Routes */}
        <Route element={<RestrictedRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        rtl={false}
        closeOnClick
        draggable
        transition={Slide}
      />
    </>
  );
}

export default App;
