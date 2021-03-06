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

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    // cle moi
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=3865df021f9d2983383dd2af4fc0bdb9&units=metric';

    // cle emeric
    // const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=ff349be070b028d291296e97b0cc432c&units=metric';

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
                // document.getElementById('title').textContent = temperature;
                // document.getElementById('city').textContent = city.value + ' : ' + temperature + '°';
                document.getElementById('temp').textContent = city.value + ' : ' + temperature + '°';
                // console.log(document.getElementById('temp'))

            } else {
                alert("Ville non valide");
            }
        } 
    }

})




// //// BIEN DÉBUTER ////
// Pour débuter il faut commencer par comprendre ce que fait l'API que nous allons utiliser.
// Nous allons nous servir de OpenWeatherMap dans ce projet. Url -> https://openweathermap.org/current 
// Pour celà il vous faut créer un compte et aller récupérer vous clés d'API
// à cette adresse ->
