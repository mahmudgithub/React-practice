// import axios from 'axios'
import Axios from "axios";
import React, { useEffect, useState } from "react";

const Style3 = () => {
  const [state, setstate] = useState([]);
//   const [loding, setloding] = useState(false);
  const [search, setsearch] = useState('')
  useEffect(() => {
    // setloding(true);
    const lol = async () => {
      await Axios({
        method: "get",
        url: "https://restcountries.eu/rest/v2/all",
      })
        .then((res) => {
          console.log(res.data);
          setstate(res.data);
        //   setloding(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    lol();
    // axios
    // .get('https://restcountries.eu/rest/v2/all')
    // .then(res=>{
    //     setstate(res.data);
    //     setloding(false)
    // })
    // .catch(err=>{console.log(err);
    // })
  }, []);
//   if (loding) {
//     return <p>loding country....</p>;
//   }
  const filteredCountries=state.filter((item)=>{
      return item.name.toLowerCase().includes(search.toLocaleLowerCase())
  })
  return (
    <div>
      <h1>country names</h1>
      {/* <input type='text' placeholder='Search'></input> */}
      {/* {search} */}
      <input onChange={(e)=>{setsearch(e.target.value)}}type="text" placeholder='Search'/>
      <ul>
      {
        // state.map((item,index)=>(< CountryDetail key={index} {...item}/>))
        filteredCountries.map((item, index) => {return <li key={index}> {item.name}</li>;})
      }
      </ul>

    </div>
  );
};
// const CountryDetail=({name,flag})=>{return
//     (
//         <>
//         <p>
//         <img src={flag} alt={name} style={{width:'50px',height:'30px'}}></img>
//         </p>
//         <p>{name}</p>
//         </>

//     )}

export default Style3;
