// Create global variables
var inputEl = document.getElementById("cityInput");
var searchBtnEl = document.getElementById("search-button");
var cityEl = document.getElementById("city");
var weatherEl = document.getElementById("weatherInfo");
var tempEl = document.getElementById("temp");
var humidityEl = document.getElementById("humidity");4
var windEl = document.getElementById("wind");
var UVEl = document.getElementById("UV");
var historyEl = document.getElementById("history");
var savedHistory = JSON.parse(localStorage.getItem("search"));

// API Key
var APIKey = "c9a9ed03a355403f4cb9a36e931c0b4a";

// Function to get the weather information
function getWeather(name) {
    //  Create URL from weather map API
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + name + "&appid=" + APIKey;
    axios.get(queryURL)
    .then(function(response){
        var weatherPic = response.data.weather[0].icon;
        var lat = response.data.coord.lat;
        var lon = response.data.coord.lon;
        var UVURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1";

        // Add date to weather info using Moment.js
        cityEl.innerHTML = response.data.name + " (" + moment().format('l') + ")";
        // Get the weather info from API
        weatherEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
        tempEl.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F";
        humidityEl.innerHTML = "Humidity: " + response.data.main.humidity + "%";
        windEl.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";
        
        axios.get(UVURL)
            
        var city = response.data.id;
        var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + city + "&appid=" + APIKey;
        axios.get(forecastURL)
            
    });  
}
    
        