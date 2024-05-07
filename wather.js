const apiKey ="792c3d464a0cc74abde03d9f4c375f1e";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    
    if(data.weather[0].main =="Clouds"){
        weatherIcon.src= "clouds.png";
    }
    else if(data.weather[0].main =="Clouds"){
    weatherIcon.src= "clear.png";
} else if(data.weather[0].main =="Clouds"){
    weatherIcon.src= "rain.png";
} else if(data.weather[0].main =="Clouds"){
    weatherIcon.src= "drizzle.png";
} else if(data.weather[0].main =="Clouds"){
    weatherIcon.src="mist.png";
}
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
