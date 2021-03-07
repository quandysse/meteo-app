// METEO APP //

// !!!!!!!!!!!!! ATTENTION !!!!!!!!!!!!!
// DANS UN VÉRITABLE PROJET, VOS CLÉES D'API NE DOIVENT JAMAIS ÊTRE MISE EN DUR
// DANS VOTRE CODE. NOUS NE NOUS ATTARDERONS SUR LE SUJET DANS CE COURS, MAIS
// ELLES DOIVENT ÊTRE CACHÉES DANS UN FICHIER .env OU DU MÊME ORDRE.
// SI VOUS NE LE FAITES PAS, VOUS VOUS EXPOSEZ, VOTRE PROJET ET VOTRE COMPTE EN
// BANQUE À UN PIRATAGE ET DES PRÉJUDICE IMPORTANTS. JE CONNAIS DES DÉVELOPPEURS QUI
// SE SONT FAIT FATURER PLUSIEURS DIXAINES DE MILIERS D'EUROS EN LEUR NOM. 
// Aller regarder git ignore

const form = document.getElementById('form');
const city = document.getElementById('city');

const textAnim = document.querySelector('h3');
new Typewriter(textAnim, {
    deleteSpeed: 30
})
.changeDelay(30)
.typeString('Look for the city whose temperature you want.') // pour taper du text
.start() // pour commencer l'anim


// ANim au click//
window.addEventListener('click', (e) => {
    const rond = document.createElement('div');
    rond.className = 'clickAnim';
    rond.style.top = `${e.pageY - 10}px`;
    rond.style.left = `${e.pageX - 10}px`;
    document.body.appendChild(rond);

    setTimeout(() => {
        rond.remove();
    }, 1500)
})

let element = document.getElementById('hide')
let btn = document.getElementById('btn')



form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    // cle moi
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=3865df021f9d2983383dd2af4fc0bdb9&units=metric';

    let requestWeather = new XMLHttpRequest();
    
    requestWeather.open('GET', url);
    requestWeather.responseType = 'json';
    requestWeather.send();
    
    requestWeather.onload = () =>{
        if (requestWeather.readyState === XMLHttpRequest.DONE){
            if (requestWeather.status === 200){ 
                let responseWeatherStocked = requestWeather.response;
                console.log(responseWeatherStocked);
                let temperature = responseWeatherStocked.main.temp; 
                let country = responseWeatherStocked.sys.country;
                let weather = responseWeatherStocked.weather[0].main


                document.getElementById('cityResult').textContent = city.value ; 
                document.getElementById('temp').textContent = temperature + "°";
                document.getElementById('country').textContent = country;


            } else {
                city.classList.add("error")
            }
        } 
    }

})




// //// BIEN DÉBUTER ////
// Pour débuter il faut commencer par comprendre ce que fait l'API que nous allons utiliser.
// Nous allons nous servir de OpenWeatherMap dans ce projet. Url -> https://openweathermap.org/current 
// Pour celà il vous faut créer un compte et aller récupérer vous clés d'API
// à cette adresse ->
