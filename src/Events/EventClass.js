import React, { Component } from 'react'

class EventClass extends Component{
    ClickHandler(){
        console.log("button clicked");
    }
    render(){
        return(
            <div>
                <button onClick={this.ClickHandler}>Click</button>
            </div>
        )
    }
}

export default EventClass