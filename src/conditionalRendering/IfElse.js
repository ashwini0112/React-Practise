import React, { Component } from 'react'

class IfElse extends Component{
    constructor(){
        super()
        this.state = {
        isLogged:false

        }
    }
    render(){
        if(this.state.isLogged){
            return <div>Welcome Ashwini</div>
        }
        else{
            return <div>Welcome Prema</div>
        }
        
    }
}

export default IfElse