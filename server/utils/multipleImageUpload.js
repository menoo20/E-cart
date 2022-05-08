const Cloudinary = require("./cloudinary")



//error handling memo
// if (error.message.includes("Image") || error.message.includes("An unknown file format")){
//     SchemaErrors.image = ("Please Insert a supported Image format")
// }
///////////////////

async function uploadedImgs  (images, title,  res){

const uploadedImgs = images.map(async image=>{
 const upload =  await Cloudinary.uploader.upload(image,
      { 
        upload_preset: 'unsigned_upload',
        folder: "prodcuts",
        allowed_formats : ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp'],
    }, 
      function(error, result) {
          if(error){
              console.log(error)
              return res.status(400).json("something wrong happeed while uploading")
          }
           });
  return upload
})

try{
  const fulfilled = await Promise.all(uploadedImgs).then(values=> {return values})
  const publicIds =  fulfilled.map(image=>{
      return image.public_id
  })
  console.log(publicIds)
  return publicIds
}catch(err){
  res.status(500).json(err)
  return;
}
}

module.exports = uploadedImgs