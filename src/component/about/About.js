import React, { useContext } from 'react'
import UserContext from '../Hooks/UseContext/UserContext'

const About = () => {
  const user = useContext(UserContext)
  return (
    <div>
      <h1>This is About {user}</h1>
    </div>
  )
}

export default About
