const APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyI1c6VSjmIVs8tpCbRzms9zCTDeYL-BLst6NmZ2gj4tCkNy7KbfREJZGcB33zt_qTa/exec';

// One UUID per browser tab — persists across reloads, resets when tab closes
const SESSION_ID = sessionStorage.getItem('sessionId') || (() => {
  const id = crypto.randomUUID();
  sessionStorage.setItem('sessionId', id);
  return id;
})();

function submitToSheet() {
  const latlng = marker.getLatLng();
  const payload = {
    sessionId:     SESSION_ID,
    coordinates:   `${latlng.lat.toFixed(4)}, ${latlng.lng.toFixed(4)}`,
    kmWeek:        document.getElementById('km_week').value,
    gasPrice:      document.getElementById('gas_price').value,
    gasEngine:     document.getElementById('gas_engine_cost').value,
    kmPerGal:      document.getElementById('km_per_gal').value,
    repairsYear:   document.getElementById('repair_cost_yr').value,
    electricPrice: document.getElementById('electric_price').value,
    addPanels:     addPanels  ? 'TRUE' : 'FALSE',
    addBattery:    addBattery ? 'TRUE' : 'FALSE',
    addHull:       addHull    ? 'TRUE' : 'FALSE',
    downpayment:   document.getElementById('downpayment').value,
    subsidy:       document.getElementById('subsidy').value,
    interest:      document.getElementById('interest').value,
  };

  fetch(APP_SCRIPT_URL, {
    method:  'POST',
    mode:    'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body:    JSON.stringify(payload),
  }).catch(() => {});
}
