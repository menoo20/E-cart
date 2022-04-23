import React from "react";
import Home from "./pages/Home";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import PGallery from "./pages/PGallery";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPanel from "./components/admin/AdminPanel";

const App = () => {
  return(
    <React.Fragment>
    {/* page preloader */}
    {/* <div id="preloder">
        <div className="loader"></div>
    </div> */}
    {/* <Announcement/> */}
    {/* <Navbar/> */}
    <AdminPanel/>
    {/* <Home/> */}
    {/* <PGallery/> */}
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <ProductDetails/> */}
   {/*  <Footer/> */}
    </React.Fragment>
  )
};

export default App;