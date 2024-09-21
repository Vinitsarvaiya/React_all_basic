import React, { useState } from 'react'
import HocComponent from './HocComponent'

const ClickCounter = ({count,increment}) => {
    console.log("click")
  return (
    <div className='container mt-5' align="center">
        <button className="btn btn-success" onClick={increment}>click {count}</button>
    </div>
  )
}

export default HocComponent(ClickCounter)
