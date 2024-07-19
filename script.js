async function weatherFetch() {
  let city = document.getElementById("city").value;
  const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7b96603994msha42c6e749dce21ep1edae4jsn5a20464d25ba",
      "x-rapidapi-host": "weather-api138.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    document.getElementById("cityName").innerHTML =
      result.name + " of " + result.sys.country;
    document.getElementById("lon").innerHTML = result.coord.lon;
    document.getElementById("lat").innerHTML = result.coord.lat;
    document.getElementById("sky").innerHTML = result.weather[0].main;
    document.getElementById("sky-desc").innerHTML =
      result.weather[0].description;

    // Convert temperatures from Kelvin to Celsius
    const tempCelsius = kelvinToCelsius(result.main.temp);
    const feelsLikeCelsius = kelvinToCelsius(result.main.feels_like);
    const tempMinCelsius = kelvinToCelsius(result.main.temp_min);
    const tempMaxCelsius = kelvinToCelsius(result.main.temp_max);

    document.getElementById("temp").innerHTML = tempCelsius.toFixed(2);
    document.getElementById("feels_like").innerHTML =
      feelsLikeCelsius.toFixed(2);
    document.getElementById("min_temp").innerHTML = tempMinCelsius.toFixed(2);
    document.getElementById("max_temp").innerHTML = tempMaxCelsius.toFixed(2);
    document.getElementById("pressure").innerHTML = result.main.pressure;
    document.getElementById("humidity").innerHTML = result.main.humidity;
    document.getElementById("visibility").innerHTML = result.visibility;
    document.getElementById("wind_speed").innerHTML = result.wind.speed;
    document.getElementById("wind_degrees").innerHTML = result.wind.deg;

    const sunrise = convertUnixToReadable(result.sys.sunrise);
    const sunset = convertUnixToReadable(result.sys.sunset);

    document.getElementById("sunrise").innerHTML = sunrise;
    document.getElementById("sunset").innerHTML = sunset;
    document.getElementById("timezone").innerHTML = result.timezone;

    function convertUnixToReadable(unix_timestamp) {
      const date = new Date(unix_timestamp * 1000); // Convert to milliseconds
      return date.toLocaleString(); // Convert to local string
    }

    let date = convertUnixToReadable(result.dt);

    document.getElementById("date").innerHTML = date;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

async function Mumbai() {
  const url = `https://weather-api138.p.rapidapi.com/weather?city_name=Mumbai`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7b96603994msha42c6e749dce21ep1edae4jsn5a20464d25ba",
      "x-rapidapi-host": "weather-api138.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    const tempCelsius = kelvinToCelsius(result.main.temp);
    document.getElementById("mumbai-temp").innerHTML = tempCelsius.toFixed(2);
    document.getElementById("mumbai-humidity").innerHTML = result.main.humidity;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

Mumbai();

async function Delhi() {
  const url = `https://weather-api138.p.rapidapi.com/weather?city_name=Delhi`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7b96603994msha42c6e749dce21ep1edae4jsn5a20464d25ba",
      "x-rapidapi-host": "weather-api138.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    const tempCelsius = kelvinToCelsius(result.main.temp);
    document.getElementById("delhi-temp").innerHTML = tempCelsius.toFixed(2);
    document.getElementById("delhi-humidity").innerHTML = result.main.humidity;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

Delhi();

async function Banglore() {
  const url = `https://weather-api138.p.rapidapi.com/weather?city_name=Bangalore`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7b96603994msha42c6e749dce21ep1edae4jsn5a20464d25ba",
      "x-rapidapi-host": "weather-api138.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    const tempCelsius = kelvinToCelsius(result.main.temp);
    document.getElementById("banglore-temp").innerHTML = tempCelsius.toFixed(2);
    document.getElementById("banglore-humidity").innerHTML =
      result.main.humidity;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

Banglore();

async function Surat() {
  const url = `https://weather-api138.p.rapidapi.com/weather?city_name=Surat`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7b96603994msha42c6e749dce21ep1edae4jsn5a20464d25ba",
      "x-rapidapi-host": "weather-api138.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    const tempCelsius = kelvinToCelsius(result.main.temp);
    document.getElementById("surat-temp").innerHTML = tempCelsius.toFixed(2);
    document.getElementById("surat-humidity").innerHTML = result.main.humidity;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

Surat();

document
.getElementById("contact-form")
.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you for reaching out. We will get back to you soon!");
});

function openMenu() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "flex";
}

function closeMenu() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "none";
}