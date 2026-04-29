const weatherArea_div = document.querySelector('.weather-area');
const city_input = document.getElementById('city-input');
const submit_btn = document.getElementById('submit-btn');
const apiKey = '35bb9b442add84945d31570a00b9bcdb';

submit_btn.addEventListener('click', async function(){
  const city = city_input.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      displayError(error); 
    }
  } else {
    displayError('Please enter a city');
  };
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error('Could not fetch weather data');
  };

  return await response.json();
}

function displayWeatherInfo(data) {
  const {name: city, 
         main: {temp, humidity}, 
         weather: [{description, id}]} = data;
  
  weatherArea_div.textContent = '';
  weatherArea_div.style.display = 'flex';

  const cityInfo_p = document.createElement('h2');
  const tempInfo_p = document.createElement('p');
  const humidityInfo_p = document.createElement('p');
  const descInfo_p = document.createElement('p');
  const weatherSymbol_p = document.createElement('p');

  cityInfo_p.textContent = city;
  tempInfo_p.textContent = `${Math.round(temp)}°C`
  humidityInfo_p.textContent = `Humidity: ${humidity}%`;
  descInfo_p.textContent = description;
  weatherSymbol_p.textContent = getWeatherSymbol(id);

  cityInfo_p.classList.add('city-info');
  tempInfo_p.classList.add('temp-info');
  humidityInfo_p.classList.add('humidity-info');
  descInfo_p.classList.add('desc-info');
  weatherSymbol_p.classList.add('weather-symbol');

  weatherArea_div.appendChild(cityInfo_p);
  weatherArea_div.appendChild(tempInfo_p);  
  weatherArea_div.appendChild(humidityInfo_p);
  weatherArea_div.appendChild(descInfo_p);
  weatherArea_div.appendChild(weatherSymbol_p);
}

function getWeatherSymbol(weatherId) {
  switch(true){
    case (weatherId >= 200 && weatherId < 300):
      return '⛈';
    case (weatherId >= 300 && weatherId < 400):
      return '🌨';
    case (weatherId >= 500 && weatherId < 600):
      return '🌧';
    case (weatherId >= 600 && weatherId < 700):
      return '❄';
    case (weatherId >= 700 && weatherId < 800):
      return '🌫';
    case (weatherId === 800):
      return '☀';
    case (weatherId >= 801 && weatherId < 810):
      return '🌤';
    default:
      return '❓';
  };
}

function displayError(message){
  const errorInfo_p = document.createElement('p');
  errorInfo_p.textContent = message;
  errorInfo_p.classList.add('error-info');

  weatherArea_div.textContent = '';
  weatherArea_div.style.display = 'flex';
  weatherArea_div.appendChild(errorInfo_p);  
}