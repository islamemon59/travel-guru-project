import React, { useEffect, useState } from 'react';
import { AuthProvider } from './CreateContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase.config';


const AuthContext = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const signOutUser = () => {
        setLoading(true)
       return signOut(auth)
    }

    const updateUserProfile = (userData) => {
        return updateProfile(auth.currentUser, userData)
    }

    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }

    }, [])


    const userInfo = {
        user,
        setUser,
        loading,
        setLoading,
        registerUser,
        loginUser,
        signInWithGoogle,
        signOutUser,
        updateUserProfile,
    }

    return (
        <AuthProvider value={userInfo}>
            {children}
        </AuthProvider>
    );
};

export default AuthContext;