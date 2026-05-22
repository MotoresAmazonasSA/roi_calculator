let addPanels = true;
let addBattery = true;

function goToStep(step) {
  document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.step-card').forEach(c => c.classList.remove('active'));

  document.getElementById(`step-${step}`).classList.add('active');

  const indicator = document.getElementById(`indicator-${step}`);
  if (indicator) indicator.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleButtons(yesBtn, noBtn, value, type) {
  if (value) {
    yesBtn.classList.add('active');
    noBtn.classList.remove('active');
  } else {
    noBtn.classList.add('active');
    yesBtn.classList.remove('active');
  }

  if (type === 'panel')   addPanels  = value;
  if (type === 'battery') addBattery = value;
}

const panelYes   = document.getElementById('panel-yes');
const panelNo    = document.getElementById('panel-no');
const batteryYes = document.getElementById('battery-yes');
const batteryNo  = document.getElementById('battery-no');

panelYes.onclick   = () => { toggleButtons(panelYes,   panelNo,   true,  'panel');   calculateResults(); };
panelNo.onclick    = () => { toggleButtons(panelYes,   panelNo,   false, 'panel');   calculateResults(); };
batteryYes.onclick = () => { toggleButtons(batteryYes, batteryNo, true,  'battery'); calculateResults(); };
batteryNo.onclick  = () => { toggleButtons(batteryYes, batteryNo, false, 'battery'); calculateResults(); };

function formatMoney(value) {
  return '$' + Math.round(value).toLocaleString('en-US');
}

const monthlySlider = document.getElementById('monthly_payment');

monthlySlider.addEventListener('input', () => {
  document.getElementById('monthly_payment_label').innerText = '$' + monthlySlider.value;
});

function calculateResults() {
  const kmWeek      = parseFloat(document.getElementById('km_week').value)        || 0;
  const gasPrice    = parseFloat(document.getElementById('gas_price').value)       || 0;
  const gasEngine   = parseFloat(document.getElementById('gas_engine_cost').value) || 0;
  const kmPerGal    = parseFloat(document.getElementById('km_per_gal').value)      || 14;
  const repairsYear = parseFloat(document.getElementById('repair_cost_yr').value)  || 0;

  const electricPrice  = parseFloat(document.getElementById('electric_price').value) || 6000;
  const downpayment    = parseFloat(document.getElementById('downpayment').value)    || 0;
  const subsidy        = parseFloat(document.getElementById('subsidy').value)        || 0;

  const monthlyPayment = parseFloat(document.getElementById('monthly_payment').value) || 80;
  const interest       = parseFloat(document.getElementById('interest').value)        || 0;

  const monthlyGallons = (kmWeek * 4.33) / kmPerGal;
  const fuelMonthly    = monthlyGallons * gasPrice;
  const repairMonthly  = repairsYear / 12;
  const gasMonthly     = Math.round(fuelMonthly + repairMonthly);

  const solarCost =
    electricPrice +
    (addPanels  ? 1500 : 0) +
    (addBattery ? 2500 : 0);

  const financed = Math.max(0, solarCost - subsidy - downpayment);

  let months;
  if (interest > 0) {
    const r = interest / 100 / 12;
    months = Math.ceil(
      -Math.log(1 - financed * r / monthlyPayment) /
      Math.log(1 + r)
    );
  } else {
    months = financed / monthlyPayment;
  }

  const years = months / 12;

  const gas10y   = gasEngine + gasMonthly * 120;
  const solar10y = downpayment + monthlyPayment * Math.min(months, 120);
  const savings  = gas10y - solar10y;

  const roiYears = gasMonthly > 0
    ? (solarCost - gasEngine) / (gasMonthly * 12)
    : 0;

  const t = translations[currentLang] || translations['es'];
  const unitYears = t['unit-years'] || 'años';

  document.getElementById('gas-upfront').innerText    = formatMoney(gasEngine);
  document.getElementById('solar-upfront').innerText  = formatMoney(solarCost);
  document.getElementById('gas-monthly').innerText    = formatMoney(gasMonthly);
  document.getElementById('solar-monthly').innerText  = formatMoney(monthlyPayment);
  document.getElementById('gas-10y').innerText        = formatMoney(gas10y);
  document.getElementById('solar-10y').innerText      = formatMoney(solar10y);
  document.getElementById('savings-total').innerText  = formatMoney(savings);
  document.getElementById('payoff-years').innerText   = years.toFixed(1) + ' ' + unitYears;
  document.getElementById('roi-years').innerText      = roiYears.toFixed(1) + ' ' + unitYears;

  document.getElementById('warning-term').classList.toggle('visible', months > 60);

  document.getElementById('bd-motor').innerText   = formatMoney(electricPrice);
  document.getElementById('bd-panels').innerText  = formatMoney(1500);
  document.getElementById('bd-battery').innerText = formatMoney(2500);
  document.getElementById('bd-total').innerText   = formatMoney(solarCost);
  document.getElementById('bd-panels-row').style.display  = addPanels  ? '' : 'none';
  document.getElementById('bd-battery-row').style.display = addBattery ? '' : 'none';

  document.getElementById('sum-gas-monthly').innerText   = formatMoney(gasMonthly);
  document.getElementById('sum-solar-monthly').innerText = formatMoney(monthlyPayment);
  document.getElementById('sum-payoff').innerText        = years.toFixed(1) + ' ' + unitYears;
  document.getElementById('sum-savings').innerText       = formatMoney(savings);

  const diff       = monthlyPayment - gasMonthly;
  const diffTextEl = document.getElementById('sum-diff-text');
  if (diff > 0.5) {
    diffTextEl.innerHTML = (t['sum-diff-more'] || 'pagando <strong>{amount}</strong> más').replace('{amount}', formatMoney(Math.abs(diff)));
  } else if (diff < -0.5) {
    diffTextEl.innerHTML = (t['sum-diff-less'] || 'ahorrando <strong>{amount}</strong>').replace('{amount}', formatMoney(Math.abs(diff)));
  } else {
    diffTextEl.innerHTML = t['sum-diff-same'] || 'pagando prácticamente lo mismo';
  }
}

calculateResults();

function matchGasPayment() {
  const kmWeek      = parseFloat(document.getElementById('km_week').value)       || 0;
  const gasPrice    = parseFloat(document.getElementById('gas_price').value)      || 0;
  const kmPerGal    = parseFloat(document.getElementById('km_per_gal').value)     || 14;
  const repairsYear = parseFloat(document.getElementById('repair_cost_yr').value) || 0;

  const gasMonthly = (kmWeek * 4.33) / kmPerGal * gasPrice + repairsYear / 12;

  const slider  = document.getElementById('monthly_payment');
  const clamped = Math.min(Math.max(Math.round(gasMonthly), parseInt(slider.min)), parseInt(slider.max));

  slider.value = clamped;
  document.getElementById('monthly_payment_label').innerText = '$' + clamped;
  calculateResults();
}

// ── Navigation ──
const menuPages = ['calculadora', 'supuestos', 'protocolo', 'aviso'];

function navigateTo(page) {
  menuPages.forEach(p => {
    const pageEl = document.getElementById('page-' + p);
    const navEl  = document.getElementById('nav-'  + p);
    if (pageEl) pageEl.classList.toggle('active', p === page);
    if (navEl)  navEl.classList.toggle('active',  p === page);
  });
  closeMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openMenu() {
  document.getElementById('side-menu').classList.add('open');
  document.getElementById('menu-overlay').classList.add('open');
}

function closeMenu() {
  document.getElementById('side-menu').classList.remove('open');
  document.getElementById('menu-overlay').classList.remove('open');
}
