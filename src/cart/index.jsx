
// import { useSelector } from "react-redux"
// import CartItem from "../cart-item";

// export default function Cart(){

//     const mycart = useSelector(state=>state); 
//     console.log(mycart.cart);

//     return(
//             <div> 
//                 {
//                     mycart && mycart.cart.length > 0 ? 
//                     (
//                         mycart.cart.map((item)=>
//                             <CartItem item={item} />
//                         )
//                     )
//                     : (<h1>Your cart is empty</h1>)
//                 }
//             </div>
//         )
// } 
 
import { useSelector } from "react-redux";
import "../../src/styles.css"
import CartItem from "../cart-item";
import { Link } from "react-router-dom";

export default function MyCart(){

    const currentCartItemState = useSelector(state=>state);
    const totalAmount = currentCartItemState.cart.reduce((acc,curr)=> acc = acc + curr.price,0).toFixed(2);
//    console.log(currentCartItemState, 'in mycart');
//    console.log(currentCartItemState.cart.length, 'cart length');

    return(
        <div>
            {
                currentCartItemState && currentCartItemState.cart.length > 0 ?
                    currentCartItemState.cart.map((item)=> <CartItem item={item} />) 
                :  <div><h1>You cart is Empty!</h1>
                    <Link to="/">Shop Now</Link></div>
            }
            {
                currentCartItemState && currentCartItemState.cart.length > 0 ?
                  (<div style={{ border:'0px solid blue', textAlign:'center',margin:'auto'}}>
                    <p>Total Items : {currentCartItemState.cart.length}</p>
                    <p>Total Amount : ${totalAmount}</p>
                    </div>)
                : null
            }
        </div>
    );
}