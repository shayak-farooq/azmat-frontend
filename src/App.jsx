import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages//Login";
import Forgottenpassword from "./pages//Forgottenpassword";

import Signupotp from "./pages/Signupotp";
import Slider from "./components/Slider";
import Products from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgottenpassword" element={<Forgottenpassword />} />
        <Route path="/signupotp" element={<Signupotp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* <Slider />
      <Products />
      <Footer /> */}
    </>
  );
}

export default App;
