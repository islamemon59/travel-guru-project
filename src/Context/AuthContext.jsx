import React from 'react';
import { AuthProvider } from './CreateContext';


const AuthContext = ({children}) => {

    const userInfo = {
        name: "name"
    }

    return (
        <AuthProvider value={userInfo}>
            {children}
        </AuthProvider>
    );
};

export default AuthContext;