  // Current Location Button

  function displayWeather(response) {
    let weatherTemperature = document.querySelector("#tremperature-big");
    let temperature = Math.round(response.data.main.temp);
    //let description = response.data.weather[0].description;

    console.log(temperature);
    weatherTemperature.innerHTML = temperature;
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
    let h1 = document.querySelector("h1");
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    h1.innerHTML = `Your Latitude is ${lat} and your longitude is ${lon}`;

    let apiKey = `09de8678225621c95e40390774879e02`;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=lat={lat}&lon={lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }
}
let currentButton = document.querySelector("#currentLocation");
currentButton.addEventListener("click", getCurrentPosition);
