import React, { Component } from 'react'

export default class ComponentWill extends Component {
    constructor(){
        super()
        this.state={
            show:true
        }
        console.log("constructor")
    }
  render() {
    console.log("render")
    return (
      <div>
        {this.state.show?<Child/>:null}
        <button onClick={()=>{this.setState({show:!this.state.show})}}>Click</button>
      </div>
    )
  }
}

class Child extends Component {
    componentWillUnmount(){
        console.log("component will Unmount")
    }
    render() {
        console.log("chile-render")
      return (
        <div>
          <h2>This is Child component</h2>
        </div>
      )
    }
  }


//  constructor
//  render
//  componentdidUnmount
//  render
//  componentWillUnmount