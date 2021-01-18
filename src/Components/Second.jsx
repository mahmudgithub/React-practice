import React,{useState} from 'react'  //import useState library
import { Third } from './Third'

export const Second = () => {
    const [num, setnum] = useState(0)  //num is variable name, useState(0) is initial value of num variable  and setNum use to change variable value
    return (
        <div>
            <input onChange={(e)=>setnum(e.target.value)}type='number'/> e is event and total ta anonomus function
            {num}  //{num} is output 
            <Third/>
        </div>
    )
}
export default Second;