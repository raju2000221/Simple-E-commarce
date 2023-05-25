import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader = async()=>{
    const lodedProdeucts =await fetch ('product.json');
    const product = await lodedProdeucts.json();
    const storeCart = getShoppingCart();
    const saveCart = [];
    for (const id in storeCart){
        const addedProduct = product.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storeCart[id];
            addedProduct.quantity =quantity;
            saveCart.push(addedProduct);
        }
    } 
    return saveCart;
}
export default cartProductsLoader