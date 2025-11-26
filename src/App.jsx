import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup"
import Login from "./pages//Login"
import Forgottenpassword from "./pages//Forgottenpassword"

import Signupotp from "./pages/Signupotp"
import Slider from "./components/Slider";
import Products from "./pages/Product";
function App() {
  return (
    <>
    <Signup/>
    <Login/>
    <Forgottenpassword/>
    <Signupotp/>
      <Navbar/>
      <Slider/>
      <Products/>
      <Footer/>
    </>
  );
}

export default App;
