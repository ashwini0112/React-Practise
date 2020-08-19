import React, { Component } from 'react'

class GetFetch extends Component{
    constructor(){
        super()
        this.state={
            data:false
        }
    }
    componentDidMount(){
        let url = 'https://jsonplaceholder.typicode.com/todos/1';
        
        fetch(url,{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json', 
            }
        }).then((result)=>{
            result.json().then((resp)=>{
                
                this.setState({data:resp})
            })
        })
    }
    render(){
         const data = this.state.data;
        console.warn(data);
        return(
            <div>
                 <h3>Get Request using fetch</h3>
                {
                    data ?
                    <div>
                        <h1>
                            Name : {data.title  }
                        </h1>
                    </div>
                    :   <p>Please wait</p>
                }
               
            </div>
        )
    }
}


export default GetFetch