// import Axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// const Country = (props) => {
//     const [country2, setCountry2] = useState([])
//     useEffect(()=>{
//         const sos=async()=>{
//         await Axios({
//             method:'get',
//             url:'https://restcountries.eu/rest/v2/name/${name}'
//         }).then((res)=>{setCountry2(res.data)})
//         .catch((err)=>{console.log(err);})
//         }
//         sos()
//     },[])
//     return (
//         <div>
//             {/* {country.map((item,index)=>{return <li key={index}>{item.bangladesh}</li>})} */}
//             {props.country1.name}<br/>
//            {/* city: {props.capital}<br/> */}
//             <button><Link to={'/country/${name}'}>More about {props.country1.name}</Link></button>
//         </div>
//     )
// }

// export default Country


















import React from 'react'

const Country = () => {
    return (
        <div>
            
        </div>
    )
}

export default Country
