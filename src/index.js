function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#cityInput").value;
  search(city);
}

function search(city) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
}

function displayWeather(response) {
  celciusTemperature = Math.round(response.data.main.temp);

  document.querySelector("#cityPlace").innerHTML = response.data.name;

  document.querySelector("#temperature-big").innerHTML = celciusTemperature;

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

  getForecast(response.data.coord);
}

function getForecast(coordinates) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;

  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `  
      <div class="col-2">
      ${formatDay(forecastDay.dt)}
      <br />
      
      <img
      src="http://openweathermap.org/img/wn/${
        forecastDay.weather[0].icon
      }@2x.png"
      
      class="weather-icon"
      alt="${forecastDay.weather[0].description}"
      />
      <br />
      
      <span class="day-temp">${Math.round(forecastDay.temp.max)}° </span>
      <span class="night-temp"> ${Math.round(forecastDay.temp.min)}°</span>
      </div>
      `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;

  forecastElement.innerHTML = forecastHTML;
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

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

let form = document.querySelector(`#search-form`);
form.addEventListener("submit", handleSubmit);

let units = "metric";

let apiKey = `09de8678225621c95e40390774879e02`;

let celciusTemperature = null;

let currentButton = document.querySelector("#currentLocation");
currentButton.addEventListener("click", getCurrentPosition);

search(`Truskavets`);
actualDate();
