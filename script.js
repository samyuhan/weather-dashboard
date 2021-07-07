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
        var latitude = response.data.coord.lat;
        var longitude = response.data.coord.lon;
        var UVURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey + "&cnt=1";

        // Add date to weather info using Moment.js
        cityEl.innerHTML = response.data.name + " (" + moment().format('l') + ")";
        // Get the weather info from API
        weatherEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
        tempEl.innerHTML = "Temperature: " + convertTemp(response.data.main.temp) + " &#176F";
        humidityEl.innerHTML = "Humidity: " + response.data.main.humidity + "%";
        windEl.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";
        axios.get(UVURL)
            
        // Get UV index
        .then(function(response){
            var UV = document.createElement("span");
            UV.setAttribute("class","badge badge-danger");
            UV.innerHTML = response.data[0].value;
            UVEl.innerHTML = "UV Index: ";
            UVEl.append(UV);
        });

        var city = response.data.id;
        var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + city + "&appid=" + APIKey;
        axios.get(forecastURL)
        
        // Get forecast for next 5 days
        .then(function(response){
            
        })
    });  
}
    
// Create event listener to save cities that were inputted
searchBtnEl.addEventListener("click",function() {
    var input = inputEl.value;
    getWeather(input);
    savedHistory.push(input);
    localStorage.setItem("search", JSON.stringify(savedHistory));
    // Call function for search history
})
    
function convertTemp(t) {
    return Math.floor(1.8 * (t - 273.15) + 32);
}
    
