import React, { Component } from 'react'

export default class LifeNav extends Component {
    constructor(){
        super()
        console.log("constructor-nav")
    }
    componentDidMount(){
        console.log("componentDidMount-nav")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
  render() {
    console.log("render-nav")
    return (
      <div>
        <p>This is nav</p>                                    
      </div>
    )
  }
}

