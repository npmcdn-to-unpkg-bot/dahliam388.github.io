$(document).ready(function () {

  var map;

function initMap() {
        var map;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: {lat: 48, lng: -353},
          mapTypeId: google.maps.MapTypeId.TERRAIN
        
        initMap()

        });


    // polylines 
        var flightPlanCoordinates = [
          {lat: 51.5074, lng: 0.1278}, //London
          {lat: 50.8503, lng: 4.3517}, //Bruss
          {lat: 52.3702, lng: 4.8952}, //Amstr
          {lat: 49.9929, lng: 8.2473}, //Rudesheim
          {lat: 47.0502, lng: 8.3093}, //Lucerne
          {lat: 48.1351, lng: 11.5820}, //Munich
          {lat: 48.2082, lng: 16.3738}, //Vienna
          {lat: 47.8095, lng: 13.0550}, //Salzburg
          {lat: 45.4408, lng: 12.3155}, //Venice
          {lat: 41.9028, lng: 12.4964}, //Rome
          {lat: 43.7696, lng: 11.2558}, //Florence
          {lat: 43.7384, lng: 7.4246}, //Monaco
          {lat: 48.8566, lng: 2.3522} //Paris     
        ];
    // Marker tooltip text
        var locationName = ['London','Brussels','Amsterdam',
          'Rudesheim','Lucerne', 'Munich','Vienna',
          'Salzburg','Venice','Rome','Florence','Monaco','Paris'];
    // content box info
        var LondoncontentString = '<div id="content">'+
            '<h2 class="firstHeading">London</h2>'+
            '<p><h3>Land of the Free</h3></p>'+
            '</div>'+
            '</div>';
        var BrusselscontentString = '<div id="content">'+
            '<h2 class="firstHeading">Brussels</h2>'+
            '<p><h3>Land of the Waffles</h3></p>'+
            '</div>'+
            '</div>';
        var AmsterdamcontentString = '<div id="content">'+
            '<h2 class="firstHeading">Amsterdam</h2>'+
            '<p><h3>Land of the Waffles</h3></p>'+
            '</div>'+
            '</div>';
        var RudesheimcontentString = '<div id="content">'+
            '<h2 class="firstHeading">Rudesheim</h2>'+
            '<p><h3>Land of the Waffles</h3></p>'+
            '</div>'+
            '</div>';
        var LucernecontentString = '<div id="content">'+
            '<h2 class="firstHeading">Lucerne</h2>'+
            '<p><h3>Land of the Waffles</h3></p>'+
            '</div>'+
            '</div>';
        var MunichcontentString = '<div id="content">'+
            '<h2 class="firstHeading">Munich</h2>'+
            '<p><h3>Land of the Waffles</h3></p>'+
            '</div>'+
            '</div>';
        var ViennacontentString = '<div id="content">'+
            '<h2 class="firstHeading">Vienna</h2>'+
            '<p><h3>Land of the Waffles</h3></p>'+
            '</div>'+
            '</div>';
        var SalzburgcontentString = '<div id="content">'+
            '<h2 class="firstHeading">Salzburg</h2>'+
            '<p><h3>Land of the Waffles</h3></p>'+
            '</div>'+
            '</div>';
        var VenicecontentString = '<div id="content">'+
            '<h2 class="firstHeading">Venice</h2>'+
            '<p><h3>Land of the Waffles</h3></p>'+
            '</div>'+
            '</div>';
        var RomecontentString = '<div id="content">'+
            '<h2 class="firstHeading">Rome</h2>'+
            '<p><h3>Land of the Waffles</h3></p>'+
            '</div>'+
            '</div>';
        var FlorencecontentString = '<div id="content">'+
            '<h2 class="firstHeading">Florence</h2>'+
            '<p><h3>Land of the Waffles</h3></p>'+
            '</div>'+
            '</div>'; 
        var MonacocontentString = '<div id="content">'+
            '<h2 class="firstHeading">Monaco</h2>'+
            '<p><h3>Land of the Waffles</h3></p>'+
            '</div>'+
            '</div>';
        var PariscontentString = '<div id="content">'+
            '<h2 class="firstHeading">Paris</h2>'+
            '<p><h3>Land of the Waffles</h3></p>'+
            '</div>'+
            '</div>';       
    //info Windows
        var londoninfowindow = new google.maps.InfoWindow({
              content: LondoncontentString
          });
        var infowindow = new google.maps.InfoWindow({
              content: BrusselscontentString
          });
    // Markers
          var londonMarker = new google.maps.Marker({
             position: flightPlanCoordinates[0],
             map: map,
             title: locationName[0]
          }); 
          var brusselsMarker = new google.maps.Marker({
             position: flightPlanCoordinates[1],
             map: map,
             title: locationName[1]  
          });
          var amsterdamMarker = new google.maps.Marker({
             position: flightPlanCoordinates[2],
             map: map,
             title: locationName[2]  
          });
          var marker = new google.maps.Marker({
             position: flightPlanCoordinates[3],
             map: map,
             title: locationName[3]  
          });
          var marker = new google.maps.Marker({
             position: flightPlanCoordinates[4],
             map: map,
             title: locationName[4]  
          });
          var marker = new google.maps.Marker({
             position: flightPlanCoordinates[5],
             map: map,
             title: locationName[5]  
          });
          var marker = new google.maps.Marker({
             position: flightPlanCoordinates[6],
             map: map,
             title: locationName[6]  
          });
          var marker = new google.maps.Marker({
             position: flightPlanCoordinates[7],
             map: map,
             title: locationName[7]  
          });
          var marker = new google.maps.Marker({
             position: flightPlanCoordinates[8],
             map: map,
             title: locationName[8]  
          });
          var marker = new google.maps.Marker({
             position: flightPlanCoordinates[9],
             map: map,
             title: locationName[9]  
          });
          var marker = new google.maps.Marker({
             position: flightPlanCoordinates[10],
             map: map,
             title: locationName[10]  
          });
          var marker = new google.maps.Marker({
             position: flightPlanCoordinates[11],
             map: map,
             title: locationName[11]  
          });
          var marker = new google.maps.Marker({
             position: flightPlanCoordinates[12],
             map: map,
             title: locationName[12]  
          });
    // infowindow events
          londonMarker.addListener('click', function() {
             londoninfowindow.open(map, londonMarker);
          });
          brusselsMarker.addListener('click', function() {
             infowindow.open(map, brusselsMarker);
          });
          amsterdamMarker.addListener('click', function() {
             infowindow.open(map, amsterdamMarker);
          });
    //Map rendering
          var flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 1.5
          });
          flightPath.setMap(map); 
  }

  })