import React from 'react';

const Loader = () => {
    return (
        <div className="loader_container" >
            <img width={250} src="https://prismadig.com/wp-content/uploads/2023/02/Prisma-Digital-Logo-light.png" alt="" />
            
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loader;