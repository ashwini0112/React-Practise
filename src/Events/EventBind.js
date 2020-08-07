import React, { Component } from 'react'

class EventBind extends Component{
    constructor(){
        super()
        this.state={
            message:'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:'GoodBye'
        })
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>click me</button> */}
                <button onClick={this.clickHandler}>Click ME</button>
            </div>
        )
    }

}
export default EventBind