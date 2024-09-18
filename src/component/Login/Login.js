import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const Handlesubmit=()=>{
        localStorage.setItem("login",true)
    }

    useEffect(()=>{
        const login = localStorage.getItem("login")
        if(login){
            navigate('/')
        }
    })
    return (
        <div>
            <div className='container'>
                <form  className='mt-5 mb-5' onClick={Handlesubmit}>
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
