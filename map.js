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

// ── Search with autocomplete ──

const searchInput    = document.getElementById('map-search-input');
const searchDropdown = document.getElementById('map-search-dropdown');
let lastResults      = [];
let debounceTimer    = null;

searchInput.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  const query = searchInput.value.trim();

  if (query.length < 3) {
    closeDropdown();
    return;
  }

  debounceTimer = setTimeout(() => fetchSuggestions(query), 350);
});

function fetchSuggestions(query) {
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`)
    .then(res => res.json())
    .then(results => renderDropdown(results))
    .catch(() => closeDropdown());
}

function renderDropdown(results) {
  lastResults = results;
  searchDropdown.innerHTML = '';

  if (results.length === 0) {
    closeDropdown();
    return;
  }

  results.forEach((result, index) => {
    const li = document.createElement('li');
    li.className = 'map-search-option';
    li.textContent = result.display_name;
    li.dataset.index = index;
    li.addEventListener('mousedown', (e) => {
      e.preventDefault();
      selectResult(result);
    });
    searchDropdown.appendChild(li);
  });

  searchDropdown.classList.add('open');
}

function selectResult(result) {
  const lat = parseFloat(result.lat);
  const lon = parseFloat(result.lon);
  searchInput.value = result.display_name;
  map.setView([lat, lon], 13);
  marker.setLatLng([lat, lon]);
  closeDropdown();
}

function closeDropdown() {
  searchDropdown.innerHTML = '';
  searchDropdown.classList.remove('open');
  lastResults = [];
}

// Keyboard navigation
searchInput.addEventListener('keydown', (e) => {
  const items  = [...searchDropdown.querySelectorAll('.map-search-option')];
  const hi     = searchDropdown.querySelector('.map-search-option.highlighted');
  const hiIdx  = hi ? items.indexOf(hi) : -1;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (hiIdx < items.length - 1) {
      if (hi) hi.classList.remove('highlighted');
      items[hiIdx + 1].classList.add('highlighted');
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (hiIdx > 0) {
      hi.classList.remove('highlighted');
      items[hiIdx - 1].classList.add('highlighted');
    }
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (hi) {
      selectResult(lastResults[parseInt(hi.dataset.index)]);
    } else if (items.length > 0) {
      selectResult(lastResults[0]);
    } else {
      searchLocation();
    }
  } else if (e.key === 'Escape') {
    closeDropdown();
  }
});

// Close dropdown on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('.map-search-input-wrap')) {
    closeDropdown();
  }
});

function searchLocation() {
  const query = searchInput.value.trim();
  if (!query) return;

  const t = translations[currentLang] || translations['es'];

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`)
    .then(res => res.json())
    .then(results => {
      if (results.length === 0) {
        alert(t['map-search-not-found'] || 'No se encontró la ubicación.');
        return;
      }
      selectResult(results[0]);
    })
    .catch(() => {
      alert(t['map-search-error'] || 'Error al buscar la ubicación.');
    });
}

locateUser();
