import React from 'react';
import logo from '../images/Logo.svg'

const Header = () => {
    return (
        <nav className='bg-blue-800 px-14 h-20 flex items-center justify-between'>
            <img src={logo} alt='logo'/>
            <div className='text-white space-x-4'>
                <a className='hover:text-orange-400' href='/shop'>Shop</a>
                <a className='hover:text-orange-400' href='/order'>Order</a>
                <a className='hover:text-orange-400' href='/inventory'>Inventory</a>
                <a className='hover:text-orange-400' href='/about'>About</a>
            </div>
        </nav>
    );
};

export default Header;