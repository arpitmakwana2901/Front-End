function Weather(city, temperature, humidity, forecast) {
    this.city = city;
    this.temperature = temperature;
    this.humidity = humidity;
    this.forecast = forecast;
  
    this.updateForecast = function (newForecast) {
      this.forecast = newForecast;
      console.log(`The forecast for ${this.city} has been updated to: ${this.forecast}`);
    };
  }
  

  const weather1 = new Weather("New York", 25, 60, "snow");
  console.log(weather1);
  

  weather1.updateForecast("Rainy");
  console.log(weather1);
  