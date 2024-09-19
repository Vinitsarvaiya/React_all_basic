import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [isSubmite,setisSubmite]=useState(false)
    const Handlesubmit=(e)=>{
        e.preventDefault()
        localStorage.setItem("login",true)
        setisSubmite(true)
        navi()
    }

    const navi=()=>{
        const login = localStorage.getItem("login")
        if(login){
            setisSubmite(false)
            navigate('/')
        }
    }
    return (
        <div>
            <div className='container'>
                <form  className='mt-5 mb-5' onSubmit={Handlesubmit}>
                Please login first
                    <input type="text" className="form-control mt-2 mb-2" />
                    <input type="password" className="form-control mt-2 mb-2"  />
                    <button type="submit" className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
