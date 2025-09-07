const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey="8ad692986b2279641f8c3c5080403f4d";
let searchbox=document.querySelector("#srch");
let searchbtn=document.querySelector(".icon");
 
const weathericon=document.querySelector(".weathericon");
async function checkweather(city){
    const response= await fetch(url+city+`&appid=${apikey}`);
 var data = await response.json();
console.log(data);
document.querySelector(".city").innerHTML= data.name;
document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
document.querySelector(".wind").innerHTML= data.wind.speed +" km/h";
document.querySelector(".exp").style.display="block";
if(data.weather[0].main=="cloud"){
weathericon.src="C:\Users\sunit\Downloads\cloud.png";
}
else if(data.weather[0].main=="fog"){
weathericon.src=" C:\Users\sunit\Downloads\fog.png";
}
else if(data.weather[0].main=="sunny"){
weathericon.src=" C:\Users\sunit\Downloads\sunny.png";
} 
else if(data.weather[0].main=="rain"){
weathericon.src="  C:\Users\sunit\Downloads\heavy-rain.png";
}
else if(data.weather[0].main=="mist"){
weathericon.src="C:\Users\sunit\Downloads\fog (1).png  ";
}
}
 searchbtn.addEventListener("click",()=>{
    checkweather( searchbox.value);
})
 