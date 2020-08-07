import React, { Component } from 'react'

class Statewelcome extends Component{
    
        constructor(){
            super()
               this.state = {
                message:'Welcome State'
            }
        }
        changeMessage(){
            this.setState({
                message:'Thank You'
            }
            )}
        render(){
        return(
        <div>
            <h1>{  this.state.message }</h1>
            <button onClick={()=> this.changeMessage()}>Subscribe</button>

        </div>
        )  
        }
    }


export default Statewelcome
