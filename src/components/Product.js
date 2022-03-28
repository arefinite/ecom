import React from 'react';

const Product = (props) => {
    const {id,name,img,price,seller,ratings} = props.product
   
    return (
        <div className='border border-gray-300 p-5 rounded-md'>
            <img className='rounded-md' src={img} alt="" />
            <p className='font-semibold'>{name}</p>
            <p className='font-bold'>Price :$ {price}</p>
            <p className='text-sm'>{seller}</p>
            <p className='text-sm'>{ratings} star</p>
            <button onClick={()=>props.addToCart(props.product)} className='bg-red-600 p-2 mt-4 
            rounded-md text-white hover:text-red-800
            hover:bg-white hover: border border-red-600
            transition delay-100'>Add to cart</button>
        </div>
    );
};

export default Product;