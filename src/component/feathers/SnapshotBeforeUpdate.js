import React, { Component } from 'react'

export default class SnapshotBeforeUpdate extends Component {
    constructor(){
        super()
        this.state={
            cnt:0
        }
    }
  render() {
    return (
      <div>
        <Home data={this.state.cnt}/>
        {/* <button onClick={()=>{this.setState({cnt:this.state.cnt+1})}}>Click</button> */}
      </div>
    )
  }
}

class Home extends Component {
    constructor(){
        super()
        this.state={
            current:0
        }
    }
    componentDidUpdate(pP,pS,ss){
        console.log("componentDidUpdate",ss)
    }
    
    getSnapshotBeforeUpdate(preP,preS){
        console.log("snapshort",preS)
        console.log('snapshort',this.state.current)
        console.log(preP)
        console.log(this.props)
        return preS.current*10;
    }
  render() {
    console.log("render")
    return (
      <div>
        <p>{this.state.current}</p>
        <button onClick={()=>{this.setState({current:this.state.current+1})}}>Update</button>
      </div>
    )
  }
}
