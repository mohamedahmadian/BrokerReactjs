const google = window.google;
const center = { lat: 0, lng: 0 };
let map;
const createMapWith2Markers = (elementId, originLatLng, destinationLatLng) => {
  const elem = elementId || 'map';
  initMap(elem);

  const mapBounds = new google.maps.LatLngBounds();

  const originMarker = new google.maps.Marker({
    position: originLatLng,
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
  });
  mapBounds.extend(originLatLng);

  const destinationMarker = new google.maps.Marker({
    position: destinationLatLng,
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  });
  mapBounds.extend(destinationLatLng);

  if (!mapBounds.isEmpty()) map.fitBounds(mapBounds);
  showRoute(originLatLng, destinationLatLng);
};

const initMap = elementId => {
  elementId = elementId;

  map = new google.maps.Map(document.getElementById(elementId), {
    center: center,
    zoom: 12,
    mapTypeId: 'roadmap',
    gestureHandling: 'cooperative',
    scrollwheel: false
  });
};
const showRoute = (origin, destination) => {
  const directionsDisplay = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  directionsDisplay.setMap(map);
  directionsDisplay.setOptions({ suppressMarkers: true });
  const request = {
    origin: origin,
    destination: destination,
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  };

  directionsService.route(request, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('خطا در پیدا کردن مسیر');
    }
  });
};

export {  createMapWith2Markers };
