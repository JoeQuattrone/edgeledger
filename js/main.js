var map;
  function initMap() {
    const loc = {lat: 42.361145, lng: -71.057083}
     map = new google.maps.Map(document.getElementById('map'), {
      center: loc,
      zoom: 14
    });
    const marker = new google.maps.Marker({ position: loc, map: map })
  }
