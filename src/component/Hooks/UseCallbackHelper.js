import React from 'react'
import { memo } from 'react'

const UseCallbackHelper = ({number}) => {
    console.log("usecallback--helper")
    return (
    <div>
      <h1>{number}</h1>
    </div>
  )
}

export default memo(UseCallbackHelper)
