import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const {img,name} = props.cart
    return (
        <div>
            <div className='bg-gray-300 p-1 rounded-md text-xs tracking-tighter items-center mt-2 flex'>
                <img className='h-8 w-8 rounded-full items-center' src={img} alt="logo" />
                <p className='pl-2'>{name}</p>
                <p className='px-3 text-red-700'>
                    <a href='#'>
                    <FontAwesomeIcon icon={faTrash}/>
                    </a>
                    </p>
            </div>
            
        </div>
    );
};

export default Cart;