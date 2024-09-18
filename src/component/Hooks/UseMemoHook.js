import React, { useMemo } from 'react'
import { useState,useEffect } from 'react';

const UseMemoHook = () => {
    const [counter,setCounter] = useState(0)
    const [number,setNumber] = useState(0)

    const mystyle = {
        marginTop:"10%",
        verticalAlign: 'middle'
    };

    const HandleInc=()=>{
        setCounter(counter+1)
    }
    
    useEffect(()=>{
        console.log("useEffect called!")
    },[counter])

    const Handlenumber=()=>{
        setNumber(number+1)
    }

    const isequal=useMemo(()=>{
        console.log("isequal called")
        if(number === 10)
        {
            return "yes"
        }
            return "no";
    },[number])

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
            <div className='container' align="center" style={mystyle}>
                <h1>is {number} is equal to 10 --{isequal}</h1>
                <hr />
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-success" onClick={Handlenumber}>Increse</button>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default UseMemoHook
