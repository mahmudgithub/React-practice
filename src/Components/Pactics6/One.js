// import Axios from 'axios'
// import { ajaxSettings } from 'jquery'
// import React, { useEffect, useState } from 'react'

// const One = () => {
//     const [country, setcountry] = useState([])
//     const [update, setupdate] = useState('')
//     const [filter, setfilter] = useState([])
//     useEffect(()=>{
//         const lol=async()=>{
//             await Axios({
//                 method:'get',
//                 url:'https://restcountries.eu/rest/v2/all'
//             })
//             .then((res)=>{console.log(res.data);  setcountry(res.data)})
//             .catch((err)=>{console.log(err);})
//         }
//         lol()
//     },[])
//     useEffect(()=>{
//         setfilter(
//             country.filter((item)=>{return item.name.toLowerCase().includes(update.toLowerCase())})
//         )
        

//     },[country,update])
//     // const search=country.filter((item)=>{return item.name.toLowerCase().includes(update.toLowerCase())})
//     return (
//         <div>
//             <input type='text' placeholder='searce...' onChange={(e)=>{setupdate(e.target.value)}}/>
//             {
//                 filter.map((item,index)=>{return <li key={index}>{item}</li>})
//             }
//         </div>
//     )
// }

// export default One
    

// import React from 'react'

// const One = (props) => {
//     return (
//         <div>
//             my name is {props.name}
//         </div>
//     )
// }

// export default One

import Axios from 'axios'
import React, { useEffect, useState } from 'react'

const One = () => {
    const [country, setcountry] = useState([])
    const [uniq, setuniq] = useState([])
    useEffect(()=>{
        const lol=async()=>{
            await Axios({
                method:'get',
                url:'https://restcountries.eu/rest/v2/all'
            })
            .then((res)=>{setcountry(res.data)})
            .catch((err)=>{console.log(err);})
        }
        lol()
    },[])
    return (
        <div>
            <ul>
                {/* {
                    country.map((item,index)=>{return <li key={index}>{item.name}</li>})
                } */}
                {
                    country.filter((item2)=>{ return item2==='Bangladesh'})
                }
            </ul>
        </div>
    )
}

export default One
