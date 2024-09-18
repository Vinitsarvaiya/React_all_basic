import React from 'react'
import { useState } from 'react';
import UseCallbackHelper from './UseCallbackHelper';

const UseCallbackHook = () => {
    const [counter, setCounter] = useState(0)
    const [number,setNumber]=useState(0)
    const mystyle = {
        marginTop: "10%",
        verticalAlign: 'middle'
    };

    const HandleInc = () => {
        console.log('counter--main')
        setCounter(counter + 1)
    }

    const HandleIncnum = () => {
        setNumber(number + 1)
    }
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
                <UseCallbackHelper number={number}/>
                <hr />
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-success" onClick={HandleIncnum}>Increse</button>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default UseCallbackHook
