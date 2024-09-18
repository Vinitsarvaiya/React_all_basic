import React, { useReducer, useState } from 'react'
import ListAdd from './ListAdd'

export const ACTION={
    ADD_TODO:"add-todo",
    TOGGLE_TODO:"toggle-todo",
    DELETE_TODO:"delete-todo"
}

const reducer=(Todo,action)=>{
    switch (action.type) {
        case ACTION.ADD_TODO:
            return [...Todo,addTodo(action.playload.name)]
        case ACTION.TOGGLE_TODO:
            return Todo.map(item=>{
                if(item.id === action.playload.id)
                {
                    return {...item,complete:!item.complete}
                }
                return item
            })
        case ACTION.DELETE_TODO:
            return Todo.filter(item => item.id !== action.playload.id) 
        
    }
}

const addTodo=(name)=>{
    return { id:Date.now() ,name:name,complete:false}
}

const UseReducerTodo = () => {
    const [Todo,dispatch]=useReducer(reducer,[])
    const [name,setName]=useState('')

    const Handlesubmit=(e)=>{
        e.preventDefault()
        dispatch({type:ACTION.ADD_TODO,playload:{name:name}})
        setName('')
    }

    // console.log(Todo)
  return (
    <div className='container'>
      <form onSubmit={Handlesubmit} className='mt-5 mb-5'>
        <input type="text" className="form-control" value={name} onChange={e=>setName(e.target.value)} />
      </form>
      {
            Todo.length !==0 ?<> <h2 align="center">Todo List</h2> <hr /></>:<p align="center">No todo list</p>
        }
      <div>
        {Todo.map(todo=>{
            return <ListAdd key={todo.id} todo={todo} dispatch={dispatch}/>
        })}
      </div>
    </div>
  )
}

export default UseReducerTodo
