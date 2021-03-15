import Axios from "axios";
import React, { useEffect, useState } from "react";

const SearchFilter = () => {
  const [country, setcountry] = useState([]);
  const [search, setsearch] = useState("");
  useEffect(() => {
    const lol = async () => {
      await Axios({
        method: "get",
        url: "https://restcountries.eu/rest/v2/all",
      })
        .then((res) => {
          setcountry(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    lol();
  }, []);
  const update = country.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div>
      <h1>i am filter one</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => {
          setsearch(e.target.value);
        }}
      />
      <ul>
        {update.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchFilter;
