
// import { useSelector, useDispatch } from "react-redux" 
// import { addToCart, removeFromCart } from "../store/slices/cart-slice";

// export default function ProductItem({item}){

//     const dispatch = useDispatch();
//     const { cart } = useSelector(state=>state);
     
//     function handleAdd()
//     {
//         dispatch(addToCart(item)); 
//     }
//     function handleRemove()
//     {
//         dispatch(removeFromCart(item.id)); 
//     }
 
//     return(<div>{item.title} 
//             <button onClick={(cart && cart.length > 0 && cart.findIndex((index)=> index.id === item.id) !== -1 ) ? handleRemove : handleAdd} style={{border:'1px solid black'}}>
//                 {
//                     (cart && cart.length > 0 && cart.findIndex((index)=> index.id === item.id) !== -1 ) 
//                     ? "Remove to Cart" :  "Add to Cart" 
//                 }     
//             </button> 
//     </div>)
// } 

 
import "../../src/styles.css"
import {  useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../store/slices/cart-slice";

export default function ProductItem({ item }) {

    const dispatch = useDispatch(); 
    const {cart} = useSelector(state=>state);

    function handleAdd() {
        dispatch(addToCart(item));
        console.log(cart, 'added');
    }

    function handleRemove() {
        dispatch(removeFromCart(item.id));
        console.log(cart, 'removed');
    } 

    return (
        <div className="product-item-container">
            <div className="img-container">
                <img src={item.image} title={item.title} />
            </div>
           
            <div className="price-container">   
                <p>${item.price}</p>
            </div> 
            
            <div className="add-to-cart-container">
                <button onClick={ (cart && cart.findIndex((getItem)=> getItem.id===item.id) === -1) ? handleAdd : handleRemove} 
                        className="add-to-cart-button">
                    { 
                        cart && cart.findIndex((getItem)=> getItem.id===item.id) === -1 ?
                          "Add To Cart"
                        : "Remove From Cart"
                    } 
                </button>
            </div>
        </div>
    );
}