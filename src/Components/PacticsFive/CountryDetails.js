// import Axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router'

// const CountryDetails = () => {
//     const [details, setDetails] = useState([])
//     const {countryName}=useParams()
//     useEffect(()=>{
//         const tos=async()=>{
//             await Axios({
//                 method:'get',
//                 url:'https://restcountries.eu/rest/v2/name/${countryName}'
//             }).then((res)=>{setDetails(res.data)}).catch((err)=>{console.log(err);})
//         }
//         tos()

//     },[])
// const {capital,region}=details
//     return (
//         <div>
//             <h1>country:{countryName}</h1>
//         </div>
//     )
// }

// export default CountryDetails
















import React from 'react'

const CountryDetails = () => {
    return (
        <div>
            
        </div>
    )
}

export default CountryDetails
