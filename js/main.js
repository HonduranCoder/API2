var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var description = document.querySelector('.description')
var temperature = document.querySelector('.temperature')

button.addEventListener('click',function(){
fetch ("http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}&appid={b79a1f63300313cb4a66fc644ec51e74}")
  .then(response => response.json())
  .then(data => console.log(data))

  .catch(err => alert ("Wrong name"))
})
