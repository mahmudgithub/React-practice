import React, {useState} from 'react'  


 export const Usestate3 = () => {
     const [num1, setNum1] = useState()
     const [num2, setNum2] = useState()
     const [resultt, setResult] = useState()
     const add=()=>{
         const sum= parseInt(num1) + parseInt(num2)
         setResult(sum)
     }
    

    return (
        <div>
<input onChange={(e)=>setNum1(e.target.value)} type='number'/>
{num1}
<input onChange={(e)=>setNum2(e.target.value)} type='number'/>
{num2}
<button onClick= {add}> add</button>
<h1>result: {resultt}</h1>
        </div>
    )
}
export default Usestate3;