import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home/Home";
import Academics from "./pages/Academics/Academics";
import Admissions from "./pages/Admissions/Admissions";
import ContactUs from "./pages/ContactUs/ContactUs";
import OurTeam from "./pages/Ourteam/OurTeam";
import Facilities from "./pages/Facilities/Facilities";

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
      </Routes>
    </Router>
  );
};

export default App;
