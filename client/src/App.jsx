import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import PGallery from "./pages/PGallery";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style/style.scss"
import Cart from "./pages/Cart";

const App = () => {
  const [display, setDisplay] = useState("block")
  
  useEffect(()=>{
    function change(){setDisplay("none")}
    
    setTimeout(change,1000)

    return ()=>{
      clearTimeout(change);
    }
  },[display])

  
return(
    <React.Fragment>
    {/* page preloader */}
    <div id="preloder" style={{display: display}}>
        <div className="loader"></div>
    </div>
    <Announcement/>
    <Navbar/>
    {/* <Home/> */}
    {/* <PGallery/> */}
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <ProductDetails/> */}
    <Cart/>
    <Footer/>
    </React.Fragment>
  )
};

export default App;