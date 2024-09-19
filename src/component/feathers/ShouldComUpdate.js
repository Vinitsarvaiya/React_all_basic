import React, { Component } from 'react'

export default class ShouldComUpdate extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    shouldComponentUpdate(pP,pS){
        console.log("shouldComponentUpdate")
        if(pS.count===5)
        {
            
            return false
        }
        return true
    }
  render() {
    console.log("render")
    return (
      <div>
        <p>{this.state.count}</p>
        <button type="button" onClick={()=>{this.setState({count:this.state.count+1})}}>Click</button>
      </div>
    )
  }
}
