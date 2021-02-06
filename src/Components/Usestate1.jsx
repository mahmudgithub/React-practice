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
    
    import React, { useState } from 'react'
    
    const Usestate1 = () => {
        const [count, setCount]=useState(0)
        return (
            <div>
                count: {count}
                <br/>
                <button className='btn btn-primary' onClick={()=>setCount(count+1)}>click to add</button>
            </div
            >
        )
    }
    
    export default Usestate1
    