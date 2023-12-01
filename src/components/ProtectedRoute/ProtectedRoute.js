import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({element: Component, ...props}) => {
  return (
    props.authorized ? <Component {...props}/> : <Navigate to={'/'}/>
  )
}

export default ProtectedRoute
