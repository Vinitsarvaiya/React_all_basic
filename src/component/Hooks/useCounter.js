import { useState } from 'react'

const useCounter = () => {
    const [count,setCount]=useState(0)
    const Handlecounter=()=>{
        setCount(count+1)
    }
  return [count,Handlecounter]
}

export default useCounter
