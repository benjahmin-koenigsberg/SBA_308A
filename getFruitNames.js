




//Fruityvice API

 async function getFruitNames() {


    //  let config = {
    //      url: FRUIT_URL,
    //      method: "get",
    //      headers: {
    //          'Access-Control-Allow-Origin': '*',
    //          'Access-Control-Allow-Headers': '*',
    //          'Access-Control-Allow-Credentials': 'true'
    //      }
    //  };


     //Fruit APIs

     // const FRUIT_URL = "https://tropicalfruitandveg.com/api/tfvjsonapi.php?search=berry";
     const FRUIT_URL = "https://www.fruityvice.com/api/fruit/all"
     //const FRUIT_URL2 = "https://tropicalfruitandveg.com/api/tfvxmlapi.php?search=all"

     const response = await axios.get(FRUIT_URL, { crossdomain: true })
    //let response = await axios.request(config);

    const fruitData = await response.data
    console.log(fruitData);

        fruitData.sort().forEach((fruit) => {
            const fruitEl = document.createElement("option");
            fruitEl.setAttribute("value", fruit.name);
            fruitEl.innerText = fruit.name
            document.getElementById('fruitSelect').append(fruitEl);
    });
};

export {getFruitNames}
