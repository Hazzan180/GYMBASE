import React, {useContext, createContext, useState, useEffect} from 'react'

const useAuthContext =  createContext()

export function UserAuthContextProvider({children}) {
 return <useAuthContext.Provider value={{}}>{children}</useAuthContext.Provider>   
}

export function useUserAuth() {
    return useContext(useAuthContext)
}