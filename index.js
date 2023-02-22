fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=ee4418995b3663206c5194d786fb7b9f&units=metric"
)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("t1").innerHTML = data.main.temp;
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=ee4418995b3663206c5194d786fb7b9f&units=metric"
)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("t2").innerHTML = data.main.temp;
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=ee4418995b3663206c5194d786fb7b9f&units=metric"
)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("t3").innerHTML = data.main.temp;
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=ee4418995b3663206c5194d786fb7b9f&units=metric"
)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("t4").innerHTML = data.main.temp;
  });

let mainbox = document.getElementById("main");

function newbox(x, y) {
  let whetherbox = document.createElement("div");
  mainbox.appendChild(whetherbox);
  whetherbox.className = "whether-box";
  let city = document.createElement("h3");
  city.className = "city";
  city.innerHTML = x;
  whetherbox.appendChild(city);
  let pic = document.createElement("img");
  pic.className = "image";
  whetherbox.appendChild(pic);
  pic.src = "pictures/cloud.jpg";
  let temperature = document.createElement("p");
  temperature.className = "temperature";
  whetherbox.appendChild(temperature);
  temperature.innerHTML = "Current Temperature:";
  let temp = document.createElement("p");
  temp.className = "temp";
  whetherbox.appendChild(temp);
  temp.innerHTML = y;
  input.value=""
}

let form = document.querySelector(".form");
const input = document.querySelector(".input");
let button = document.querySelector(".search-button");

function sid() {
  const value = input.value;

  if (value === "") {
    alert("Enter city name");
  } else {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=ee4418995b3663206c5194d786fb7b9f&units=metric`
    )
      .then((response) => response.json())
      .then((data) => newbox(data.name, data.main.temp));
  }
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sid();
});
