fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.90&lon=10.79&altitude=49', {
  headers: {
    'User-Agent': 'Justini/0.1 github.com/eklem/justini'
  },
})
  .then(response => response.json())
  .then(data => {
    console.log(JSON.stringify(data.properties.timeseries[0].data.next_1_hours.summary.symbol_code,  null, ' '))
    console.log(JSON.stringify(data.properties.timeseries[0].data.instant.details.wind_speed + ' m/s',  null, ' '))
    console.log(JSON.stringify(data.properties.timeseries[0].data.instant.details.wind_from_direction + '°',  null, ' '))
    console.log(JSON.stringify(data.properties.timeseries[0].data.instant.details.air_temperature + '°C',  null, ' '))
    // console.log(JSON.stringify(data.properties.timeseries[0].data,  null, ' '))
    // console.log(JSON.stringify(weatherJSON.weatherdata[0].product[0].time[10], null, 2))
  })
