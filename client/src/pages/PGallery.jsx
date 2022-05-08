import React, {useState} from 'react'
import BreadCrumb from '../components/BreadCrumb'
import AllFood from "../images/allfood.jpg"
import ProductsList from "../components/ProductsList"
import PriceRangeSlider from '../components/PriceRangeSlider'
import ProductSorter from '../components/ProductSorter'
import SearchByCat from '../components/SearchByCat'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'

const PGallery = () => {
  const [cat, setCat] = useState("All")

  return (
    <React.Fragment>
    <Announcement/>
    <Navbar/>
    <BreadCrumb img={AllFood} cat={cat} catDesc={"Shop Through Millons Of Our Finest Products"}/>
    <div className='row justify-content-around align-items-center Categories-Filter px-4 pt-5 pb-3 m-0' >
        <div className="col-md-4 pt-3">
         <SearchByCat/>
        </div>
        <div className="col-md-4 SearchByCat">
            <PriceRangeSlider/>
        </div>
        <div className="col-md-4 Sort mt-3 mt-md-0">
            <ProductSorter/>
        </div>  
    </div>
    <div className="container">
      <div className="row justify-content-around align-items-center">
        
          <ProductsList name={"Our Products"}/>
      </div>
    </div>
    <Footer/>
    </React.Fragment>
  )
}

export default PGallery