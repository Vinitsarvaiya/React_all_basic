import React from 'react'
import Grandchild from './Grandchild'

const Child = ({sendData}) => {
    
  return (
    <div>
      <Grandchild grand={sendData}/>
    </div>
  )
}

export default Child
