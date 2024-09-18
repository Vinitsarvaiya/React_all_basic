import React, { useState } from 'react'

const UseStateHook = () => {
    const [counter,setCounter] = useState(0)

    const mystyle = {
        marginTop:"10%",
        verticalAlign: 'middle'
    };

    const HandleInc=()=>{
        setCounter(counter+1)
    }
    const HandleRes=()=>{
        setCounter(0)
    }
    const HandleDec=()=>{
        setCounter(counter-1)
    }



    const [cnt,Setcnt]= useState(0)
    const [num,Setnum]=useState(0)

    const Handleclick=()=>{
        if(cnt === 0){
            Setcnt(1)
            Setnum(num+2)}
        else{
            Setcnt(0)
            Setnum(num-2)
        }
    }
  return (
    <div>
    <div className='container' align="center" style={mystyle}>
        <h1>Number : {counter}</h1>
        <hr />
        <div className="row">
            <div className="col-4">
        <button className="btn btn-success" onClick={HandleInc}>Increse</button>
        </div>
        <div className="col-4">
        <button className="btn btn-primary" onClick={HandleRes}>Reset</button>
        </div>
        <div className="col-4">
        <button className="btn btn-danger" onClick={HandleDec}>decrease</button>
        </div>
        </div>
        <hr />
    </div>
    <div className='container' align="center" style={mystyle}>
        <h1>Number : {num}</h1>
        <hr />
        <div className="col-12">
        <button className="btn btn-primary" onClick={Handleclick}>Click</button>
        </div>
        <hr />
    </div>
    </div>
  )
}

export default UseStateHook
