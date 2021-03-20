// import Axios from "axios";
// import React, { useEffect, useState } from "react";

// const MorePactics = () => {
//   const [countris, setcountris] = useState([]);
//   const [search, setsearch] = useState("");

//   useEffect(() => {
//     const lol = async () => {
//       await Axios({
//         method: "get",
//         url: "https://restcountries.eu/rest/v2/all",
//       })
//         .then((res) => {
//           setcountris(res.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//     lol();
//   }, []);
//   const update = countris.filter((item) => {
//     return item.name.toLowerCase().includes(search.toLowerCase());
//   });
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="search..."
//         onChange={(e) => {
//           setsearch(e.target.value);
//         }}
//       />
//       <button
//         onclick={() => {
//           search();
//         }}
//       >
//         Search
//       </button>
//       {update.map((item, index) => {
//         return <li key={index}>{item.name}</li>;
//       })}
//     </div>
//   );
// };

// export default MorePactics;
