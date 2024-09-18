import React from 'react'
import useCounter from './useCounter'

const UseCustomeHook = () => {
    const [counte,Handlecounter] = useCounter()
    const mystyle = {
        marginTop: "10%",
        verticalAlign: 'middle'
    };
  return (
    <div align="center" style={{mystyle}}>
      <h1>{counte}</h1>
      <button className="btn btn-warning" onClick={Handlecounter}>inc</button>
    </div>
  )
}

export default UseCustomeHook