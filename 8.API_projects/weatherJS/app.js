// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  // Change location
  weather.changeLocation(city, country);

  // Set location in Local Storage
  storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // Close modal (with Jquery)
  $('#locModal').modal('hide');
  // const modal = document.getElementById('locModal');
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

// Source API: https://openweathermap.org/
