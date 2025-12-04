import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Products from "./pages/Product";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages//Login";
import Forgottenpassword from "./pages//Forgottenpassword";
import Signupotp from "./pages/Signupotp";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import QuickView from "./components/Cards/QuickView";
import Profile from "./pages/Profile";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Forgottenpassword" element={<Forgottenpassword />} />
        <Route path="/Signupotp" element={<Signupotp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/quickview" element={<QuickView />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
