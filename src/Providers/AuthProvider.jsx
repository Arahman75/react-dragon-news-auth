import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // logOut
    const logOut = () => {
        return signOut(auth)
    }

    // sign In
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    // observe user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user us observation', currentUser);
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { user, createUser, logOut, signIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;