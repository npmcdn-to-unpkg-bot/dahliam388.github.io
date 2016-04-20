$(document).ready(function() {

// This example creates a 2-pixel-wide red polyline showing the path

      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: {lat: 46, lng: -355},
          mapTypeId: google.maps.MapTypeId.TERRAIN
        });

        var flightPlanCoordinates = [
          {lat: 51.5074, lng: 0.1278}, //London
          {lat: 50.8503, lng: 4.3517}, //Bruss
          {lat: 52.3702, lng: 4.8952}, //Amstr
          {lat: 49.9929, lng: 8.2473}, //Rudesheim
          {lat: 47.0502, lng: 8.3093}, //Switz
          {lat: 48.1351, lng: 11.5820}, //Munich
          {lat: 48.2082, lng: 16.3738}, //Vienna
          {lat: 47.8095, lng: 13.0550}, //Salzburg
          {lat: 45.4408, lng: 12.3155}, //Venice
          {lat: 41.9028, lng: 12.4964}, //Rome
          {lat: 43.7696, lng: 11.2558}, //Florence
          {lat: 43.7384, lng: 7.4246}, //Monaco
          {lat: 48.8566, lng: 2.3522} //Paris     
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 1.5
        });

        flightPath.setMap(map);
      }

}