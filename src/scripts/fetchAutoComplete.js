const getData = async (value) => {
   const rawData =
      await fetch(`https://api.weatherapi.com/v1/search.json?key=76686ea4e7fd4bb784d92337211508&q=${value}
      `);
   const data = await rawData.json();

   let suggestions = data;

   return suggestions;
};

export default getData;
