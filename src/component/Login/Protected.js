import React, { Component, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Protected = ({ component: Component, ...props }) => {
    const navigate = useNavigate()
    useEffect(()=>{
        const login= localStorage.getItem("login")
        if(!login){
            navigate('/login')
        }
    })
  return (
    <div>
      <Component {...props}/>
    </div>
  )
}

export default Protected
