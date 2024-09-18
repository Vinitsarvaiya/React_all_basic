import React from 'react'
import { ACTION } from './UseReducerTodo'

const ListAdd = ({todo,dispatch}) => {
    console.log(todo)
  return (
    <div className="bitem" align="center">
      <h3 className='name' style={{color:todo.complete?"green":"grey"}}>{todo.name}</h3>
      <button className='btn btn-primary' onClick={()=>dispatch({type:ACTION.TOGGLE_TODO,playload:{id:todo.id}})}>Toggler</button>
      <button className='btn btn-danger' onClick={()=>dispatch({type:ACTION.DELETE_TODO,playload:{id:todo.id}})}>Delete</button>
      <hr />
    </div>
  )
}

export default ListAdd
