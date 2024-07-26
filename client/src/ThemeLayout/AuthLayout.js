import React, { useEffect, useState } from 'react';

const AuthLayout = ({ backgroundImage, children }) => {

    return (
        <div className={`relative min-h-[100vh] bg-cover p-10 transition-opacity duration-300`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            {children}
        </div>
    );
}

export default AuthLayout;
