import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";


const PrivateRoute = ({ children }) => {
  const redirecTo = '/'
    const user = useSelector(state => state.user)
    if(!user.isConfirmed) {
        return <Navigate to={redirecTo}/>
    }
  return children ? children : <Outlet />
}

export default PrivateRoute
