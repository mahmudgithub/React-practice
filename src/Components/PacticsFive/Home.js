// import Axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Country from './Country'

// const Home = () => {
//     const [countries, setCountries] = useState([])
//     useEffect(()=>{
//         const lol=async()=>{
//             await Axios({
//                 method:'get',
//                 url:'https://restcountries.eu/rest/v2/all'
//             }).then((res)=>{setCountries(res.data)}).catch((err)=>{console.log(err);})
//         }
//         lol()

//     },[])
//     return (
//         <div>
//             <h1>Total country: {countries.length}</h1>
//             {
//                 // countries.map(item=> <Country key={item} country1={item}></Country>)
                
//                 countries.map((item,index)=>{return <Country key={index} country1={item}></Country>})
//             }
//         </div>
//     );
// }

// export default Home








