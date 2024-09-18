import React from 'react'
import { useState,useEffect } from 'react';

const UseEffectHook = () => {
    const [counter,setCounter] = useState(0)

    const mystyle = {
        marginTop:"10%",
        verticalAlign: 'middle'
    };

    const HandleInc=()=>{
        setCounter(counter+1)
    }

    //only called once when component is load
    useEffect(()=>{
        console.log("useEffect called! loading")
        return(()=>{
            console.log("return called! loading")
        })
    },[]) 
    
    useEffect(()=>{
        console.log("useEffect called!")
        return(()=>{
            console.log("return called!")
        })
    },[counter])
    return (
        <div>
            <div className='container' align="center" style={mystyle}>
                <h1>Number : {counter}</h1>
                <hr />
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-success" onClick={HandleInc}>Increse</button>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default UseEffectHook
