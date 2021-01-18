import React from 'react'
import { Five } from './Five'


export const Fourth = (props) => {

    return (
        <div>
          <p>name:{props.name}</p>  
          <p>city:{props.city}</p>  
          <p>roll:{props.roll}</p>  
            <Five/>
        </div>
    )
}
export default Fourth;