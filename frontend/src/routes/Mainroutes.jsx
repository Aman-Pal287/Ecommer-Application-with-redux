import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Settings from "../pages/Settings";
import User from "../pages/User";
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};

export default Mainroutes;
