import Axios from "axios";
import React, { useEffect, useState } from "react";

const MorePactics = () => {
  const [countris, setcountris] = useState([]);
  useEffect(() => {
    const lol = async () => {
      await Axios({
        method: "get",
        url: "https://restcountries.eu/rest/v2/all",
      })
        .then((res) => {
          setcountris(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };lol()
  },[]);
  return (
    <div>
      {countris.map((item, index) => {
        return <li key={index}>{item.name}</li>;
      })}
    </div>
  );
};

export default MorePactics;
