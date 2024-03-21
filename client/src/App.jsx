import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home/Home";
import Academics from "./pages/Academics/Academics";
import Admissions from "./pages/Admissions/Admissions";
import ContactUs from "./pages/ContactUs/ContactUs";
import OurTeam from "./pages/Ourteam/OurTeam";
import Facilities from "./pages/Facilities/Facilities";
import Login from "./pages/AdminPanel/Login";
import Register from "./pages/AdminPanel/Register";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import ProtectedRoute from "./components/layouts/ProtectedRoute";
import TransportPage from "./pages/Facilities/TransportPage";
import ComputerPage from "./pages/Facilities/ComputerPage";
import Sports from "./pages/Facilities/Sports";
import Houses from "./pages/Facilities/Houses";

const App = () => {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/admin-login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />} >
        <Route path="/admin-panel" element={<AdminPanel/>}/>
        </Route>
        <Route path="/TransportPage" element={<TransportPage />} />
        <Route path="/ComputerPage" element={<ComputerPage />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Houses" element={<Houses />} />
      </Routes>
    </Router>
  );
};

export default App;
