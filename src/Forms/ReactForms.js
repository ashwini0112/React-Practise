import React, { Component } from 'react'

class ReactForm extends Component{
     constructor(){
         super()
         this.state = {
             username : ''
         }
     }

     changeHandler = (event)=>{this.setState({username:event.target.value})}

     render(){
         return (
             <div>
                 <h2>Form</h2>
         <h3>Hello {this.state.username}</h3>
          <form>
              <input type="text" onChange={this.changeHandler}/>
          </form>   
          </div>
         )
     }

     onchangeHandler=(event)=>{this.setState({username:event.target.value})}


     render(){
         let header='';
         if(this.state.username){
         header = <h1>Hello {this.state.username}</h1>;
         }
         else{
             header = '';
         }
         return(
             <div>
                 <div> <h2>Form</h2></div>
                
                 <form>
                     {header}
                     <input type="text" onChange={this.onchangeHandler}/>
                 </form>
             </div>
         )
     }


     mySubmitHandler = (event) => {
         event.preventDefault();
         alert("You are submitting " + this.state.username);
       }
       myChangeHandler = (event) => {
         this.setState({username: event.target.value});
       }
       render() {
         return (
           <form onSubmit={this.mySubmitHandler}>
           <h1>Hello {this.state.username}</h1>
           <p>Enter your name</p>
           <input type='text' onChange={this.myChangeHandler}
           />
           <input type='submit' />
           </form>
         );
       }


    
    





}

export default ReactForm