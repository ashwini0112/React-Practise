import React, { Component } from 'react'

class Ternary extends Component{
    constructor(){
        super()
        this.state = {
            isLogged:true
        }
    }
    render(){
        return this.state.isLogged?(
            <div>Welcome Ashwini</div>
        ):(
            <div>Welcome Guest</div>
        )
    }
}

export default Ternary