import { RegReq } from "./AuthActions";
import {getCategories, getFeaturedCat, chooseCat, chooseSort, choosePriceRange, choosePageAndLimit} from "./categoryAction"
import {emptyCard,addProductsToCart, removeItem} from "./cartActions"
import {getProducts, getFeaturedProducts} from "./productsAction"

export  {
    RegReq,
    getCategories,
    getFeaturedCat,
    getProducts,
    getFeaturedProducts,
    chooseCat,
    chooseSort,
    choosePriceRange,
    choosePageAndLimit,
    emptyCard,
    addProductsToCart,
    removeItem
}
    
