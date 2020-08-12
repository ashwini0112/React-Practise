import React, { Component } from 'react'

class Unmounting extends Component{
   constructor(){
       super()
       this.state={
           show:false
        }
   }
    render(){
        
        return( 
        <div>
            <h1>Component Unmount</h1>
            {this.state.show?<Child />:null}
            <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle</button>
        </div>
        )}
}


class Child extends React.Component{
    componentWillUnmount(){
        console.warn("Removeed");
    }
    render(){
        return <h3>Child Component</h3>
    }
}

export default Unmounting