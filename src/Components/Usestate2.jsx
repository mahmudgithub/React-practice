import React,{useState} from 'react'


export const Usestate2 = () => {
    const [x, setX] = useState(0)
   

    return (
        <div>
            
        <button onClick={()=>setX(x+1)} type='number'>+</button>
        <h1>{x}</h1> 
        <button onClick={()=>setX(x-1)} type='number'>-</button>
            
        </div>
    )
}
export default Usestate2;