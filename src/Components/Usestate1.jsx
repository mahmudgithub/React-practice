import React,{useState} from 'react'

export const Usestate1 = () => {
    const [x, setX] = useState(1)
    return (
        <div>
            <input onChange={(e)=> setX (e.target.value)}type='number'/>
            <h1>{x}</h1>
        </div>
    )
}
export default Usestate1;