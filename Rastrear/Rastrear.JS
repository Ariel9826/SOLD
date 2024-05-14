document.addEventListener('DOMContentLoaded', function () {
    // Inicializar el mapa
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);

    // Agregar una capa de mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    // Agregar un marcador
    var marker = L.marker([51.5, -0.09]).addTo(mymap);

    // Agregar un popup al marcador
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
});
