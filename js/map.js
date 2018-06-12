var map;
function initMap() {
  var lyon = {lat: 45.764043, lng: 4.835659};

  map = new google.maps.Map(document.getElementById('map'), {
  center: lyon,
  zoom: 12
  });

  var marker = new google.maps.Marker({
    position: lyon,
    map:map
  });
  console.log(lyon);
}
