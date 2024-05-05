
// import { removeFromCart } from "../store/slices/cart-slice"
// import { useDispatch } from "react-redux"

// export default function CartItem({item}){
    
//     const dispatch = useDispatch();

//     function handleRemove(){
//         dispatch(removeFromCart(item.id));
//     }

//     return(<div>{item.title}
//                 <button onClick={handleRemove}>Remove</button>
//             </div>)
// } 
 
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";

export default function CartItem({item}){
    
    const dispatch = useDispatch();
    const c = useSelector(state=>state);
   // console.log(c,'c');

    function handleRemoveItem(){
        dispatch(removeFromCart(item.id));
    }
 
    return(<div style={{ border:'0px solid blue', textAlign:'center',margin:'auto',float:'left'}}>
            <div style={{display:'flex',border:'0px solid red',padding:'10px',width:'650px'}}>
                <img style={{float:'left',width:'100px',height:'100px', borderRadius:'10px',border:'1px solid black'}} src={item.image} title={item.title} />
                <span style={{margin:'auto',width:'200px'}}>{item.title}</span>
                <span style={{margin:'auto',border:'2px solid green',paddingright:'20px',width:'80px'}}>${item.price.toFixed(2)}</span>
                <span style={{margin:'auto'}}><button style={{borderRadius:'8px',backgroundColor:'black',width:'80px',height:'30px',fontweight:'bold',color:'white'}} onClick={handleRemoveItem}>Remove</button></span>
            </div>
         </div>);

}