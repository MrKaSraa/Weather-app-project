const inputElem = document.querySelector('input')

let apiData = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    key: '0dd4f5dae38f8099b780f8bb28de2d39'
}

inputElem.addEventListener('keypress', (event) => {
  if (event.keyCode===13) {
    fetchdata()
  }
})
function fetchdata(params) {
    let countryval=inputElem.value


    fetch(`${apiData.url}${countryval}&&appid=${apiData.key}`)
    .then(res => res.json())
    .then(data=>{
       console.log(data);
       finalydata(data)
       }) 
}

function finalydata(data) {
    let cityElem = document.querySelector('.city')
        cityElem.innerHTML = `${data.name}, ${data.sys.country}`
    
        let dateElem = document.querySelector('.date')
        dateElem.innerHTML = date()
        
    let weatherElem = document.querySelector('.weather')
    weatherElem.innerHTML = `${data.weather[0].main}`

    let tempsElem = document.querySelector('.hi-low')
    tempsElem.innerHTML = `${Math.floor(data.main.temp_min - 273.15)}°c / ${Math.floor(data.main.temp_max - 273.15)}°c`
    
        let tempElem = document.querySelector('.temp')
        tempElem.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`
}



var app1 = document.getElementById('footer-writer1');
var typewriter = new Typewriter(app1, {
    loop: true
});

typewriter.typeString('Welcome')
    .pauseFor(2500)
    .deleteAll()
    .start();

    var app2 = document.getElementById('footer-writer2');
var typewriter = new Typewriter(app2, {
    loop: true
});

typewriter.typeString('search !')
    .pauseFor(2500)
    .deleteAll()
    .start();

function date () {


    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let now = new Date()

    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    let date = now.getDate()
    
    return `${day} ${date} ${month} ${year}`

}

window.onload(
    fetchdata2(),
    fetchdata3(),
    fetchdata4(),
    fetchdata5(),
)
function fetchdata5() {
    let countryval5='toronto'

    fetch(`${apiData.url}${countryval5}&&appid=${apiData.key}`)
    .then(res => res.json())
    .then(data=>{
       console.log(data);
       data5(data)
       }) 
}
function data5(data) {
    
    let citytoronto = document.querySelector('.city5')
        citytoronto.innerHTML = `${data.name}, ${data.sys.country}`
    
    
        let tempsElemtoronto = document.querySelector('.hi-low5')
        tempsElemtoronto.innerHTML = `${Math.floor(data.main.temp_min - 273.15)}°c / ${Math.floor(data.main.temp_max - 273.15)}°c`
        
    let weatherElemtoronto = document.querySelector('.weather5')
    weatherElemtoronto.innerHTML = `${data.weather[0].main}`

 
    
        let tempElemtoronto = document.querySelector('.temp5')
        tempElemtoronto.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`
}
function fetchdata4() {
    let countryval4='moscow'

    fetch(`${apiData.url}${countryval4}&&appid=${apiData.key}`)
    .then(res => res.json())
    .then(data=>{
       console.log(data);
       data4(data)
       }) 
}

function data4(data) {
    
    let citymoscow = document.querySelector('.city4')
        citymoscow.innerHTML = `${data.name}, ${data.sys.country}`
    
    
        let tempsElemmoscow = document.querySelector('.hi-low4')
        tempsElemmoscow.innerHTML = `${Math.floor(data.main.temp_min - 273.15)}°c / ${Math.floor(data.main.temp_max - 273.15)}°c`
        
    let weatherElemmoscow = document.querySelector('.weather4')
    weatherElemmoscow.innerHTML = `${data.weather[0].main}`

 
    
        let tempElemmoscow = document.querySelector('.temp4')
        tempElemmoscow.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`
}
function fetchdata3() {
    let countryval3='berlin'

    fetch(`${apiData.url}${countryval3}&&appid=${apiData.key}`)
    .then(res => res.json())
    .then(data=>{
       console.log(data);
       data3(data)
       }) 
}


function data3(data) {
    
    let cityberlin = document.querySelector('.city3')
        cityberlin.innerHTML = `${data.name}, ${data.sys.country}`
    
    
        let tempsElemberlin = document.querySelector('.hi-low3')
        tempsElemberlin.innerHTML = `${Math.floor(data.main.temp_min - 273.15)}°c / ${Math.floor(data.main.temp_max - 273.15)}°c`
        
    let weatherElemberlin = document.querySelector('.weather3')
    weatherElemberlin.innerHTML = `${data.weather[0].main}`

 
    
        let tempElemberlin = document.querySelector('.temp3')
        tempElemberlin.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`
}



function fetchdata2() {
    let countryval2='tehran'

    fetch(`${apiData.url}${countryval2}&&appid=${apiData.key}`)
    .then(res => res.json())
    .then(data=>{
       console.log(data);
       data2(data)
       }) 
}
function data2(data) {
    
    let citytehran = document.querySelector('.city2')
        citytehran.innerHTML = `${data.name}, ${data.sys.country}`
    
    
        let tempsElemtehran = document.querySelector('.hi-low2')
        tempsElemtehran.innerHTML = `${Math.floor(data.main.temp_min - 273.15)}°c / ${Math.floor(data.main.temp_max - 273.15)}°c`
        
    let weatherElemtehran = document.querySelector('.weather2')
    weatherElemtehran.innerHTML = `${data.weather[0].main}`

 
    
        let tempElemtehran = document.querySelector('.temp2')
        tempElemtehran.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`
}