import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages//Login";
import Forgottenpassword from "./pages//Forgottenpassword";

import Signupotp from "./pages/Signupotp";
import Slider from "./components/Slider";
import Products from "./pages/Product";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Forgottenpassword" element={<Forgottenpassword />} />
        <Route path="/Signupotp" element={<Signupotp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>

      <Slider />
      <Products />
      <Footer />
    </>
  );
}

export default App;
