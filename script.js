
function iniciarMap() {
    var coord = { lat: -33.67698238465609, lng: -71.22175758181248 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}
