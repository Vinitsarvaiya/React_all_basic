import React from 'react'
import './css/Mystyle.css'
import style from './css/First.module.css'

const FirstCom = () => {
    // const my={
    //     color:"yellow"
    // }
  return (
    <div>
      <h1 className={style.btns}>First component</h1>
      <p className={style.btns}>paragraph</p>
    </div>
  )
}

export default FirstCom
