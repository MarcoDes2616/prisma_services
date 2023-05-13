import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const username = localStorage.getItem("userLocal")
    const navigate = useNavigate()

    const logout = () => {
        localStorage.setItem("userLocal", "")
        navigate("/services/login")
    }

    return (
        <div className='nav'>
            <Link to={"/"}>
                <img className='logo' 
                src="https://prismadig.com/wp-content/uploads/2023/02/Prisma-Digital-Logo-light.png" 
                alt="logo company" />
            </Link>
            { username && <i onClick={() => logout()} className='bx bx-log-out bx-rotate-180 bx-md' ></i>}
        </div>
    );
};

export default Navbar;