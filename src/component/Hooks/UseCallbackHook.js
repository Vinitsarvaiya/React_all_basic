import React, { useCallback, useEffect, useState } from 'react';
import UseCallbackHelper from './UseCallbackHelper';

const UseCallbackHook = () => {
    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(0);
    const mystyle = {
        marginTop: "10%",
        verticalAlign: 'middle'
    };

    const handleInc = () => {
        console.log('counter--main');
        setCounter(counter + 1);
    };

    const handleIncNum = () => {
        console.log('number--main');
        setNumber(number + 1);
    };

    const superhook = useCallback(() => {
        console.log("usecallback");
        return number;
    },[number])

    return (
        <div>
            <div className='container' align="center" style={mystyle}>
                <h1>Counter: {counter}</h1>
                <hr />
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-success" onClick={handleInc}>Increase</button>
                    </div>
                </div>
                <hr />
            </div>
            <div className='container' align="center" style={mystyle}>
                <UseCallbackHelper superhook={superhook} />
                <hr />
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-success" onClick={handleIncNum}>Increase Number</button>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default UseCallbackHook;
