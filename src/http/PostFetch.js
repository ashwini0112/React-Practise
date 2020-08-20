import React, { Component } from 'react'

class PostFetch extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            quantity:'',
            count:''

        }
    }
    submit(){
        console.log(this.state)
        let url='http://demo9637653.mockable.io/dashboards';
        let data=this.state;
        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json', 
            },
            body:JSON.stringify (data)
        }).then((result)=>{
            result.json().then((resp)=>{
                
                console.warn("resp", resp)
            })
        })
    }

    render(){
        return(
            <div>
                <h3>
                    Post Request using Fetch
                </h3>
                
                    <div>
                        <input type="text" value={this.state.name} name="name" 
                        onChange={(data)=>{this.setState({name:data.target.value})}}/>
                    </div>
                    <div>
                        <input type="text" value={this.state.quantity} name="quantity"
                        onChange={(data)=>{this.setState({quantity:data.target.value})}}/>
                    </div>
                    <div>
                        <input type="text" value={this.state.count} name="count"
                        onChange={(data)=>{this.setState({count:data.target.value})}}/>
                    </div>
                    <div>
                        <button onClick={()=>{this.submit()}}>Submit</button>
                    </div>
                
            </div>
        )
    }
}


export default PostFetch