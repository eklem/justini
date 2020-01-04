fetch('https://api.met.no/weatherapi/locationforecast/1.9/?lat=60.10&lon=9.58&msl=70')
  .then(response => response.text())
  .then((weatherXML) => {
    let weatherJSON = xmlToJSON.parseString(weatherXML)
    // console.log(JSON.stringify(weatherJSON, null, 2))
    console.log(JSON.stringify(weatherJSON.weatherdata[0].product[0].time[0], null, 2))
  })
/*  testString = '<xml><a>It Works!</a></xml>';    // get some xml (string or document/node)
  result = xmlToJSON.parseString(testString);  // parse
  console.log(JSON.stringify(result))*/
