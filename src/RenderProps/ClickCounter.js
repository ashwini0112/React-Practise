import React, { Component } from 'react'

class ClickCounter extends Component{
    

    render(){
        const { count, incrementHandler } = this.props
        return <button onClick={incrementHandler}>Clicked {count} Times</button>
    }
}

export default ClickCounter