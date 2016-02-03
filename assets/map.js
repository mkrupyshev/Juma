var map;
var marker;
function initMap() {
    map = new google.maps.Map(document.getElementById('contactMap'), {
        center: {lat: 54.1479393, lng: -4.4843558},
        zoom: 11,
        scrollwheel: false
    });

    marker = new google.maps.Marker({
        position: {lat: 54.1479393, lng: -4.4843558},
        map: map,
        title: "Blue Tortoise Ltd."
    });
}
