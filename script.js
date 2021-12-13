const createLatitude = document.createElement('input');
const createLongitude = document.createElement('input');

createLatitude.placeholder = 'Latitude';
createLongitude.placeholder = 'Longitude';

document.body.appendChild(createLatitude);
document.body.appendChild(createLongitude);

const createButton = document.createElement('button');
createButton.setAttribute('id', 'button1');
createButton.innerText = 'Click for Weather';
document.body.appendChild(createButton);

const createButton1 = document.createElement('button');
createButton1.innerText = 'Geolocation';
document.body.appendChild(createButton1);


createButton.addEventListener('click', () =>{
const latInput = createLatitude.value;
const longInput = createLongitude.value;
  getWeather(latInput, longInput)

});
createButton1.addEventListener('click', getGeolocation);

function getGeolocation () {
   console.log("getGeolocation - this works")
  
   function success(position) {
    console.log("success - this works")
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude)
    console.log(longitude)
    getWeather(latitude, longitude);
     
  }
    navigator.geolocation.getCurrentPosition(success); 
}

async function getWeather(latInput, longInput) {
  // get value of date
  // const latInput = createLatitude.value;
  // const longInput = createLongitude.value;

  
  // get request to weather API
  let response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latInput}&longitude=${longInput}&hourly=temperature_2m&current_weather=true`);
  console.log(response);
  response.data.current_weather
  // Print out weather API
  const createWeatherDiv = document.createElement('div');
  const createWeatherP1 = document.createElement('p');
  const createWeatherP2 = document.createElement('p');
  const createWeatherP3 = document.createElement('p');
  
  createWeatherP1.innerText = `Temperature: ${response.data.current_weather.temperature}`
    createWeatherP2.innerText = `Wind Direction: ${response.data.current_weather.winddirection}`
    createWeatherP3.innerText = `Wind Speed: ${response.data.current_weather.windspeed}`
    createWeatherDiv.appendChild(createWeatherP1);
    createWeatherDiv.appendChild(createWeatherP2);
    createWeatherDiv.appendChild(createWeatherP3);
    document.body.appendChild(createWeatherDiv);
}


