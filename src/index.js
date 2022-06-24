let now = new Date();

let dayPlace = document.querySelector("#day");
let datePlace = document.querySelector("#date");
let monthPlace = document.querySelector("#month");
let hoursPlace = document.querySelector("#hours");
let minutesPlace = document.querySelector("#minutes");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

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

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#cityInput");

  let h1 = document.querySelector("#cityPlace");
  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
  } else {
    alert("Please type a city");
  }
}

let farenheit = document.querySelector("#units-farenheit");

function farenheitTemp(event) {
  event.preventDefault();

  let tempBig = document.querySelector("#tremperature-big");
  tempBig.innerHTML = `66`;
}

farenheit.addEventListener("click", farenheitTemp);

let celcium = document.querySelector("#units-celcium");

function celciumTemp(event) {
  event.preventDefault();

  let tempBig = document.querySelector("#tremperature-big");
  tempBig.innerHTML = `19`;
}

celcium.addEventListener("click", celciumTemp);
