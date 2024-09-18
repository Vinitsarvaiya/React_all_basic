import React from 'react'
import './body.css'

export default function Bodyitem({todoitem,ondelete}) {
  return (
    <div className="bitem" align="center">
      <h3 className='title'>{todoitem.title}</h3>
      <p className='desc'>{todoitem.desc}</p>
      <button className="btn btn-danger" onClick={()=>{ondelete(todoitem)}}>delete</button>
      <hr />
    </div>
  )
}
