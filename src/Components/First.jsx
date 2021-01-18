import React,{useState} from 'react'
import { Second } from './Second'

export const First = () => {
    const [x, setX] = useState(0)
   

    return (
        <div>
{/*             
            <button onClick={(e)=>setX(x+1)} type='number'>+</button>
            <h1>{x}</h1> 
            <button onClick={(e)=>setX(x-1)} type='number'>-</button>
             */}
            
            <Second/>
        </div>
    )
}
export default First;