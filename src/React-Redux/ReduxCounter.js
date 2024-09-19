import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {IncNumber,DecNumber,ResNumber} from './Actions/Index'

const ReduxCounter = () => {
    const myState = useSelector((state)=>state.incDec)
    const dispatch = useDispatch()

    const mystyle = {
        marginTop:"10%",
        verticalAlign: 'middle'
    };

  return (
    <div>
      <div className='container' align="center" style={mystyle}>
        <h1>Number : {myState}</h1>
        <hr />
        <div className="row">
            <div className="col-4">
        <button className="btn btn-success" onClick={()=>dispatch(IncNumber(5))}>Increse</button>
        </div>
        <div className="col-4">
        <button className="btn btn-primary" onClick={()=>dispatch(ResNumber())}>Reset</button>
        </div>
        <div className="col-4">
        <button className="btn btn-danger" onClick={()=>dispatch(DecNumber())}>decrease</button>
        </div>
        </div>
        <hr />
    </div>
    </div>
  )
}

export default ReduxCounter
