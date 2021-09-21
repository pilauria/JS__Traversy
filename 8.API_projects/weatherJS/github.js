const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);
//and display the weather API data as this

results(weather){
    this.location.textContent = weather.name +', '+ weather.sys.country;
    this.desc.textContent = weather.weather[0].description;
    this.temp.textContent = weather.main.temp;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.clouds.textContent = `Clouds: ${weather.clouds.all}`;
    this.tempMax.textContent = `Tempature Max: ${weather.main.temp_max}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
  }