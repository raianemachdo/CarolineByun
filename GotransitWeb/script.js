var map;
console.log(map);

function success(poos){ 
    console.log(poos.coords.latitude, poos.coords.longitude)

    if (map === undefined){
        map = L.map('map').setView([poos.coords.latitude, poos.coords.longitude], 15);
    }   else 
        map.remove();
        map = L.map('map').setView([poos.coords.latitude, poos.coords.longitude], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([poos.coords.latitude, poos.coords.longitude]).addTo(map)
    .bindPopup('Essa é sua localização em tempo real')
    .openPopup();
}

function error(error){
    console.log(error); /*Exibir mensagem quando a localização não for permitida*/
}
var watchID = navigator.geolocation.watchPosition(success, error,{
    enableHighAccuracy: true,
}); /*Monitorar a localização do usuário*/ 

