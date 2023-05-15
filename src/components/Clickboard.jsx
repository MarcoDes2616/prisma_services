import React, { useState } from 'react';

const Clickboard = () => {
    const [copy, setCopy] = useState(false)

    const credencials = ["cramirez", "PrismaD2022"]

    const handleCopy = (index) => {
        navigator.clipboard.writeText(credencials[index]);
        setCopy(true)
        const interval = setTimeout(() => {
            setCopy(false)
        }, 2000);
    };

    return (
        <div className='credentials'>
            {copy && <p>Copied!</p>}
            <div className='username'>
                <p>cramirez</p>
            </div>
            <div className='password'>
                <p>Pr******22</p>
            </div>
        </div>
    );
};

export default Clickboard;