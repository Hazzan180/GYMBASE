import React, {useContext, createContext, useState, useEffect} from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'

import {auth} from '../FirebaseConfig'

const useAuthContext =  createContext()

export function UserAuthContextProvider({children}) {
    const [user, setUser] = useState();

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut(){
        return signOut(auth)
    }

    function gogleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleAuthProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    },[])

 return <useAuthContext.Provider value={{user, signUp, logIn, logOut, gogleSignIn}}>{children}</useAuthContext.Provider>   
}

export function useUserAuth() {
    return useContext(useAuthContext)
}