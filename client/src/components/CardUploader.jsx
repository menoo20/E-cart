import React, {useState} from 'react';
import Register from '../pages/Register';
import "../style/cardUploader.scss"

const CardProfile = ({register})=> {
  const [file, setFile] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState("https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1650397281~hmac=b9b3dcf9024cb96cf5e34de774ce1d00")
  // 

 function photoUpload(e) {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  }

    const avatar = register("avatar")
  
    return (
      <div>
                <label htmlFor="photo-upload" className="custom-file-upload ">
                  <div  className="img-wrap img-upload" >
                    <img   htmlFor="photo-upload" src={imagePreviewUrl}/>
                  </div>
                  <input {...register("avatar",{
                    onChange: (e)=>{
                      photoUpload(e)
                    }
                  })} id="photo-upload" type="file"/> 
                </label>
      </div>
    )
}

  
export default CardProfile