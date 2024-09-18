import React, { useEffect, useState, useRef } from 'react'

const UseRef = () => {
    const [count, setcount] = useState(0)
    const a = useRef(0)
    const refbtn = useRef()

    const mystyle = {
        marginTop: "10%",
        verticalAlign: 'middle'
    };

    useEffect(() => {
        a.current = a.current + 1
        console.log(`This is value of a=>${a.current}`)
    })

    const Handlethis=()=>{
        refbtn.current.style.backgroundColor="red"
    }
    const Handleback=()=>{
        refbtn.current.style.backgroundColor="green"
    }
    return (
        <div className='container' align="center" style={{ mystyle }}>
            <div className="row">
                <div className="col-12">
                    <h1>{count}</h1>
                    <button type="button" className='btn btn-success' onClick={() => { setcount(count + 1) }}>Click</button>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12">
                    <h1>{count}</h1>
                    <div width="10px" ref={refbtn} style={{backgroundColor:"blue"}} >dd</div>
                    <button  type="button" className='btn btn-primary' onClick={Handlethis}>submit</button>
                    <button  type="button" className='btn btn-primary'  onClick={Handleback}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default UseRef
