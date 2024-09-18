import React, { Component } from 'react'

export default class DerivedStFromPr extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
  render() {
    return (
      <div>
        <Child data={this.state.count}/>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Click {this.state.count}</button>
      </div>
    )
  }
}

class Child extends Component {
    constructor(){
        super()
        this.state={
            current:0
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("getdrivedstatefromprops",props,state)
        return{
            current:props.data
        };
    }
  render() {
    console.log("render")
    return (
      <div>
        <p>{this.props.data}</p>
      </div>
    )
  }
}

