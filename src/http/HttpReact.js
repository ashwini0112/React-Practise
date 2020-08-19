import React, { Component } from 'react'

import axios from 'axios'

class HttpReact extends Component{
    constructor(){
        super()
        this.state = {
            posts:[],
            errorMsg:''
        }
    }
    componentDidMount(){
        axios.get('http://demo5123090.mockable.io/widgets1')
        .then(Response=>{
            console.log(Response)
            this.setState({posts:Response.data})
            
        })
        .catch(error =>{
            console.log(error)
            this.setState({errorMsg:'Error Retriving data'})
        })
    }

    render(){
        const { posts, errorMsg } = this.state
        return (
            <div>
                List Names{
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.name}</div>):null
                }
                {
                    errorMsg?<div> {errorMsg}</div>:null
                }
            </div>
        )
    }

}

export default HttpReact