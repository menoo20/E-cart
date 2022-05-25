import React, { useEffect, useState } from 'react'
import Announcement from '../components/Announcement'
import ProductsList from '../components/ProductsList'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import ShopNow from '../components/ShopNow'
import CategoriesPromoGrid from '../components/CategoriesPromoGrid'
import AdsBanner from '../components/AdsBanner'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import GoToTop from '../customHooks/GoToTop'
import { getFeaturedProducts, getProducts } from '../Redux/actions/productsAction'
import { getFeaturedCat, chooseCat } from '../Redux/actions'


const Home = ({featuredCategories, getFeaturedProducts , getProducts, products, chooseCat, category, sort, price, page, limit}) => {
     const [rerender, rerenderme] = useState(true)
  useEffect(async()=>{
    "did you start me ?"
    await chooseCat("")
    await getProducts(category, sort.query, price, page, 8, "", true)
 },)

  useEffect(async()=>{
   rerenderme(!rerender)

  //  await getFeaturedProducts(true)
   console.log("i rerenderd home");
  }, [])

  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <div className="container-lg p-0 overflow-hidden">
        <ShopNow/>
        {
          featuredCategories?
          <CategoriesPromoGrid featuredCategories={featuredCategories? featuredCategories : ""}/>
          :
          ""
        }
        
        {products?
        <ProductsList products={products? products : ""} name={"Featured Products"}/>
        :
        ""
        }
        <AdsBanner/>
      </div>
      <GoToTop/>
      <Footer/>
    </div>
  )
}

const mapStateToProps = ({user, products, categories})=>{
   return{
     featuredCategories: categories.featuredCategories.length? categories.featuredCategories : "",
     user,
     products: products.products? products.products : "",
     category: categories.category,
     sort: categories.sort,
     price: categories.price,
     page: categories.page,
     limit: categories.limit
   }
}

export default connect(mapStateToProps, {getFeaturedCat, getProducts, getFeaturedProducts, chooseCat})(Home)