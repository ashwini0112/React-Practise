import React from 'react'

function EventFunction(){
    function ClickHandler(){
        alert("hello");
    }
    return <button onClick={ClickHandler}>Click Me</button>
}
export default EventFunction