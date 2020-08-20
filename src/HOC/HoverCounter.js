import React, { Component } from 'react'

class HoverCounter extends Component{
    constructor(){
        super()
        this.state = {
            count:0
         
        }
    }
    incrementedCount=()=>{
        this.setState(prevCount=>{
            return { count:prevCount.count+1}
        })
    }
    render(){
        const { count } = this.state
        return(
            <div>
                <h3 onMouseOver={this.incrementedCount}>Hover {count} Counter</h3>
            </div>
        )
    }
}
export default HoverCounter