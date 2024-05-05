
// import { Link } from "react-router-dom";
 
// export default function Header(){
//     return(<div>REACT REDUX SHOPPING CART

//             <Link to="/">
//                 Home
//             </Link>

//             <Link to="/cart">
//                 Cart
//             </Link>
//     </div>
// );
// }
 
 import {NavLink} from 'react-router-dom'
import './header.css'
import { useSelector } from 'react-redux';

export default function Header(){

    const {cart} = useSelector(state=>state);
    
    return(<div className='header-container'>
                 <div className='logo'>
                    REACT REDUX SHOPPING PAGE
                </div> 
                <div className='logo'>
                    <NavLink className="nav-container"  to="/">
                        Home
                    </NavLink>
                    <NavLink  className="nav-container"  to="/Cart">
                        My Cart <span>({cart.length})</span>
                    </NavLink> 
                </div>
    </div>);
}