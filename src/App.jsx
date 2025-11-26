import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Products from "./pages/Product";

function App() {
  return (
    <>
    <div className='font-opensans font-medium'>
      <Navbar />
      <Slider/>
      <Products/>
      <Footer/> 
    </div>
    </>
  );
}

export default App;
