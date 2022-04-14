import React from 'react'
import Announcement from '../components/Announcement'
import ProductsList from '../components/ProductsList'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Slider/>
      <ProductsList/>
    </div>
  )
}

export default Home