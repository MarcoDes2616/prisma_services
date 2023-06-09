import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [animate, setAnimate] = useState(false)
    const navigate = useNavigate()
    const username = localStorage.getItem("userLocal");

    const goToLogin = () => {
        setAnimate(true)
        const interval = setTimeout(() => {
            setAnimate(false)
            { username ? navigate("/services/dashboard") :
            navigate("/services/login")}
        }, 1000)
        return () => clearInterval(interval)
    }

    return (
        <div className='home'>
            <div className='welcome'>
                <p>Bienvenidos a </p>
                <h1 className='title'>Prisma Digital Services</h1>
            </div>
            <div className='call_login'>
                <p>Ingresar</p>
                <i onClick={() => goToLogin()} 
                    className={animate ? 'bx bxs-right-arrow-circle bx-fade-right bx-lg' : 'bx bxs-right-arrow-circle bx-lg'}>
                </i>
            </div>
        </div>
    );
};

export default Home;