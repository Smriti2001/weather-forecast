//Complete the Weather API Backend part using openweathermap api
var submitButton=document.querySelector(".submit")
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var months=["January","February","March","April","May","June","July","August","September","October","November","December"]
submitButton.addEventListener("click",getWeatherReport)
function getWeatherReport(){
    let input=document.querySelector(".search-box").value;
    console.log(input)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=8d26ceb827b0e46da3c335745a6bfc50`).
    then(response=>response.json()).then(result=>{
        console.log(result)
        document.querySelector("main").style.visibility="visible"
        document.querySelector(".error-msg").innerHTML=""
        document.querySelector(".city").innerHTML=`${result.name}, ${result.sys.country}`
        let date=new Date()
        
        document.querySelector(".weather").innerHTML=result.weather[0].description;
        document.querySelector(".date").innerHTML=days[date.getDay()]+" "+date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear()
        document.querySelector(".temp").innerHTML=`${Math.round(result.main.temp-273.15)}°c`
        document.querySelector(".hi-low").innerHTML=`${Math.round(result.main.temp_min-273.15)}°c / ${Math.round(result.main.temp_max-273.15)}°c`}). 
        catch(()=>{
            document.querySelector("main").style.visibility="hidden"
            document.querySelector(".error-msg").innerHTML="PLEASE ENTER A VALID INPUT"
        })
        

}
