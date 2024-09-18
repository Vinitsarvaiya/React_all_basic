import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Filter = () => {
    const [search,setsearch]= useSearchParams()
    const age = search.get('age')
    const city = search.get('city')
    // http://localhost:3000/filter?age=40&city=surat 
  return (
    <div>
      This is filter / age is {age} <br/>
      This is filter / city is {city} <br />
      <button onClick={()=>setsearch({age:100})}>set params</button>
    </div>
  )
}

export default Filter
