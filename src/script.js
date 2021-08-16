const button = (document.getElementById("searchIcon").onclick = searchHandler);
const cityName = document.getElementById("cityText");
const dateText = document.getElementById("dateText");
const weatherText = document.getElementById("weatherText");
const rainText = document.getElementById("rainText");
const windText = document.getElementById("windText");
const input = document.getElementById("searchInput");
const weatherIcon = document.getElementById("weatherIcon");
const bootIcon = document.getElementById("bootIcon");
const umbrellaIcon = document.getElementById("umbrellaIcon");
const waterIcon = document.getElementById("waterIcon");
const bootsCard = document.getElementById("bootsCard");
const umbrellaCard = document.getElementById("umbrellaCard");
const waterCard = document.getElementById("waterCard");

// const link = document.getElementById("link").onclick = test
// const linkIos = document.getElementById("linkIos").onclick = testIos

// function test(){
//    window.location = "intent://esnafseninle.com/#Intent;scheme=https;package=com.VgEsnafSeninle;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.VgEsnafSeninle;end";
// }

// function testIos(){
//    var c=false;
//    window.location.href= "esnafseninle://"
//    if(this.find('Esnaf Seninle" ile')){c=true}
//    if(c==false)
//       setTimeout(function () {
//              window.location = "https://apps.apple.com/tr/app/esnaf-seninle/id1566561528?l=tr";

//      }, 25);
// }

async function searchHandler() {
   if (!input.value) {
      alert("Please Enter a Value");
   } else {
      let city = replaceChars(input.value);
      const weatherObj = await getData(city);
      await writeData(weatherObj);
      await setTheme(weatherObj.avgTemp);
      let recommends = await setRecommends(
         weatherObj.avgTemp,
         weatherObj.changeOfRain
      );
   }
}

const getData = async (city) => {
   const rawData =
      await fetch(`http://api.weatherapi.com/v1/forecast.json?key=76686ea4e7fd4bb784d92337211508&q=${city}&days=1&aqi=no&alerts=no
    `);
   const data = await rawData.json();
   console.log(data);
   let weatherObj = {
      cityName: data.location.name,
      date: data.forecast.forecastday[0].date,
      avgTemp: data.current.temp_c,
      condition: data.forecast.forecastday[0].day.condition.text,
      changeOfRain: data.forecast.forecastday[0].day.daily_chance_of_rain,
      wind: data.forecast.forecastday[0].day.maxwind_kph,
      icon: data.current.condition.icon,
   };
   return weatherObj;
};

const writeData = (obj) => {
   cityName.innerHTML = obj.cityName;
   dateText.innerHTML = obj.date;
   weatherText.innerHTML = `${obj.avgTemp}°C ${obj.condition}`;
   rainText.innerHTML = obj.changeOfRain + "%";
   windText.innerHTML = obj.wind + "km/h";
   weatherIcon.src = obj.icon;
};

function setTheme(tmp = 20) {
   let themeName = "";
   if (tmp < 0) themeName = "themeColder";
   else if (tmp < 10) themeName = "themeCold";
   else if (tmp < 20) themeName = "themeAvg";
   else if (tmp < 30) themeName = "themeHot";
   else themeName = "themeHotter";
   document.documentElement.className = themeName;
}

function setRecommends(temp, rain) {
   let recommendations = [];
   if (rain > 50) recommendations.push(umbrellaIcon, umbrellaCard);
   if (rain > 50 && temp < 20) recommendations.push(bootIcon, bootsCard);
   if (temp > 30) recommendations.push(waterIcon, waterCard);
   recommendations.forEach((ico) => {
      ico.style.display = "flex";
   });
   return recommendations;
   // bootIcon.style.display = "flex"
}

const replaceChars = (string) => {
   return string
      .replace("Ğ", "g")
      .replace("Ü", "u")
      .replace("Ş", "s")
      .replace("I", "i")
      .replace("İ", "i")
      .replace("Ö", "o")
      .replace("Ç", "c")
      .replace("ğ", "g")
      .replace("ü", "u")
      .replace("ş", "s")
      .replace("ı", "i")
      .replace("ö", "o")
      .replace("ç", "c");
};

setTheme();
