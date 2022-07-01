// set time and date

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

let farenheit = document.querySelector("#units-farenheit");

function farenheitTemp(event) {
  event.preventDefault();

  let tempBig = document.querySelector("#tremperature-big");

  tempBig.innerHTML = `66`;
}

farenheit.addEventListener("click", farenheitTemp);

let celcius = document.querySelector("#units-celcius");

function celciusTemp(event) {
  event.preventDefault();

  let tempBig = document.querySelector("#tremperature-big");
  tempBig.innerHTML = `19`;
}

celcius.addEventListener("click", celciusTemp);

// City search

function displayWeather(response) {
  document.querySelector("#cityPlace").innerHTML = response.data.name;
  document.querySelector("#temperature-big").innerHTML = Math.round(
    response.data.main.temp
  );

  //   //let description = response.data.weather[0].description;
  console.log(response.data);
  //   weatherTemperature.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();

  let apiKey = `09de8678225621c95e40390774879e02`;
  let city = document.querySelector("#cityInput").value;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

// }

let form = document.querySelector(`#search-form`);
form.addEventListener("submit", search);

// // Get current temperature
// // Current Location Button

// function getCurrentPosition() {
//   navigator.geolocation.getCurrentPosition(showPosition);
// }

// function showPosition(position) {
//   let lat = position.coords.latitude;
//   let lon = position.coords.longitude;

//   let apiKey = `09de8678225621c95e40390774879e02`;

//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

//   axios.get(apiUrl).then(displayCurrentWeather);
// }

// function displayCurrentWeather(response) {
//   let weatherTemperature = document.querySelector("#tremperature-big");
//   let temperature = Math.round(response.data.main.temp);
//   //     //let description = response.data.weather[0].description;
//   let city = response.data.name;

//   let h1 = document.querySelector("h1");
//   h1.innerHTML = city;
//   console.log(city);
//   weatherTemperature.innerHTML = temperature;
// }

// let currentButton = document.querySelector("#currentLocation");
// currentButton.addEventListener("click", getCurrentPosition);
