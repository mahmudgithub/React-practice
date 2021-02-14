// import React,{useState,useEffect} from 'react'

// const HookuseEffect = () => {
//     const [count, setcount] = useState(0)
//     useEffect(()=>{
//         document.title=`count: ${count}`
//     })
//     return (
//         <div>
//             {count}
//             <button onClick={()=>setcount(count+1)}>click to incrise</button>
//         </div>
//     )
// }

// export default HookuseEffect


// import React,{useState,useEffect} from 'react'

// const HookuseEffect = () => {
//     const [count, setcount] = useState('mahmud')
//     useEffect(()=>{
//         document.title= `hi:${count}`
//     })
//     return (
//         <div>
//             {count}
//             <br/>
//             <button onClick={()=>setcount('hossain')}>click to chnage</button>
//         </div>
//     )
// }

// export default HookuseEffect


// import React,{useState,useEffect} from 'react'

// const HookuseEffect = () => {
//     const [change, setchange] = useState('type anything')
//     useEffect(()=>{
//         document.title=`type: ${change}`
//     })
//     return (
//         <div>
//             {change}
//             <br/>
//             <input value={change} onChange={(e)=>setchange(e.target.value)} type="text"/>
//         </div>
//     )
// }

// export default HookuseEffect


// import React,{useState,useEffect} from 'react'

// const HookuseEffect = () => {
//     const [count, setcount] = useState(0)
//     const [names, setnames] = useState('')
//     useEffect(()=>{
//         document.title=`count:${count}`
//         console.log(`Effect run`);
//     },[names])
//     return (
//         <div>
//             <h1>my name is:{names}</h1>
//             <input value={names} onChange={(e)=>setnames(e.target.value)}ype="text"/>
//             <br/>
//             vaue:{count}<br/>
//             <button onClick={()=>setcount(count+1)}>incrise values </button>
//         </div>
//     )
// }

// export default HookuseEffect

// import React,{useState,useEffect} from 'react'

// const HookuseEffect = () => {
//     const [one, setone] = useState(0)

//     useEffect(() => {
//         document.title=`value:${one}`
//         console.log('test');
//     },[])
//     return (
//         <div>
//            value: {one}
//             <br/>
//             <button onClick={()=>setone(one+1)}>click to count</button>
//         </div>
//     )
// }

// export default HookuseEffect

// import React,{useState,useEffect} from 'react'

// const HookuseEffect = () => {
//     const [x, setX] = useState(0)
//     const [y, setY] = useState(0)


//     const LogMouseMove=(e)=>{
//         console.log('mouse move');
//         setX(e.clientX)
//         setY(e.clientY)
//     }
//     useEffect(() => {
//         console.log('efect run');
//         window.addEventListener('mousemove',LogMouseMove)

//     }, [])
//     return (
//         <div>
//             x-:{x} and y-:{y}
//         </div>
//     )
// }

// export default HookuseEffect

