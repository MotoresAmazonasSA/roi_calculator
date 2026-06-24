// URL injected at build time by GitHub Actions (secret: APP_SCRIPT)
const APP_SCRIPT_URL = '__APP_SCRIPT__';

function submitToSheet() {
  if (!APP_SCRIPT_URL || APP_SCRIPT_URL === '__APP_SCRIPT__') return;

  const latlng = marker.getLatLng();
  const payload = {
    coordinates:  `${latlng.lat.toFixed(4)}, ${latlng.lng.toFixed(4)}`,
    kmWeek:       document.getElementById('km_week').value,
    gasPrice:     document.getElementById('gas_price').value,
    gasEngine:    document.getElementById('gas_engine_cost').value,
    kmPerGal:     document.getElementById('km_per_gal').value,
    repairsYear:  document.getElementById('repair_cost_yr').value,
    electricPrice: document.getElementById('electric_price').value,
    addPanels:    addPanels  ? 'TRUE' : 'FALSE',
    addBattery:   addBattery ? 'TRUE' : 'FALSE',
    addHull:      addHull    ? 'TRUE' : 'FALSE',
    downpayment:  document.getElementById('downpayment').value,
    subsidy:      document.getElementById('subsidy').value,
    interest:     document.getElementById('interest').value,
  };

  fetch(APP_SCRIPT_URL, {
    method:  'POST',
    mode:    'no-cors', // Apps Script redirects cross-origin; no-cors lets the request through
    headers: { 'Content-Type': 'text/plain' }, // json header is stripped in no-cors; Apps Script parses the body regardless
    body:    JSON.stringify(payload),
  }).catch(() => {}); // never block the user on failure
}
