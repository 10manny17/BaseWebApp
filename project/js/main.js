$(document).ready(function(){
getWeather();

})

function getWeather()
{
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Boston&units=imperial&APPID=a89dfce1180a55ec1aaf33a2a07e89bb";

$.ajax(url,{ succes: function(data) {
  console.log(data);
  $(".city").text(data.name);
  $(".temp").text(data.main.temp);

}})

}