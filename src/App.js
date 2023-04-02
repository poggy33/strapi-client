import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import Checkout from "./pages/checkout/Checkout";
import Confirmation from "./pages/checkout/Confirmation";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="checkout/success" element={<Confirmation/>}/>
        </Routes>
        <Cart/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
