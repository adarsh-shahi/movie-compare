const fetchData = async () =>{
  const response = await axios.get('http://www.omdbapi.com', {
    params: {
      apikey: "a60862d6",
      t: "the batman"
    }
  })
  console.log(response.data);
}

fetchData()