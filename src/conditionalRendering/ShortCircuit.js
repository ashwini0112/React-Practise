import React, { Component } from 'react'

class ShortCircuit extends Component{
    constructor(){
        super()
        this.state ={
        isLogged:true
        }
    }
    render(){
        return this.state.isLogged && <div>Welcome Ashwini</div>
    }
}

export default ShortCircuit