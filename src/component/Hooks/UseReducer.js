import React, { useReducer, useState } from 'react'

const ACTION = {
    INC: "inc",
    DEC: "dec",
    RES: "res"
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.INC:
            return { counter: state.counter + 1 }
        case ACTION.DEC:
            return { counter: state.counter - 1 }
        case ACTION.RES:
            return { counter: 0 }
        default:
            return state
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    // const [counter, setCounter] = useState(0)

    const mystyle = {
        marginTop: "10%",
        verticalAlign: 'middle'
    };

    const HandleInc = () => {
        dispatch({ type: ACTION.INC })
    }
    const HandleRes = () => {
        dispatch({ type: ACTION.RES })
    }
    const HandleDec = () => {
        dispatch({ type: ACTION.DEC })
    }

    return (
        <div>
            <div className='container' align="center" style={mystyle}>
                <h1>Number : {state.counter}</h1>
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
        </div>
    )
}

export default UseReducer

