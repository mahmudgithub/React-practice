import React,{useState} from 'react'
import { Five } from './Five'


export const Fourth = () => {
    const [number, setNumber] = useState(0)
    return (
        <div>
            <Five/>
            <input onChange={(e)=>setNumber(e.target.value)} type="number"/>
            {number}
        </div>
    )
}
export default Fourth;