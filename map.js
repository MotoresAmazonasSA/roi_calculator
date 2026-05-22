const defaultLat  = -1.8312;
const defaultLng  = -78.1834;
const defaultZoom = 6;

const map = L.map('map').setView([defaultLat, defaultLng], defaultZoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let marker = L.marker([defaultLat, defaultLng], {
  draggable: true
}).addTo(map);

function resetMap() {
  map.setView([defaultLat, defaultLng], defaultZoom);
  marker.setLatLng([defaultLat, defaultLng]);
}

function locateUser() {
  if (!navigator.geolocation) {
    alert('Geolocation not supported');
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      map.setView([lat, lng], 14);
      marker.setLatLng([lat, lng]);
    },
    () => {
      alert('Could not get your location');
    }
  );
}

map.on('click', (e) => {
  marker.setLatLng(e.latlng);
});

locateUser();
