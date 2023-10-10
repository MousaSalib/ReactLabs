import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
// import styles from "./ProtectedRoutes.module.css"

export default function ProtectedRoutes(props) {
  
  if(localStorage.getItem("userToken")) {
    return props.children
  }else {
    return <Navigate to={"/login"}/>
  }
      
  return (
    <div>
      
    </div>
  )
}
