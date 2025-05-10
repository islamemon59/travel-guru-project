import React, { useState } from 'react';
import { AuthProvider } from './CreateContext';


const AuthContext = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const userInfo = {
        user,
        setUser,
        loading,
        setLoading,
    }

    return (
        <AuthProvider value={userInfo}>
            {children}
        </AuthProvider>
    );
};

export default AuthContext;