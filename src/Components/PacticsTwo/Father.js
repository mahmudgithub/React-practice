import React from 'react'
import Son from './Son'

const Father = (props) => {
    return (
        <div>
            <h1>hello i am father</h1>
            <Son one={props.name}/>
        </div>
    )
}

export default Father
