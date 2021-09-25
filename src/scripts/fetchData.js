const getData = async (city) => {
   const rawData =
      await fetch(`https://api.weatherapi.com/v1/forecast.json?key=76686ea4e7fd4bb784d92337211508&q=${city}&days=1&aqi=no&alerts=no
     `);
   const data = await rawData.json();

   let weatherObj = {
      cityName: data.location.name,
      date: data.forecast.forecastday[0].date,
      avgTemp: data.current.temp_c,
      condition: data.current.condition.text,
      code: data.current.condition.code,
      changeOfRain: data.forecast.forecastday[0].day.daily_chance_of_rain,
      wind: data.forecast.forecastday[0].day.maxwind_kph,
      icon: urlRemap(data.current.condition.icon),
      hourly: data.forecast.forecastday[0].hour,
   };
   return weatherObj;
};

const urlRemap = (url) => {
   const parts = url.split('/');
   const newUrl = `//${parts[2]}/${parts[3]}/128x128/${parts[5]}/${parts[6]}`;
   return newUrl;
};
export default getData;
