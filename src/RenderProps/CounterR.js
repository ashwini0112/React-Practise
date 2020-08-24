import React, { Component } from 'react'

class  CounterR extends Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }

    incrementHandler = ()=>{
        this.setState(prevState=>{
            return { count:prevState.count+1}
        })

    }
    render(){
        return(
            <div>
                { this.props.render(this.state.count, this.state.incrementHandler)}
            </div>
        )
    }
} 

export default CounterR