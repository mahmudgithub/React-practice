// import Axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const Async = () => {
//     const [bio, setbio] = useState([])
//     useEffect(() => {
//         setTimeout(()=>{
//             const one=async()=>{
//                 await Axios({
//                     method:'get',
//                     url:'https://jsonplaceholder.typicode.com/photos'
//                 }).then((res)=>{console.log(res.data);  setbio(res.data)})
//                 .catch((err)=>{setbio(err.message)})

//             }
//             one()

//         },3000)
//     }, [])


//     return (
//         <div>
            
//             <ul>
//                 {
//                 bio.map((item,index)=>{return <li key={index}>{item.title}</li>})
//                 }
//              </ul>
//         </div>
//     )
// }

// export default Async


// import Axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const Async = () => {
//     const [info, setinfo] = useState([])
//     useEffect(()=>{
//         setTimeout(()=>{
//             const two=async()=>{
//                 await Axios({
//                     method:'get',
//                     url:'https://jsonplaceholder.typicode.com/users'
//                 })
//                 .then((res)=>{setinfo(res.data)})
//                 .catch((err)=>{setinfo(err.message)})

//             }
//             two()

//         },5000)
//     },[])
//     return (
//         <div>
//             <ul>
//                 {
//                     info.map((item,index)=>{return <li>{item.name}</li>})
//                 }
//             </ul>
//         </div>
//     )
// }

// export default Async
