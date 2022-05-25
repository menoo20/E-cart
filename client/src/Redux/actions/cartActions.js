
export function addProductsToCart(product, id, quantity){
   
    return {
        type: "ADD_PRODUCTS",
        payload: {
            product,
            productId: id,
            quantity,
        }
    }
}

export function emptyCard(){
    return {
        type: "EMPTY_CART"
    }
}

export function removeItem(id){
    return {
        type: "REMOVE_ITEM",
        payload: id
    }
}