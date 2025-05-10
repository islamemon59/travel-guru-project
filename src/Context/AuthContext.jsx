import React, { useState } from 'react';
import { AuthProvider } from './CreateContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase.config';


const AuthContext = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        user,
        setUser,
        loading,
        setLoading,
        registerUser,
        loginUser,
    }

    return (
        <AuthProvider value={userInfo}>
            {children}
        </AuthProvider>
    );
};

export default AuthContext;