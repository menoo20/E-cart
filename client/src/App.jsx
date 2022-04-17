import React from "react";
import Home from "./pages/Home";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import PGallery from "./pages/PGallery";

const App = () => {
  return(
    <React.Fragment>
    {/* page preloader */}
    <div id="preloder">
        <div className="loader"></div>
    </div>
    <Announcement/>
    <Navbar/>
    {/* <Home/> */}
    <PGallery/>
    {/* <ProductDetails/> */}
    <Footer/>
    </React.Fragment>
  )
};

export default App;