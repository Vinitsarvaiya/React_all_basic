import React from 'react'
import Child from './Child'

const Parent = ({onApp}) => {
  return (
    <div>
      <Child  sendData={onApp}/>
      this is parant
    </div>
  )
}

export default Parent
