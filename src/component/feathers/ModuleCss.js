import React from 'react'
import Style from './css/Style.module.css'

const ModuleCss = () => {
  return (
    <div className='container'>
      <h1 className={Style.hello}>hello world</h1>
      <p className={Style.pragraph}>This is demo for Module css</p>
    </div>
  )
}


export default ModuleCss
