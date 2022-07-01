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

// city search

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#cityInput");
  let city = cityInput.value;
  city = city[0].toUpperCase() + city.substring(1);

  let cityPlace = document.querySelector(`#cityPlace`);
  if (city) {
    cityPlace.innerHTML = city;
    return city;
  } else {
    cityPlace.innerHTML = null;
    alert(`Please type a city`);
  }

  let apiKey = `09de8678225621c95e40390774879e02`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function displayWeather(response) {
    //let weatherDiv = document.querySelector("#weather");
    //let temperature = Math.round(response.data.main.temp);
    //let description = response.data.weather[0].description;

    console.log(response.data);
    //weatherDiv.innerHTML = `It is ${temperature} degrees, ${description}, in ${response.data.name}`;
  }

  axios.get(apiUrl).then(displayWeather);
}
let form = document.querySelector(`#search-form`);
form.addEventListener("submit", search);
