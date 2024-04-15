import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  HomeLayout,
  Landing,
  Login,
  Logout,
  Register,
} from "./pages";
import Addiction from "./pages/addiction";
import Anxiety from "./pages/anxiety";
import Depression from "./pages/Depression";
import "../src/styles/app.css";
import { ToastContainer, toast } from "react-toastify";
import ScrollToTop from "./Components/TopScroll";
import LoveFriendship from "./pages/Love&Friendship";
import Meditation from "./pages/Meditation.jsx";
import Pets from "./pages/Pets.jsx";
import Stress from "./pages/Stress.jsx";
import Suicide from "./pages/Suicide.jsx";
import PTSDAndTrauma from "./pages/PTSDAndTrauma.jsx";
import DocInfo from "./pages/DocInfo.jsx";
import AppoinmentForm from "../src/pages/AppoinmentForm.jsx";
import Profile from "../src/pages/Profile.jsx";
import DocHomePage from "../src/pages/DocHomePage.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes className="router">
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="logout" element={<Logout />} />
          <Route path="addiction" element={<Addiction />} />
          <Route path="anxiety" element={<Anxiety />} />
          <Route path="depression" element={<Depression />} />
          <Route path="love-and-friendship" element={<LoveFriendship />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/stress" element={<Stress />} />
          <Route path="/suicide" element={<Suicide />} />
          <Route path="/ptsd-and-trauma" element={<PTSDAndTrauma />} />
          <Route path="/docInfo" element={<DocInfo />} />
          <Route path="/doctorHomepage/:name" element={<DocHomePage />} />
          <Route
            path="/bookppoinment/:id/:userId"
            element={<AppoinmentForm />}
          />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;
