import React from 'react'

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <p>{item.text}
                <button type="submit" onClick={()=> props.deleteItem(item.key)}>
                    Delete
                </button>
                </p>
         </div>
    })
    return(
        
        <div>
            {listItems}
            </div>
    )
}

export default ListItems