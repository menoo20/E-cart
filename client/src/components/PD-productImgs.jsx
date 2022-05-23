import React, { useState, useRef, useEffect } from 'react'
import Pthumbnails from './Pthumbnails'
import { connect } from 'react-redux'
import NormalImg from './CloudinaryImg/NormalImg'
import Normal2 from './CloudinaryImg/Normal2'


const PDproductImgs = ({product, images}) => {
    const [active, setActive] = useState("")
    const[bigImg, setBigImg] = useState(images[0])
    const parent = useRef("");
    
    const handleClick=(e)=>{
       const children = parent.current.children;
       for(let i =0; i<children.length;i++){
          children[i].children[0].children[0].classList.remove("active")
       }
       e.target.classList.add("active")
       const link = e.target.children[0].attributes.src.value;
       console.log(link)
       const link1 = link.split("/v1/");
       const link2 = link1[1].split("?");
       const cloudinaryImg = link2[0];
       setBigImg(cloudinaryImg)
      
    }


    const handleBigImage = (image)=>{
      console.log(image)
      setBigImg(image)
    }


  return (
    <div className="product-images col-8 col-lg-5 col-xxl-6 px-lg-5">
        <div className="product-big-image main-one">
          <a className="btn border-0 p-0"  >
            {/* <div className="arrow-next"></div> */}
               {/* <img className="img-fluid" src={bigImg} alt="main-product-image" ></img> */}
               <Normal2 normalImg={bigImg}/>
            {/* <div className="arrow-prev"></div> */}
          </a>
        </div>
        <div className="product-thumbnails d-none d-lg-block  ">
          <div ref={parent}  className="row  justify-content-center align-items-center parent" onClick={e=>handleClick(e)}>
          {product?
          (images.map(image=>{
            return (
              <Pthumbnails key={image} img={image} col={12/images.length} />
            )
          })

          )
          :
          <></>
          }
          </div>
        </div>
    </div>
  )
}

const mapStateToProps = ({products}, {id})=>{
  const product =  products.products.length > 1? 
  products.products.filter(product => product._id == id):
  products.featuredProducts.filter(product => product._id == id);
  const images = product.length? product[0].images  : "";
  return{
    product: product? product[0] : "",
    images: images? images: ""
  }
}

export default connect(mapStateToProps)(PDproductImgs)
