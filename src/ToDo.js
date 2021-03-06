import React, { Component } from 'react'
import ListItems from './ListItems'
 class ToDo extends Component{
     constructor(){
         super()
         this.state={
             items:[],
             currentItem:{
                 text:'',
                 key:''
             }
         }
         this.handleInput = this.handleInput.bind(this);
         this.addItem = this.addItem.bind(this);
         this.deleteItem = this.deleteItem.bind(this);
     }
     handleInput(e){
         this.setState({
             currentItem:{
                 text:e.target.value,
                 key:Date.now()
             }
         })
     }
     addItem(e){
         e.preventDefault();
         const newItem = this.state.currentItem;
         
         if(newItem.text!==""){
             const newItems = [...this.state.items, newItem];
             this.setState({
                 items:newItems,
                 currentItem:{
                     text:'',
                     key:''
                 }
             })

         }
         

     }
     deleteItem(key){
         const filteredItems = this.state.items.filter(item=>item.key!==key);
         this.setState({
             items:filteredItems
         })
     }

     render(){
         return(
             <div>
                 <h3>ToDo List</h3>
                 <form onSubmit={this.addItem}>
                     
                     <input type="text" placeholdedr="enter sample text" value={this.state.currentItem.text} onChange={this.handleInput} />
                     <button type="submit">Add</button>
                 </form>
                 <ListItems items = {this.state.items} deleteItem = {this.deleteItem}>
                    

                 </ListItems>
             </div>
             
         )
     }
 }


 export default ToDo