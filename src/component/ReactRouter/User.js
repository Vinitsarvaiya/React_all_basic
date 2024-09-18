import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {name} = useParams()
  return (
    <div>
      THis is user {name} page
    </div>
  )
}

export default User
