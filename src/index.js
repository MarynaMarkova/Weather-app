function displayWeather(response) {
  celciusTemperature = Math.round(response.data.main.temp);

  document.querySelector("#cityPlace").innerHTML = response.data.name;

  document.querySelector("#temperature-big").innerHTML =
    Math.round(celciusTemperature);

  document.querySelector("#feels").innerHTML = Math.round(
    response.data.main.feels_like
  );

  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );

  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;

  document
    .querySelector("#weather-icon-big")
    .setAttribute(
      `src`,
      `https://www.openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );

  document
    .querySelector("#weather-icon-big")
    .setAttribute(`alt`, response.data.weather[0].description);
}

function search(city) {
  let apiKey = `09de8678225621c95e40390774879e02`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#cityInput").value;
  search(city);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiKey = `09de8678225621c95e40390774879e02`;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function farenheitTemp(event) {
  event.preventDefault();

  celcius.classList.remove(`active`);
  farenheit.classList.add(`active`);

  let farenheitTemperature = Math.round((celciusTemperature * 9) / 5 + 32);

  document.querySelector("#temperature-big").innerHTML = farenheitTemperature;
}

function celciusTemp(event) {
  event.preventDefault();

  celcius.classList.add(`active`);
  farenheit.classList.remove(`active`);

  document.querySelector("#temperature-big").innerHTML = celciusTemperature;
}

function actualDate() {
  let now = new Date();

  let dayPlace = document.querySelector("#day");
  let datePlace = document.querySelector("#date");
  let monthPlace = document.querySelector("#month");
  let hoursPlace = document.querySelector("#hours");
  let minutesPlace = document.querySelector("#minutes");

  let date = now.getDate();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];

  dayPlace.innerHTML = `${day}`;
  datePlace.innerHTML = `${date}`;
  monthPlace.innerHTML = `${month}`;
  hoursPlace.innerHTML = `${hours}`;
  minutesPlace.innerHTML = `${minutes}`;
}

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  let days = ["Thu", "Fri", "Sat", "Sun"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `  
    <div class="col-2">
    ${day}
    <br />
    
    <img
    src="/pic/rain_s_cloudy.png"
    class="weather-icon"
    alt="cloudy"
    />
    <br />
    
    <span class="day-temp">18° </span>
    <span class="night-temp"> 12°</span>
    </div>
    `;
  });

  forecastHTML = forecastHTML + `</div>`;

  forecastElement.innerHTML = forecastHTML;
}

let form = document.querySelector(`#search-form`);
form.addEventListener("submit", handleSubmit);

let farenheit = document.querySelector("#units-farenheit");
farenheit.addEventListener("click", farenheitTemp);

let celciusTemperature = null;

let celcius = document.querySelector("#units-celcius");
celcius.addEventListener("click", celciusTemp);

let currentButton = document.querySelector("#currentLocation");
currentButton.addEventListener("click", getCurrentPosition);

search(`Truskavets`);
actualDate();
displayForecast();
