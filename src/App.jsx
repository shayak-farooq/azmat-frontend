import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Otp from "./components/Otp";
import Signup from "./components/Signup";
import Slider from "./components/Slider";
import Products from "./pages/Product";
function App() {
  return (
    <>
      <Signup/>
      <Otp/>
      <Login/>
      <Navbar/>
      <Slider/>
      <Products/>
      <Footer/>
    </>
  );
}

export default App;
