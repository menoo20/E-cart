import React, { useState, useRef, useEffect } from 'react'
import Pthumbnails from './Pthumbnails'

const PDproductImgs = () => {
    const [active, setActive] = useState("")
    const[bigImg, setBigImg] = useState("https://i.imgur.com/w2rCsEw.jpg")
    const parent = useRef("");
    
    const handleClick=(e)=>{
       const children = parent.current.children;
       
       for(let i =0; i<children.length;i++){
          children[i].children[0].children[0].classList.remove("active")
       }
       e.target.classList.add("active")
       setBigImg(e.target.children[0].attributes.src.value)
    }



  return (
    <div className="product-images col-lg-5 col-xxl-6 px-lg-5">
        <div className="product-big-image main-one">
          <a className="btn border-0 p-0"  >
            <div className="arrow-next"></div>
               <img className="img-fluid" src={bigImg} alt="main-product-image" ></img>
            <div className="arrow-prev"></div>
          </a>
        </div>
        <div className="product-thumbnails d-none d-lg-block  ">
        <div ref={parent}  className="row  justify-content-between align-items-center parent" onClick={e=>handleClick(e)}>
            <Pthumbnails img="https://i.imgur.com/ZRUetRF.jpg" />
            <Pthumbnails img="https://i.imgur.com/0M7pldG.jpg" />
            <Pthumbnails img="https://i.imgur.com/emb60L5.jpg" />
            <Pthumbnails img="https://i.imgur.com/w2rCsEw.jpg" />
        </div>
        </div>
    </div>
  )
}

export default PDproductImgs