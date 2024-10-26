// Ensure the DOM content is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
  let searchFormElement = document.querySelector("#search-form");

  // Check if the form element exists to prevent errors
  if (searchFormElement) {
    searchFormElement.addEventListener("submit", handleSearchSubmit);
  }
});

function handleSearchSubmit(event) {
  event.preventDefault(); // Prevent page reload
  console.log("Form submitted"); // Debugging log

  let searchInput = document.querySelector("#search-form-input");

  if (searchInput && searchInput.value.trim() !== "") {
    console.log(`Searching for: ${searchInput.value}`); // Log search query
    searchCity(searchInput.value.trim());
  } else {
    alert("Please enter a city name.");
  }
}

function searchCity(city) {
  let apiKey = "51t8c7a54baf34490b70f5dc7aco6f3d";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  // Show loading message
  document.querySelector("#loading")?.classList.remove("hidden");

  axios
    .get(apiUrl)
    .then(refreshWeather)
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("City not found. Please try again.");
    })
    .finally(() => {
      // Hide loading message
      document.querySelector("#loading")?.classList.add("hidden");
    });
}

function refreshWeather(response) {
  let data = response.data;

  document.querySelector("#city").innerHTML = data.city;
  document.querySelector("#time").innerHTML = formatDate(
    new Date(data.time * 1000)
  );
  document.querySelector("#description").innerHTML = data.condition.description;
  document.querySelector(
    "#humidity"
  ).innerHTML = `${data.temperature.humidity}%`;
  document.querySelector("#wind-speed").innerHTML = `${data.wind.speed} km/h`;
  document.querySelector("#temperature").innerHTML = Math.round(
    data.temperature.current
  );
  document.querySelector("#icon").innerHTML = `
    <img src="${data.condition.icon_url}" class="weather-app-icon" alt="${data.condition.description}" />
  `;

  getForecast(data.city);
}

function formatDate(date) {
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
}

function getForecast(city) {
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  let forecastHtml = response.data.daily
    .slice(0, 5)
    .map(
      (day) => `
      <div class="weather-forecast-day">
        <div class="weather-forecast-date">${formatDay(day.time)}</div>
        <img src="${
          day.condition.icon_url
        }" class="weather-forecast-icon" alt="Weather icon" />
        <div class="weather-forecast-temperatures">
          <div class="weather-forecast-temperature">
            <strong>${Math.round(day.temperature.maximum)}º</strong>
          </div>
          <div class="weather-forecast-temperature">
            ${Math.round(day.temperature.minimum)}º
          </div>
        </div>
      </div>
    `
    )
    .join("");

  document.querySelector("#forecast").innerHTML = forecastHtml;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}

// Perform an initial search to load weather for Paris
searchCity("Paris");
