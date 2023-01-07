import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  ContactUs,
  Login,
  Signup,
  Profile,
  Lists,
  CreatedLists,
  JoinedLists,
  DiscoverLists,
  Invitations,
  PageNotFound,
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
          <Route path="/lists/created" element={<CreatedLists />} />
          <Route path="/lists/joined" element={<JoinedLists />} />
          <Route path="/lists/discover" element={<DiscoverLists />} />
          <Route path="/lists/invitations" element={<Invitations />} />
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
