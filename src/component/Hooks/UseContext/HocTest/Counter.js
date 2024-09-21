import React from 'react'
import HocComponent from '../../../Hoc/HocComponent'

const Counter = ({count,increment}) => {
  return (
    <div>
      <button className='btn btn-warning' onClick={increment}>click {count}</button>
    </div>
  )
}

export default HocComponent(Counter)
