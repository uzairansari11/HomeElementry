const gettingDatFromApiForSearch = (searchResults) => {
    axios
      .get(`http://localhost:8080/products?q=${searchResults}`)
      .then((res) => {
        setAllData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
};
