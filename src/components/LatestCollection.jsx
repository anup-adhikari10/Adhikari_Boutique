

import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";
import Productitem from "./Productitem";

const LatestCollection = () => {
    const {products}=useContext(ShopContext);
    const[latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])
  return (
    <div className="my-10">
        <div className="text-center py-8 text-3x1">
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Step into the season with Adhikari Boutique's latest collection! Featuring the newest trends, vibrant colors, and innovative designs, our collection is crafted to inspire and elevate your style. Whether you're updating your wardrobe or looking for a statement piece, you'll find fresh, stylish options that embody elegance and modern flair. Explore now and be the first to wear this season's must-have looks!
            </p>
        </div>
        
        {/* Rendering Products */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">

            {latestProducts.map((item,index)=>(
                <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))}
        </div>
    
    
    </div>
  )
}

export default LatestCollection