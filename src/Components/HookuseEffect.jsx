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


import React,{useState,useEffect} from 'react'

const HookuseEffect = () => {
    const [count, setcount] = useState(0)
    const [names, setnames] = useState('')
    useEffect(()=>{
        document.title=`count:${count}`
        console.log(`Effect run`);
    },[names])
    return (
        <div>
            <h1>my name is:{names}</h1>
            <input value={names} onChange={(e)=>setnames(e.target.value)}ype="text"/>
            <br/>
            vaue:{count}<br/>
            <button onClick={()=>setcount(count+1)}>incrise values </button>
        </div>
    )
}

export default HookuseEffect
