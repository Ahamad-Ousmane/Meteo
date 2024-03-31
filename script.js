const form = document.querySelector('form');
const input = document.querySelector('input[type = "text"]');
const weatherDiv = document.getElementById('weather');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = input.value.trim();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fce0f5ca5942f8850395f392feb3383e&units=metric`)
    .then(response => response.json())
    .then(data => {
        const weather = {
            city: data.name,
            description: data.weather[0].description,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            icon: data.weather[0].icon,
        };

        displayweather(weather);
    })
    .catch(error => console.error(error));
})

function displayweather(weather){
    weatherDiv.innerHTML = '';
    const card = document.createElement('div');
    card.classList.add('weather-card');

    const title = document.createElement('h2');
    title.textContent = weather.city;
    card.appendChild(title);

    const icon = document.createElement('img');
    icon.src = `http://openweathermap.org/img/wn/${weather.icon}.png`
    card.appendChild(icon);

    const description = document.createElement('p');
    description.textContent = weather.description;
    card.appendChild(description);

    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${weather.temperature} ºC`
    card.appendChild(temperature);

    const humidity = document.createElement('p');
    humidity.textContent = `Humidite: ${weather.humidity}%`
    card.appendChild(humidity);


    weatherDiv.appendChild(card);
    weatherDiv.style.display = 'block';
}



var images = ["img/wolf-647528_640.jpg", "img/avenue-2215317_640.jpg", "img/forest-1072828_640.jpg", "img/mountains-190055_640.jpg", "img/sunrise-1014712_640.jpg", "img/tree-736885_1280.jpg"];
var index = 0;

function changeBack(){
    index = (index + 1) % images.length;
    imageSuivante = images[index];

    document.body.className = "background-" + index;
}

setInterval(changeBack, 2000);


function disparaitre(){
   var texte = document.getElementById('texte')
    texte.style.display = 'none';
    setTimeout(function(){
        texte.style.display = 'block'
    },2000);
}

setInterval(disparaitre, 2000);

function f(event){
    event.preventDefault();
    var w = document.getElementById('weather');
    w.innerHTML = "";
    var i = document.getElementById('city');
    i.value = "";
}
