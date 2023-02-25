import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const Search = () => {
  const searchQuery = localStorage.getItem("serachquery");
  const [searchResults, setSearchResults] = useState(searchQuery || "");

  const [allData, setAllData] = useState([]);

  console.log(searchQuery);
  const gettingDatFromApiForSearch = () => {
    axios
      .get(`http://localhost:8080/products?q=${searchResults}`)
      .then((res) => {
        setAllData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    gettingDatFromApiForSearch();
    setSearchResults(searchQuery);
  }, [searchQuery]);

  console.log(allData);
  return (
    <div>
      {allData?.map((product) => (
        <div>{product.title}</div>
      ))}
    </div>
  );
};
