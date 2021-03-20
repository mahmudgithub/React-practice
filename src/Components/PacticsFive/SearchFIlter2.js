import Axios from "axios";
import React, { useEffect, useState } from "react";
import Extra from "./Extra";

const SearchFIlter2 = () => {
  const [countris, setcountris] = useState([]);
  const [search, setsearch] = useState("");
  const [filterCountries, setfilterCountries] = useState([]);
  useEffect(() => {
    const lol = async () => {
      await Axios({
        mathod: "get",
        url: "https://restcountries.eu/rest/v2/all",
      })
        .then((res) => {
          setcountris(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    lol();
  }, []);

  useEffect(() => {
    setfilterCountries(
      countris.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, countris]);

  return (
    <div>
        <h1>i am filter two</h1>
      <input
        type="text"
        placeholder="search country"
        onChange={(e) => {
          setsearch(e.target.value);
        }}
        
      />
      <button type="submit">Search</button>
      {filterCountries.map((item, index) => {
        return <Extra sos={item}></Extra>
      })}
    </div>
  );
};

export default SearchFIlter2;
