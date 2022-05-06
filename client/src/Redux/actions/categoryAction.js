import {toast} from "react-toastify"
import { category, featuredCategory } from "../Axios/category";




export const getCategories = () => async dispatch =>{

    category.get("/")
    .then(response =>{
        console.log(response.data)
    })

}


const getFeatured = (categories)=>{
    return {
        type: "GET_FEATURED",
        payload: categories
    }
}


export const getFeaturedCat = () => async dispatch =>{

    featuredCategory.get("/")
    .then(response =>{
        dispatch(getFeatured(response.data))
    })

}