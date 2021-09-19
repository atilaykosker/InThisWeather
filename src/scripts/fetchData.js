const getData = async (city) => {
    const rawData =
       await fetch(`https://api.weatherapi.com/v1/forecast.json?key=76686ea4e7fd4bb784d92337211508&q=${city}&days=1&aqi=no&alerts=no
     `);
    const data = await rawData.json();
    let weatherObj = {
       cityName: data.location.name,
       date: data.forecast.forecastday[0].date,
       avgTemp: data.current.temp_c,
       condition: data.forecast.forecastday[0].day.condition.text,
       changeOfRain: data.forecast.forecastday[0].day.daily_chance_of_rain,
       wind: data.forecast.forecastday[0].day.maxwind_kph,
       icon: data.current.condition.icon,
       hourly: data.forecast.forecastday[0].hour
    };
    return weatherObj;
 };

 export default getData
