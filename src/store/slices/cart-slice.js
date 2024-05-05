
import { createSlice } from "@reduxjs/toolkit"

const initValue = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: initValue,
    reducers:{
        addToCart(state,action) { 
            state.push(action.payload);
        },
        removeFromCart(state,action){  
          //  console.log(action,'removed');
            return state.filter((state)=>state.id !== action.payload);
        }
    }
})

export const {addToCart,removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
 

// // createSlice
// // initialize
// // slice : name, initialize, reducer/action

// import {createSlice} from "@reduxjs/toolkit"

// const initialvalue = [];

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: initialvalue,
//     reducers: {
//         addToCart(state,action)
//         {
//             // console.log(action,'action');
//             state.push(action.payload);
//         },
//         removeFromCart(state,action)
//         {
//            // console.log(action,'remove in slice');
//            return state.filter(item=>item.id !== action.payload);
//         },
//     }
// });

// export const {addToCart,removeFromCart } = cartSlice.actions;

// export default cartSlice.reducer;