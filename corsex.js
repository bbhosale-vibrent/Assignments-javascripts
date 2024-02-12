function gotWeather({ temperature, humidity }) {
    alert(`temperature: ${temperature}, humidity: ${humidity}`);
  }

let script = document.createElement('script');
script.src = `http://another.com/weather.json?callback=gotWeather`;
document.body.append(script);