import React, { useEffect, useState } from 'react'

const Session = () => {
    const [name,setName]=useState('')
    const [session,setsession]=useState('')


    useEffect(()=>{
        const sessionName = sessionStorage.getItem("key")
        if(sessionName)
            setsession(sessionName)
    })

    const handleSave=()=>{
        sessionStorage.setItem("key",name)
    }

    const handleRemove=()=>{
        sessionStorage.removeItem("key")
    }

    const handleClearAll=()=>{
        sessionStorage.clear()
    }
  return (
    <div>
      <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleRemove}>remove</button>
            <button onClick={handleClearAll}>Clear</button>
            {session && <p>Stored Name: {session}</p>}
        </div>
    </div>
  )
}

export default Session
