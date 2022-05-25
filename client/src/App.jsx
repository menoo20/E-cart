import React, { useEffect, useState } from "react";
import {Navigate, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import PGallery from "./pages/PGallery";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style/style.scss"
import Cart from "./pages/Cart";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux";
import  {getFeaturedCat, getCategories} from "./Redux/actions";


const App = (props) => {
  const [display, setDisplay] = useState("block")

  
  useEffect(()=>{
    function  change(){setDisplay("none")}
    
    setTimeout(change,1000)
    
    return ()=>{
      clearTimeout(change);
    }
  },[display])

  //get featured products
  useEffect(async()=>{
    console.log("i tried to fetch categories")
    await props.getFeaturedCat();
    await props.getCategories();
    // await getFeaturedProducts(true)
  },[])

  const user = props.user

return(
    <React.Fragment>
    {/* // this function is concerned with the page loader */}
    <div id="preloder" style={{display: display}}>
        <div className="loader"></div>
    </div>
    {/* here is the toast container for react toastify */}
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      theme='dark'
      draggable
      pauseOnHover>
    </ToastContainer>

    {/* starting the routes */}
    <Routes>
      <Route  path="/" exact element={<Home/>} />
      <Route path="/login" element={user? <Navigate to={"/"}/> : <Login/>}/>
      <Route path="/register"  element={user ? <Navigate to={'/'}/> : <Register/>}/>
      <Route path="/products/gallery" element={<PGallery/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>

    </React.Fragment>
  )
};


const mapStateToProps = ({user})=>{
   return{
     user
     
   }
}


export default connect(mapStateToProps, {getFeaturedCat, getCategories})(App); ;