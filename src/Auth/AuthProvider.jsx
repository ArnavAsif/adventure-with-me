import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../utilities/firebase.init';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const gitHubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();

    // sign up
    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // login
    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign out 
    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    // google login

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    // github login

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider);
    }

    // disconnect user

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])


    const authInfo = {
        loading,
        user,
        signUpUser,
        signInUser,
        signOutUser,
        googleLogin,
        githubLogin
    }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;