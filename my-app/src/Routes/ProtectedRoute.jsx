import React from 'react'
import {Navigate} from 'react-router-dom'
import {useUserAuth} from '../ContextAPi/UseAuthContext'

const ProtectedRoute = ({children}) => {
    let {user} = useUserAuth()
    if(!user){
        return <Navigate to='/login'/>
    }
  return children
}

export default ProtectedRoute