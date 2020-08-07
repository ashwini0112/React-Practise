import React from 'react'
import { render } from '@testing-library/react'

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello JSX</h1>
    //     </div>
    // )
    return React.createElement('div', null, React.createElement('h1',null,'Hello JSX'))
}
export default Hello