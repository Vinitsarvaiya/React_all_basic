import React from 'react'

const Grandchild = ({grand}) => {
    const Handlechange=(e)=>{
        e.preventDefault()
        let name="my name is ---"
        grand(name)
    }
  return (
    <div>
      <button className='btn btn-warning' onClick={Handlechange}>Click</button>
    </div>
  )
}

export default Grandchild
