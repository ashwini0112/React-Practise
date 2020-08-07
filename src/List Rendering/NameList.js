import React, { Component } from 'react'

function NameList(){
    const Names = 
    [
        {
            id:1,
            name:'Ashwini'
        },

        {
            id:2,
            name:'XYZ'
        },
        {
            id:3,
            name:'ABC'
        }
    ]
        
const NameList = Names.map(name=><h2>{name.id},{name.name}</h2>)
return (
    <div>
        {
            NameList
        }
        
        </div> 
)
        
    }

    export default NameList