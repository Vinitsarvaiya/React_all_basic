import React, { Component ,useState} from 'react'
import LifeNav from './LifeNav'

export class LifeCycle extends Component {
    constructor(){
        super()
        this.state={
            show:true
        }
        console.log("constructor")
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    render() {
    console.log("render")
    return (
      <div>
        <h1>hello world</h1>
        {this.state.show?<LifeNav/>:null}
        <button onClick={()=>{this.setState({show:!this.state.show})}}>submit</button>
      </div>
    )
  }
}

export default LifeCycle
