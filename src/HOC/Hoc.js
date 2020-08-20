import React, { Component } from 'react'

class Hoc extends Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    incrementCount = ()=>{
        this.setState(prevState=>{
            return { count:prevState.count+1}
        })
    }
    render(){
        const { count} = this.state
        return(
            <div>
                <h3>HOC</h3>
                <button type="submit" onClick={this.incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default Hoc