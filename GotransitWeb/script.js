// Exemplo de código JavaScript para carregar um mapa (até a gente achar uma API que realmente funcione)

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 }, // Coordenadas do centro do mapa
        zoom: 8 // Nível de zoom do mapa
    });

}
