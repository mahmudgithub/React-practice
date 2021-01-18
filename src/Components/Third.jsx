import React,{useState} from 'react'
import { Fourth } from './Fourth'

export const Third = () => {
    const [x, setX] = useState(1)
    return (
        <div>
            {/* <input onChange={(e)=> setX (e.target.value)}type='number'/>
            <h1>{x}</h1>
            <Fourth/> */}
        </div>
    )
}
export default Third;