import React from 'react'

const Child = ({sendData}) => {
    const Handlechange=(e)=>{
        e.preventDefault()
        let name="my name is ---"
        sendData(name)
    }
  return (
    <div>
      <button className='btn btn-warning' onClick={Handlechange}>Click</button>
    </div>
  )
}

export default Child
