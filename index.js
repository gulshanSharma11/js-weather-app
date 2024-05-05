const apiKey="9ba68de84ccdee932d77e7cad1e0bd08";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox=document.querySelector(".search input");
const btn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


btn.addEventListener("click",()=>{
    data(searchbox.value);
});

async function data(city){
       const recievedata= await fetch(apiUrl+ city + `&appid=${apiKey}`);  
       var finaldata=await recievedata.json();  
         
        
        document.querySelector(".city").innerHTML = finaldata.name;
        document.querySelector(".temp").innerHTML = Math.round(finaldata.main.temp)+"°C";
        document.querySelector(".humidity-col-text").innerHTML = finaldata.main.
        humidity+"%";
        document.querySelector(".Wind-col-text").innerHTML = finaldata.wind.speed+" km/h";




        if(finaldata.weather[0].cloud == "Clouds"){
            weatherIcon.src= "images/clouds.png";
        }
        else if(finaldata.weather[0].main == "Rain"){
            weatherIcon.src= "images/rain.png";
        }
        else if(finaldata.weather[0].main == "Clear"){
            weatherIcon.src= "images/clear.png";
        }
        else if(finaldata.weather[0].main == "Mist"){
            weatherIcon.src= "images/mist.png";
        }
        else if(finaldata.weather[0].main == "Drizzle"){
            weatherIcon.src= "images/drizzle.png";
        }
        else if(finaldata.weather[0].main == "Snow"){
            weatherIcon.src= "images/snow.png";
        }
        else if(finaldata.weather[0].main == "Humidity"){
            weatherIcon.src= "images/humidity.png";
        }

        document.querySelector(".weather").style.display="block";
        
}
       


