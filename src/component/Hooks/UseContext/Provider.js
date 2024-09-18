import React,{useState} from 'react'
import UserContext from './UserContext'

const Provider = (props) => {
    const [name,setName]=useState('vinit')
  return (
    <div>
        <UserContext.Provider value={name}>
            {props.children}
        </UserContext.Provider>
    </div>
  )
}

export default Provider
