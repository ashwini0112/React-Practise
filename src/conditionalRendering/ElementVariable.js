import React, { Component } from 'react'

class ElementVariable extends Component{

    constructor(){
        super()
        this.state={
            isLogged:false
        }
    }
    render(){
        
        let message
        if(this.state.isLogged){
            message=<div>Welcome Ashwini</div>
        }
        else{
            message=<div>Welcome Guest</div>
        }
        return <div>{message}</div>
    }
}

export default ElementVariable