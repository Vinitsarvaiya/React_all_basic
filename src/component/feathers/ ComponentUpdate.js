import React, { Component } from 'react'

export default class  ComponentUpdate extends Component {
    constructor(){
        super()
        this.state={
            counter:0
        }
    }
    componentDidUpdate(preProps,preState,ss){
        console.log("component update",preState,this.state.counter)
    }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <Child data={this.state.counter}/>
        <button  onClick={()=>{this.setState({counter:this.state.counter+1})}}>Click</button>
      </div>
    )
  }
}

class  Child extends Component {
    componentDidUpdate(pP,pS,sS){
        console.log("update child props",pP,this.props.data)
    }
  render() {
    return (
      <div>
        {this.props.data}
      </div>
    )
  }
}

