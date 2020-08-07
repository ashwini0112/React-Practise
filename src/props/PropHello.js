import React from 'react'

const propHello = props=>{
    return(
        <div>
            <h1>Functional Props</h1>
    <h1>Hello { props.name}</h1>
        {props.children}
    </div>
    )
    
}
export default propHello