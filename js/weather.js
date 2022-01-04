const API_KEY = "59648956232be7bc7f53e5bebe08c609"
const feelLikeDisplay = document.querySelector(".feel_like > span")
const windDisplay = document.querySelector(".wind > span")
const weatherDisplay = document.querySelector(".weather > img")
const locationDisplay = document.querySelector(".location")
const temperatureDisplay = document.querySelector(".temperature > span")
const wetherSelect = document.querySelector("#weather-selecter")
const infoSelect = document.querySelector(".info")



wetherSelect.addEventListener("change",(e)=>{
   
    gerWeather(e.target.value)
})



const gerWeather = async (city = 'seoul')=>{

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    const response =  await axios.get(url);
    const {name, main, weather , wind} = response.data;
    const weatherIcon = ()=>{
        temperatureDisplay.innerText = transferTemp(main.temp)
        weatherDisplay.setAttribute('src',`https://openweathermap.org/img/wn/${weather[0].icon}.png`) 
        return weatherIcon 
    }




    locationDisplay.innerText = response.data.name 
    if(response.data.name === "Seoul"){
        locationDisplay.innerText = "Sowon"         
    }
   if(response.data.name === "Harbin") {
        
        locationDisplay.innerText = "Sulhwa"         
    }

    weatherIcon()
    windDisplay.innerText = wind.speed;
    feelLikeDisplay.innerText = transferTemp(main.feels_like)
    

    console.log(response , name)

}

const transferTemp = (temp) =>{
    return (temp - 273.75).toFixed(1)

}

gerWeather()





































