import React, { useState } from 'react'
import './App.css';


const App=()=>{
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)
  const addNumber=()=>{
    const resultdata= parseInt(num1) + parseInt(num2)
    setResult(resultdata)
  }
  return (
<div>
<input onChange={(e)=>setNum1(e.target.value)}type="number"/>
<input onChange={(e)=>setNum2(e.target.value)}type="number"/>
<button onClick={addNumber}>Add</button>
<h1>{num1}</h1>
<h1>{num2}</h1>
<h1>result : {result}</h1>

</div> 
  )
}

export default App;
