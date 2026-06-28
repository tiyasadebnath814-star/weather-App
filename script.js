const apiKey = "b0bc1261aaf70a29bbf57f156a039feb";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const city = document.getElementById("city");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

async function checkWeather(cityName){

    const response = await fetch(apiUrl + cityName + "&appid=" + apiKey);

    if(response.status == 404){
        alert("City Not Found");
        return;
    }

    const data = await response.json();

    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    weather.innerHTML = data.weather[0].main;
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => {

    let cityName = searchBox.value.trim();

    if(cityName !== ""){
        checkWeather(cityName);
    }

});

searchBox.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        checkWeather(searchBox.value.trim());
    }
});

checkWeather("Kolkata");