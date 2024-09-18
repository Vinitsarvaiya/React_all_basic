import React, { useContext } from 'react'
import UserContext from './UserContext'

const Receiver = () => {
    const user = useContext(UserContext)
  return (
    <div>
    <h1>This is data send from provider " {user} "</h1>
    </div>
  )
}

export default Receiver
