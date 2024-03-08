import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  HomeLayout,
  Landing,
  Login,
  Logout,
  Register,
} from "./pages";
import "../src/styles/app.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <Router>
      <Routes className="router">
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;
