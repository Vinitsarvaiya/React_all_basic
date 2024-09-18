import React from 'react'
import { useState } from 'react'

export default function BodyAdd({addData}) {
    const [title,setTitle]= useState('')
    const [desc,setDesc]=useState('')
    const submitbtn=(e)=>{
        e.preventDefault()
        console.log(title)
        console.log(desc)
        if(!title||!desc)
        {
            alert('both field are require')
        }
        else{
        addData(title,desc)
        }
        setTitle('')
        setDesc('')
    }
  return (
    <div className='container'>
      <form onSubmit={submitbtn}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" className="form-control" value={title} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>(setTitle(e.target.value))}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="text" className="form-control" value={desc} id="exampleInputPassword1" onChange={(e)=>(setDesc(e.target.value))} />
  </div>
  <button type="submit" className="btn btn-success" >Submit</button>
</form>
{/* <hr /> */}
    </div>
  )
}
