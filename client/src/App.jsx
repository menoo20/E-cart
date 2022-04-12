import React from "react";
import Home from "./pages/Home";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";

const App = () => {
  return(
    <React.Fragment>
    {/* page preloader */}
    <div id="preloder">
        <div class="loader"></div>
    </div>
    <Announcement/>
    <Navbar/>
    <Home/>
    </React.Fragment>
  )
};

export default App;