// import React,{useState} from 'react'

// export const Usestate1 = () => {
//     const [x, setX] = useState(1)
//     return (
//         <div>
//             <input onChange={(e)=> setX (e.target.value)}type='number'/>
//             <h1>{x}</h1>
//         </div>
//     )
// }
// export default Usestate1;

// import React, { useState } from 'react'

// const Usestate1 = () => {
//     const [count, setCount]= useState(0)
//     return (
//         <div>
//             value: {count}
//             <br/>
//             <button className='btn btn-primary' onClick={()=>setCount(count+1)}>click to add</button>
//         </div>
//     )
// }

// export default Usestate1

    // import React, { useState } from 'react'
    
    // const Usestate1 = () => {
    //     const [count , setCount]=useState(0)
    //     return (
    //         <div>
    //           count:  {count}
    //           <br/>
    //           <button onClick={()=>setCount(count+1)}>Click to add</button>
    //         </div>
    //     )
    // }
    
    // export default Usestate1
    
    // import React, { useState } from 'react'
    
    // const Usestate1 = () => {
    //     const [count,  setCount]=useState(0)
    //     return (
    //         <div>
    //             count: {count}
    //             <br/>
    //             <button className='btn btn-primary'onClick={()=>setCount(count+1)}>click to add</button>
    //         </div>
    //     )
    // }
    
    // export default Usestate1
    


    // import React, { useState } from 'react'
    
    // const Usestate1 = () => {
    //     const [count, setCount]=useState(0)
    //     return (
    //         <div>
    //             count: {count}
    //             <br/>
    //             <button onClick={()=>setCount(count+1)}>click to add</button>


    //         </div>
    //     )
    // }
    
    // export default Usestate1
    
    // import React, { useState } from 'react'
    
    // const Usestate1 = () => {
    //     const [count, setCount]=useState(0)
    //     return (
    //         <div>
    //             count: {count}
    //             <br/>
    //             <button className='btn btn-primary' onClick={()=>setCount(count+10)}>click to add</button>
    //         </div
    //         >
    //     )
    // }
    
    // export default Usestate1
    

//     import React, {useState} from 'react'  


//  export const Usestate3 = () => {
//      const [num1, setNum1] = useState()
//      const [num2, setNum2] = useState()
//      const [resultt, setResult] = useState()
//      const add=()=>{
//          const sum= parseInt(num1) + parseInt(num2)
//          setResult(sum)
//      }
    

//     return (
//         <div>
// <input onChange={(e)=>setNum1(e.target.value)} type='number'/>
// {num1}
// <input onChange={(e)=>setNum2(e.target.value)} type='number'/>
// {num2}
// <button onClick= {add}> add</button>
// <h1>result: {resultt}</h1>
//         </div>
//     )
// }
// export default Usestate3;


// import React, { useState } from 'react'

// const Usestate1 = () => {
//     const [count, setCount]=useState(0)
//     return (
//         <div>
//             count: {count}
//             <button onClick={()=>setCount(count+1)}>click to add</button>
//         </div>
//     )
// }

// export default Usestate1

import React, { useState } from 'react'

const Usestate1 = () => {
    const [info, setInfo]=useState({
        name:'',
        roll: ''
    })
    return (
        <div>
            <input style={{border:'solid 3px blue', margin:'5px', backgroundColor:'skyblue',color:'red'}}value={info.name} onChange={(e)=>setInfo({...info,name:e.target.value}) } type="text"/>
            <input style={{border:'solid 3px blue', margin:'5px', backgroundColor:'skyblue', color:'white'}} value={info.roll} onChange={(e)=>setInfo({...info, roll:e.target.value})} type="number"/>
            <br/>
            nam: {info.name} <br/> roll: {info.roll}
        </div>
    )
}

export default Usestate1

