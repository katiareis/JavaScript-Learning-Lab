const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector("img.icon");

const updateUI = (data) => {
  // console.log(data);
  // const cityDetails = data.cityDetails;
  // const weather = data.weather;

  //destructure properties
  const { cityDetails, weather } = data;

  // Update details template
  details.innerHTML = `<h5 class="my-3">${cityDetails.EnglishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>`;

  //update night or day image & weather icons
  const iconSrc = `images/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  let timeSrc = null;
  if (weather.IsDayTime) {
    timeSrc = "images/day.svg";
  } else {
    timeSrc = "images/night.svg";
  }

  time.setAttribute("src", timeSrc);

  //remove display none class if weather
  if (card.classList.contains("display-none")) {
    card.classList.remove("display-none");
  }
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  //returns an object
  return { cityDetails, weather };
};

cityForm.addEventListener("submit", (e) => {
  //prevent default action
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the UI with the new city
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});
