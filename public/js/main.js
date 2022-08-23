

const cityVal = document.getElementById("searchBar");
const btn = document.getElementById("btn");
const cityOutput = document.getElementById("city_name");
const temp = document.getElementById("temp");
const statusImg = document.getElementById("status-img");
const day = document.getElementById("Day");
const date = document.getElementById("date");
const dataDiv = document.querySelector(".data");

//time::

const currentDate = new Date();

let currDay= currentDate.getDay();
let days = ["Sun" ,"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let currMon = currentDate.getMonth();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
day.textContent = days[currDay];
date.textContent = `${currentDate.getDate()}, ${months[currMon]}`;


const getWeatherInfo = async(event)=>{
    event.preventDefault();
    let cityName = cityVal.value;
    cityOutput.textContent = `Please Enter the City Name`;
    if (cityName === ""){
        
        dataDiv.classList.add("data-hidden");
    }else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=1b6fbaf8ced49d8edc2907cd1fe5c991`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            cityOutput.textContent = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp.textContent = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            console.log(tempMood);
            console.log(statusImg.innerHTML)
            if (tempMood == "Clouds"){
                statusImg.innerHTML = "<i class='fa-solid fa-cloud'></i>"
            }else if (tempMood == "Clear"){
                statusImg.innerHTML = "<i class='fa-solid fa-sun' style='color: yellow;'></i>"
            }else if (tempMood == "Rain"){
                statusImg.innerHTML = "<i class='fa-solid fa-cloud-rain'></i>"
            }else{
                statusImg.innerHTML = "<i class='fa-solid fa-sun' style='color: yellow;'></i>"
            }

            dataDiv.classList.remove("data-hidden");
            
        } catch {
            cityOutput.textContent = `Please Enter the Correct City Name`;
            dataDiv.classList.add("data-hidden");
        }
    }
}

btn.addEventListener('click', getWeatherInfo);




