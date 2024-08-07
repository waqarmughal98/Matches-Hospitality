import React from 'react';

const AuthLayout = ({ backgroundImage, children }) => {

    return (
        <div className={`relative min-h-[100vh] bg-cover sm:p-10 p-5 transition-opacity duration-300 grid items-center`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            {children}
        </div>
    );
}

export default AuthLayout;
