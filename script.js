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

var APIKey = "c9a9ed03a355403f4cb9a36e931c0b4a";
