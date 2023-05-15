import React, { useState } from 'react';

const Clipboard = ({clipboard, setClipboard}) => {
    const [copy, setCopy] = useState(false)

    const credencials = ["cramirez", "PrismaD2022"]

    const handleCopy = (index) => {
        navigator.clipboard.writeText(credencials[index]);
        setCopy(true)
        const interval = setTimeout(() => {
            setCopy(false)
            setClipboard(false)
        }, 2000);
    };

    return (
        <div className={ clipboard ? 'credentials' : "credentials hide"}>
            {copy && <p className='copied'>Copied!</p>}
            <div className='username'>
                <p>cramirez</p>
                <i onClick={() => handleCopy(0)} className='bx bxs-copy'></i>
            </div>
            <div className='password'>
                <p>Pr******22</p>
                <i onClick={() => handleCopy(1)} className='bx bxs-copy'></i>
            </div>
        </div>
    );
};

export default Clipboard;