// import React, { Component } from 'react'

// export class HookuseState extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count:0
//         }
//         this.lol=this.lol.bind(this)
//     }
    
//     lol=()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }
//     render() {
//         console.log(this.state.count);
//         return (
//             <div>
//                 {this.state.count}
//                 <br/>
//                 <button onClick={()=>this.lol()}>click to incrise value</button>
                
                
//             </div>
//         )
//     }
// }

// export default HookuseState


// import React,{useState} from 'react'

// const HookuseState = () => {
//     const [counter, setCounter] = useState(0)
//     return (
//         <div>
//             {counter}
//             <button onClick={()=>setCounter(counter+1)}>click to update</button>
//         </div>
//     )
// }

// export default HookuseState

// import React,{useState} from 'react'

// const HookuseState = () => {
//     const [count, setCount] = useState(0)
//     return (
//         <div>
//             {count}
//             <br/>
//             <button onMouseOver={()=>setCount(count+10)}>click to update</button>
//         </div>
//     )
// }

// export default HookuseState

// import React,{useState} from 'react'

// const HookuseState = () => {
//     const [count, setCount] = useState(0)
//     const lol=()=>{
//             setCount(count+10) 
//     }
//     return (
//         <div>
//             {count}
//             <button onClick={()=>lol()}>click to update</button>
//         </div>
//     )
// }

// export default HookuseState

// import React,{useState} from 'react'

// const HookuseState = () => {
//     const [dod, setDod] = useState()
//     const lol=()=>{
//         let x=10;
//         let y=10;
//         let sum=x+y;
//         setDod(sum+1)
//     }

//     return (
//         <div>
//             {dod}
//             <button onClick={()=>lol()}>click to change</button>
//         </div>
//     )
// }

// export default HookuseState


// import React,{useState} from 'react'

// const HookuseState = () => {
//     const [inpu, setInpu] = useState({
//         name:'',
//         city:''
//     })
//     return (
//         <div>
//            {/* hi: {inpu} */}
//            <form>
//            <input value={inpu.name} onChange={(e)=>setInpu({...inpu, name: e.target.value})}/>
//            <input value={inpu.city} onChange={(e)=>setInpu({...inpu, city:e.target.value})}/>
//            </form>
//            name: {inpu.name}
//            <br/>
//            city: {inpu.city}
//         </div>
//     )
// }

// export default HookuseState


// import React, {useState} from 'react'  


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


// import React,{useState} from 'react'

// const HookuseState = () => {
//     const [inpu, setInpu] = useState({
//         name:'',
//         city:'',
//         roll:''
//     })
//     return (
//         <div>
//            {/* hi: {inpu} */}
//            <form>
//            <input value={inpu.name} onChange={(e)=>setInpu({...inpu, name: e.target.value})}/>
//            <input value={inpu.city} onChange={(e)=>setInpu({...inpu, city:e.target.value})}/>
//            <input value ={inpu.roll} onChange={(e)=>setInpu({...inpu,roll: e.target.value})}/>
//            </form>
//            name: {inpu.name}
//            <br/>
//            city: {inpu.city}
//            <br/>
//            roll:{inpu.roll}
//         </div>
//     )
// }

// export default HookuseState


// import React,{useState} from 'react'

// const HookuseState = () => {
//     const [sos, setSos] = useState({
//         name:'',
//         roll:''
//     })
//     return (
//         <div>
            
//             <input onChange={(e)=>setSos({...sos,name: e.target.value})} type="text"/>{sos.name}<br/>
//             <input onChange={(e)=>setSos({...sos,roll: e.target.value})} type="text"/>{sos.roll}
//         </div>
//     )
// }

// export default HookuseState

// import React,{useState} from 'react'

// const HookuseState = () => {
//     const [one, setOne] = useState(0)

//     const lol=()=>{
//         setOne(one+1)
//     }
//     return (
//         <div>
//             {one}
//             <button onClick={()=>lol()}>click to change</button>
//         </div>
//     )
// }

// export default HookuseState

// import React,{useState} from 'react'

// const HookuseState = () => {
//     const [two, setTwo] = useState(0)
//     const lol=()=>{
        
//         let x=10;
//         let y=10;
//         let sum=x+y;
//         setTwo(sum);
        
//     }
//     return (
//         <div>
//             {two}
//             <button onClick={()=>lol()}>click to change</button>
//         </div>
//     )
// }

// export default HookuseState


// import React,{useState} from 'react'

// const HookuseState = () => {
//     const [count, setCount] = useState({
//     start:'mahmud',
//     end:'hossain'
//     })

//     return (
//         <div>
//             {count.start} + {count.end}
//             <br/>
//             <input value={count.start} onChange={(e)=>setCount({...count,start: e.target.value})} type="text"/>
//             <input value={count.end} onChange={(e)=>setCount({...count,end:e.target.value})} type="text"/><br/>
            
//         </div>
//     )
// }

// export default HookuseState

// import React,{useState} from 'react'

// const HookuseState = () => {
//     const [obj, setObj] = useState({
//         name:'',
//         city:''
//     })
//     return (
//         <div>
//             {obj.name} and {obj.city}
//             <input value={obj.name} onChange={(e)=> setObj({...obj,name:e.target.value})}type="text"/>
//             <input value={obj.city} onChange={(e)=> setObj({...obj,city:e.target.value})}type="text"/>
//         </div>
//     )
// }

// export default HookuseState

// import React,{useState} from 'react'

// const HookuseState = () => {
//     const [arr, setarr] = useState([1,2,3,4,5,6])
//     return (
//         <div>
            
//                 {
//                     arr.map((list, index)=>{
//                     return <li>{list}</li>
//                     })
//                 }
            
            
            
//         </div>
//     )
// }

// export default HookuseState


// import React,{useState} from 'react'

// const HookuseState = () => {
//     const [arr, setarr] = useState(['mahmud','hossain','lamyaa','nowsin'])
//     return (
//         <div>{
            
//             arr.map((arr,index)=>{
//                 console.log(...arr);
//                 return (<li key={index}>{arr}</li>) 

//             })
//         }
//         </div>
//     )
// }

// export default HookuseState

