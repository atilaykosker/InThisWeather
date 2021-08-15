const button = document.getElementById('searchIcon').onclick = searchHandler
const cityName = document.getElementById('cityText')
const dateText = document.getElementById('dateText')
const weatherText = document.getElementById('weatherText')
const rainText = document.getElementById('rainText')
const windText = document.getElementById('windText')


async function searchHandler (){
   const weatherObj = await getData("florida")
   await writeData(weatherObj)
}

const getData = async (city) => {
    const rawData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=76686ea4e7fd4bb784d92337211508&q=${city}&days=1&aqi=no&alerts=no
    `)
    const data = await rawData.json()
    console.log(data)
    let weatherObj = {
        cityName: data.location.name,
        date: data.forecast.forecastday[0].date,
        avgTemp: data.forecast.forecastday[0].day.avgtemp_c,
        condition: data.forecast.forecastday[0].day.condition.text,
        changeOfRain: data.forecast.forecastday[0].day.daily_chance_of_rain,
        wind: data.forecast.forecastday[0].day.maxwind_kph
    }
    return weatherObj
 }

 const writeData = (obj) => {
    console.log(obj)
    cityName.innerHTML = obj.cityName
    dateText.innerHTML = obj.date
    weatherText.innerHTML = `${obj.avgTemp}°C ${obj.condition}`
    rainText.innerHTML = obj.changeOfRain + "%"
    windText.innerHTML = obj.wind + "km/h"
 }

