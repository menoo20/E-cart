import React, { useEffect, useState } from "react";
import {Route, Routes} from "react-router-dom"
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
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [display, setDisplay] = useState("block")
  
  // this function is concerned with the page loader
  useEffect(()=>{
    function  change(){setDisplay("none")}
    
    setTimeout(change,1000)
    
    return ()=>{
      clearTimeout(change);
    }
  },[display])

return(
    <React.Fragment>
      {/* // this function is concerned with the page loader */}
    <div id="preloder" style={{display: display}}>
        <div className="loader"></div>
    </div>
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      theme='dark'
      draggable
      pauseOnHover>
    </ToastContainer>
    <Routes>
 
      <Route  path="/" exact element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/products/gallery" element={<PGallery/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </React.Fragment>
  )
};




export default App;