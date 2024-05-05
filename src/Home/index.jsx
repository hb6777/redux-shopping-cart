// import { useEffect, useState } from "react"
// import ProductItem from "../product-item";
 
// export default function Home(){

//     const [products, setProducts] =useState([]);
//     const [loading, setLoading] =useState(false);

//     async function getProductList(){
        
//         setLoading(true)

//         try{
//             const response = await fetch('https://fakestoreapi.com/products');
//             const data = await response.json();
            
//             console.log(data);
            
//             if(data){
//                 setLoading(false)
//                 setProducts(data)
//             }
//         }catch(e){
//             setLoading(false)
//             console.log(e)
//         } 
//     } 

//     useEffect(()=>{
//         getProductList()
//     },[])    
 
//     return(<div> Home
//     {
//         loading ? <h1>Loading products ... please wait</h1>
//         :
//         products && products.length > 0 ? 
//             (
//                 products.map((item)=>(
//                     <ProductItem item={item} />
//                 ))
//             )
//             : (<h1>No Products!</h1>)

//     }

//     </div>)
// } 
 

import { useEffect, useState } from "react";
import ProductItem from "../product-item";
import "../../src/styles.css" 

export default function Home() {

     const [products, setProducts] = useState([]) 
     const [loading, setLoading] = useState(false);

    async function fetchProducts() {
        setLoading(true)

        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const dataList = await response.json();
          //  console.log(dataList);
            if (dataList) {
                setProducts(dataList)
                setLoading(false)
            }

        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }

    useEffect(() => {
        fetchProducts();
    },[]);
 
    return (<div className="home-container"> 
            {
                
                loading ?  ( <div className="message-container"> Loading ... Please wait! </div>) 
                : (
                    products && products.length > 0 ? 
                    (
                        products.map(item=>(
                            <ProductItem item={item} />
                        ))  
                    )
                    : <div className="message-container">Sorry ... No Products to show!</div> 
                )
            } 
    </div>);
}