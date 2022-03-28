import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Product from './Product';

const Shop = () => {
    const [products,setProducts] = useState([])
    const [carts,setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
    const addToCart= (selectedProduct)=>{
        const newCart = [...carts,selectedProduct]
        setCart(newCart)
        
    }
    return (
        <div className='shop-container mt-4 grid grid-cols-12 px-14 gap-4'>
            <div className="product-container md:col-span-9 col-span-6 grid md:grid-cols-3 grid-cols-1 gap-4">
                {
                    products.map(product=><Product
                    product={product}
                    key={product.id}
                    addToCart={addToCart}
                    />)
                }
            </div>
            <div className="sticky right-0 cart-container md:col-span-3 col-span-6 border border-gray-200 p-2 rounded-md">
                <p className='text-center'>Your Selected Cart:{carts.length>0 && carts.length}</p>
                {   
                    carts.map(cart=><Cart
                    cart={cart}
                    key={cart.id}
                    />)
                }
            </div>
        </div>
    );
};

export default Shop;