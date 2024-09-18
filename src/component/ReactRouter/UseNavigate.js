import React from 'react'
import { useNavigate } from 'react-router-dom'

const UseNavigate = () => {
    const Navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>Navigate('/about')}>about</button>
    </div>
  )
}

export default UseNavigate
