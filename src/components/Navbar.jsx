import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav'>
            <Link to={"/"}>
                <img className='logo' 
                src="https://prismadig.com/wp-content/uploads/2023/02/Prisma-Digital-Logo-light.png" 
                alt="logo company" />
            </Link>

        </div>
    );
};

export default Navbar;