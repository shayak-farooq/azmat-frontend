import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from './pages/Home'
import Products from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Forgottenpassword from "./pages/Forgottenpassword";
import Signupotp from "./pages/Signupotp";
import Profile from "./pages/Profile";

import Cart from "./pages/Cart";
import QuickView from "./components/Cards/QuickView";

import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminProducts from "./admin/pages/AdminProducts";
import AdminOrders from "./admin/pages/AdminOrders";
import AddProducts from "./admin/pages/AddProducts";

function App() {
  return (
    <Routes>
      {/* USER SIDE ROUTES */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verifysignup" element={<Signupotp/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgottenpassword" element={<Forgottenpassword />} />
        <Route path="/signupotp" element={<Signupotp />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/quickview" element={<QuickView />} />
      </Route>

      {/* ADMIN SIDE ROUTES (NO Navbar & Footer) */}
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/addproduct" element={<AddProducts />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
      </Route>
    </Routes>
  );
}

export default App;
