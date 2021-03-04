// METEO APP //

// faire en sorte d'afficher une ville en dur
// faire en sorte que ce soit dynamique

let city = 'Paris';
let cities = document.getElementById('cities');

// https://api.openweathermap.org/data/2.5/weather?q=saint-saulve&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric
// https://api.openweathermap.org/data/2.5/weather?q=paris&appid=3865df021f9d2983383dd2af4fc0bdb9&units=metric

getWeather (city) => {

}
    
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3865df021f9d2983383dd2af4fc0bdb9&units=metric'; // api key 

    let requestWeather = new XMLHttpRequest();
    requestWeather.open('GET', url)
    requestWeather.responseType = 'json'
    requestWeather.send();


    requestWeather.onload = () =>{
        
        if (requestWeather.readyState === XMLHttpRequest.DONE){ // -> on verifie si l'etat de notre requête est égal à l'état accomplie (DONE) de notre objet xmlhttpRequest
            // verifier si le code http est bon
            if (requestWeather.status === 200  ){ 

                let responseWeatherStocked = requestWeather.response;
                console.log(responseWeatherStocked);

                let temperature = responseWeatherStocked.main.temp;
                let city = responseWeatherStocked.name;
                console.log(temperature);
                console.log(city);
                
                document.getElementById('title').textContent = temperature;
                document.getElementById('city').textContent = city;

                
            } else {
                // si au dessus c pas bon, on previent l'utilisateur qu'il y a une erreur
                alert('Il y a un prblm, merci de revenir plus tard')
            }
        } 
    }

    cities.addEventListener('Click', (e) =>{
        newCity = prompt('Rendter une ville')

        getWeather (newCity);
    })



// //// BIEN DÉBUTER ////
// Pour débuter il faut commencer par comprendre ce que fait l'API que nous allons utiliser.
// Nous allons nous servir de OpenWeatherMap dans ce projet. Url -> https://openweathermap.org/current 
// Pour celà il vous faut créer un compte et aller récupérer vous clés d'API
// à cette adresse ->
// !!!!!!!!!!!!! ATTENTION !!!!!!!!!!!!!
// DANS UN VÉRITABLE PROJET, VOS CLÉES D'API NE DOIVENT JAMAIS ÊTRE MISE EN DUR
// DANS VOTRE CODE. NOUS NE NOUS ATTARDERONS SUR LE SUJET DANS CE COURS, MAIS
// ELLES DOIVENT ÊTRE CACHÉES DANS UN FICHIER .env OU DU MÊME ORDRE.
// SI VOUS NE LE FAITES PAS, VOUS VOUS EXPOSEZ, VOTRE PROJET ET VOTRE COMPTE EN
// BANQUE À UN PIRATAGE ET DES PRÉJUDICE IMPORTANTS. JE CONNAIS DES DÉVELOPPEURS QUI
// SE SONT FAIT FATURER PLUSIEURS DIXAINES DE MILIERS D'EUROS EN LEUR NOM. 
// Aller regarder git ignore
