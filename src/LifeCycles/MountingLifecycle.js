import React, { Component } from 'react'

class MountingLifecycle extends Component{
    // constructor(){
    //     super()
    //         this.state = {

    //         name:'Ashwini'
    //     }
    //     console.log('Constructor')
    // }
    // static getDerivedStateFromProps(props,state){
    //     console.log('getDerivedStateFromProps')
    //     return null
    // }
    // componentDidMount(){
    //     console.log('componentDidMount')
    // }
    // render(){
    //     console.log('Render')
    //     return( 
    //     <div>
    //     <div>LifeCycle A</div>
        
    //     </div>
    //     )
    // }

    constructor(props){
        super(props)
        this.state={
            favColor:'Blue'
        }
    }

    // static getDerivedStateFromProps(props, state){
    //     return {favColor:props.favtColor}
    // }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({favColor:'yellow'})
        }, 1000)
    }

    render(){
        return <div>my Favcolor is {this.state.favColor}</div>
    }












}

export default MountingLifecycle