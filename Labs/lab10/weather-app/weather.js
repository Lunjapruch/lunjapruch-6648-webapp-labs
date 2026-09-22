const axios = require('axios');
const api = "6f1314d3218f4f5d9b650831262009";
const args=process.argv.slice(2);
const city = args.join(" ");

if(args.length == 0){
    console.log("Usage: node weather.js <city name>");
    console.log("Examples:");
    console.log("  node weather.js London");
    console.log('  node weather.js "New York"');
    process.exit(1);
}


const getWeather = async (cityName) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${api}&q=${encodeURIComponent(cityName)}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    console.log(`Weather in ${data.location.name}, ${data.location.country}:`);
    console.log(`Temperature: ${data.current.temp_c}°C`);
    console.log(`Condition: ${data.current.condition.text}`);
  } catch (error) {
    if (error.response) {
      console.log(`Error: ${error.response.data.error.message}`);
    } else if (error.request) {
      console.log("Error: Unable to connect to the weather service. Please check your internet connection.");
    } else {
      console.log(`Error: ${error.message}`);
    }
    process.exit(1);
  }
};

getWeather(city);