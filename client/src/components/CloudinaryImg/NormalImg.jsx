import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

// Import required actions.
import {thumbnail, fill} from "@cloudinary/url-gen/actions/resize";

// Import required qualifiers.
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

const placeholderImg = 'https://res.cloudinary.com/e-cart2022/image/upload/v1651376145/static%20files/user_placeholder.png'



const NormalImg = ({normalImg}) => {
  // Create and configure my Cloudinary instance.
  console.log(normalImg)

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'E-cart2022'
    }
  }); 

  // Use the image with public ID, 'front_face'.
  const myImage = normalImg? cld.image(normalImg):"";

    // Apply the transformation.
    myImage?
    (
        myImage
    .resize(fill())
    // .width(40).height(40).gravity(focusOn(FocusOn.face())))
    )
    :
    ""
   
  const Img = ()=>{
    if(myImage == 0) {
    //   return <img src={placeholderImg} alt="placeholder image"  width={40}/>
    }else{
        console.log(myImage)
      return <AdvancedImage cldImg={myImage} className="img-fluid" alt="NormalImg" /> 
    }
  }

  return (
      <Img/>
  )
}

export default NormalImg