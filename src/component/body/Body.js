import React, { useEffect } from 'react'
import Bodyitem from './Bodyitem'
import BodyAdd from './BodyAdd'

const Body = (prop) => {
  console.log(prop)
  return (
    <div className='container'> 
        <BodyAdd addData={prop.addData} />
        {prop.todo.length!==0?<h1 align="center">Todo List</h1>:""}
      {prop.todo.length!==0?
        prop.todo.map((item)=>{return (<Bodyitem todoitem={item} key={item.sno} ondelete={prop.ondelete}/>)}):"no todos to display"
      } 
    </div>
  )
}

export default Body
