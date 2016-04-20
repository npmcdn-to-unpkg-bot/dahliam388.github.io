$(document).ready(function() {

      // This example displays a marker at the center of Australia.
      // When the user clicks the marker, an info window opens.
      // The maximum width of the info window is set to 200 pixels.
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
          {lat: 49.9821, lng: 7.9301}, //Rudesheim
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

var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';
  });

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: London,
    map: map,
    title: 'Uluru (Ayers Rock)'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}