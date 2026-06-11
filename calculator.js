let addPanels  = true;
let addBattery = true;
let addHull    = false;

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
  if (type === 'hull')    addHull    = value;
}

const panelYes   = document.getElementById('panel-yes');
const panelNo    = document.getElementById('panel-no');
const batteryYes = document.getElementById('battery-yes');
const batteryNo  = document.getElementById('battery-no');
const hullYes    = document.getElementById('hull-yes');
const hullNo     = document.getElementById('hull-no');

panelYes.onclick   = () => { toggleButtons(panelYes,   panelNo,   true,  'panel');   calculateResults(); };
panelNo.onclick    = () => { toggleButtons(panelYes,   panelNo,   false, 'panel');   calculateResults(); };
batteryYes.onclick = () => { toggleButtons(batteryYes, batteryNo, true,  'battery'); calculateResults(); };
batteryNo.onclick  = () => { toggleButtons(batteryYes, batteryNo, false, 'battery'); calculateResults(); };
hullYes.onclick    = () => { toggleButtons(hullYes,    hullNo,    true,  'hull');    calculateResults(); };
hullNo.onclick     = () => { toggleButtons(hullYes,    hullNo,    false, 'hull');    calculateResults(); };

function formatMoney(value) {
  return 'US$' + Math.round(value).toLocaleString('en-US');
}

const monthlySlider = document.getElementById('monthly_payment');

monthlySlider.addEventListener('input', () => {
  document.getElementById('monthly_payment_label').innerText = 'US$' + monthlySlider.value;
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
    (addBattery ? 2500 : 0) +
    (addHull    ? 2000 : 0);

  const financed = Math.max(0, solarCost - subsidy - downpayment);

  let months;
  let rawMonths;
  if (interest > 0) {
    const r = interest / 100 / 12;
    rawMonths = -Math.log(1 - financed * r / monthlyPayment) / Math.log(1 + r);
    months = Math.ceil(rawMonths);
  } else {
    rawMonths = financed / monthlyPayment;
    months = rawMonths;
  }

  const years = rawMonths / 12;

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
  document.getElementById('bd-hull').innerText    = formatMoney(2000);
  document.getElementById('bd-total').innerText   = formatMoney(solarCost);
  document.getElementById('bd-panels-row').style.display  = addPanels  ? '' : 'none';
  document.getElementById('bd-battery-row').style.display = addBattery ? '' : 'none';
  document.getElementById('bd-hull-row').style.display    = addHull    ? '' : 'none';

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

setLanguage(currentLang);

function matchGasPayment() {
  const kmWeek      = parseFloat(document.getElementById('km_week').value)       || 0;
  const gasPrice    = parseFloat(document.getElementById('gas_price').value)      || 0;
  const kmPerGal    = parseFloat(document.getElementById('km_per_gal').value)     || 14;
  const repairsYear = parseFloat(document.getElementById('repair_cost_yr').value) || 0;

  const gasMonthly = (kmWeek * 4.33) / kmPerGal * gasPrice + repairsYear / 12;

  const slider  = document.getElementById('monthly_payment');
  const clamped = Math.min(Math.max(Math.round(gasMonthly), parseInt(slider.min)), parseInt(slider.max));

  slider.value = clamped;
  document.getElementById('monthly_payment_label').innerText = 'US$' + clamped;
  calculateResults();
}

// ── Download results as PDF ──
function downloadResults() {
  const lang = currentLang || 'es';
  const L = {
    es: {
      title:      'Calculadora Ríos Solares | Kara Solar',
      system:     'Sistema de transporte solar configurado',
      motor:      'Motor eléctrico + batería (Kara Solar)',
      panels:     'Paneles solares', battery: 'Segunda batería', hull: 'Casco de fibra de vidrio',
      total:      'Costo total del sistema',
      comparison: 'Comparación de costos',
      upfront:    'Costo inicial', monthly: 'Costo mensual', tenyear: 'Total a 10 años',
      savingsRow: 'Ahorro total (10 años)', gas: 'Gasolina', solar: 'Solar',
      metrics:    'Indicadores clave',
      payoffLbl:  'Años para terminar de pagar', roiLbl: 'Tiempo para recuperar la inversión',
      nextsteps:  'Próximos pasos',
      catLink:    'Ver catálogo de equipos', contactLink: 'Consultas y compras',
    },
    en: {
      title:      'Ríos Solares Calculator | Kara Solar',
      system:     'Configured solar transport system',
      motor:      'Electric motor + battery (Kara Solar)',
      panels:     'Solar panels', battery: 'Second battery', hull: 'Fiberglass hull',
      total:      'Total system cost',
      comparison: 'Cost comparison',
      upfront:    'Initial cost', monthly: 'Monthly cost', tenyear: 'Total over 10 years',
      savingsRow: 'Total savings (10 years)', gas: 'Gasoline', solar: 'Solar',
      metrics:    'Key metrics',
      payoffLbl:  'Years to finish paying', roiLbl: 'Time to recover investment',
      nextsteps:  'Next steps',
      catLink:    'View equipment catalog', contactLink: 'Purchases and inquiries',
    },
    pt: {
      title:      'Calculadora Ríos Solares | Kara Solar',
      system:     'Sistema de transporte solar configurado',
      motor:      'Motor elétrico + bateria (Kara Solar)',
      panels:     'Painéis solares', battery: 'Segunda bateria', hull: 'Casco de fibra de vidro',
      total:      'Custo total do sistema',
      comparison: 'Comparação de custos',
      upfront:    'Custo inicial', monthly: 'Custo mensal', tenyear: 'Total em 10 anos',
      savingsRow: 'Poupança total (10 anos)', gas: 'Gasolina', solar: 'Solar',
      metrics:    'Indicadores-chave',
      payoffLbl:  'Anos para terminar de pagar', roiLbl: 'Tempo para recuperar o investimento',
      nextsteps:  'Próximos passos',
      catLink:    'Ver catálogo de equipamentos', contactLink: 'Compras e consultas',
    }
  }[lang] || {};

  const g  = id => document.getElementById(id)?.innerText || '';
  const vis = id => document.getElementById(id)?.style.display !== 'none';

  const html = `<!DOCTYPE html><html lang="${lang}"><head><meta charset="UTF-8">
<title>${L.title}</title>
<style>
  *{box-sizing:border-box}body{font-family:Arial,sans-serif;max-width:680px;margin:2rem auto;padding:0 1rem;color:#1a1a1a;font-size:14px}
  h1{color:#1a7a4a;font-size:1.2rem;margin-bottom:.2rem}.sub{color:#666;font-size:.82rem;margin-bottom:1.5rem}
  h2{color:#1a7a4a;font-size:.95rem;border-bottom:2px solid #e0f2e9;padding-bottom:.3rem;margin-top:1.4rem}
  table{width:100%;border-collapse:collapse;margin-top:.4rem;font-size:.87rem}
  td,th{padding:.4rem .7rem;border:1px solid #ddd}th{background:#f0faf5;font-weight:600}
  .metrics{display:flex;gap:1rem;flex-wrap:wrap;margin-top:.6rem}
  .metric{flex:1;min-width:140px;background:#f0faf5;border:1px solid #c5e8d5;border-radius:8px;padding:.7rem 1rem}
  .mlbl{font-size:.76rem;color:#555}.mval{font-size:1.5rem;font-weight:700;color:#1a7a4a}
  .nxt{margin-top:1.5rem;background:#f8fdfb;border:1px solid #c5e8d5;border-radius:10px;padding:1rem 1.2rem}
  .nxt h2{margin-top:0}.nxt p{margin:.25rem 0 .6rem}a{color:#1a7a4a}
  @media print{body{margin:.5rem}}
</style></head><body>
<h1>${L.title}</h1>
<div class="sub"><a href="https://karasolar.com/">karasolar.com</a> · <a href="mailto:hola@karasolar.com">hola@karasolar.com</a></div>
<h2>${L.system}</h2>
<table>
  <tr><td>${L.motor}</td><td><strong>${g('bd-motor')}</strong></td></tr>
  ${vis('bd-panels-row')  ? `<tr><td>${L.panels}</td><td>${g('bd-panels')}</td></tr>` : ''}
  ${vis('bd-battery-row') ? `<tr><td>${L.battery}</td><td>${g('bd-battery')}</td></tr>` : ''}
  ${vis('bd-hull-row')    ? `<tr><td>${L.hull}</td><td>${g('bd-hull')}</td></tr>` : ''}
  <tr><th>${L.total}</th><th>${g('bd-total')}</th></tr>
</table>
<h2>${L.comparison}</h2>
<table>
  <tr><th></th><th>${L.gas}</th><th>${L.solar}</th></tr>
  <tr><td>${L.upfront}</td><td>${g('gas-upfront')}</td><td>${g('solar-upfront')}</td></tr>
  <tr><td>${L.monthly}</td><td>${g('gas-monthly')}</td><td>${g('solar-monthly')}</td></tr>
  <tr><td>${L.tenyear}</td><td>${g('gas-10y')}</td><td>${g('solar-10y')}</td></tr>
  <tr><th>${L.savingsRow}</th><th>—</th><th><strong>${g('savings-total')}</strong></th></tr>
</table>
<h2>${L.metrics}</h2>
<div class="metrics">
  <div class="metric"><div class="mlbl">${L.payoffLbl}</div><div class="mval">${g('payoff-years')}</div></div>
  <div class="metric"><div class="mlbl">${L.roiLbl}</div><div class="mval">${g('roi-years')}</div></div>
</div>
<div class="nxt">
  <h2>${L.nextsteps}</h2>
  <p>${L.catLink}: <a href="catalogo_ma_2026.pdf">catalogo_ma_2026.pdf</a></p>
  <p>${L.contactLink}: <a href="mailto:hola@karasolar.com">hola@karasolar.com</a></p>
  <p>Kara Solar: <a href="https://karasolar.com/">karasolar.com</a></p>
</div>
</body></html>`;

  const w = window.open('', '_blank');
  w.document.write(html);
  w.document.close();
  w.focus();
  setTimeout(() => w.print(), 400);
}

// ── Tooltip toggle (for mobile / click) ──
document.querySelectorAll('.info-icon').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const tooltip = btn.closest('.info-tooltip');
    const isOpen  = tooltip.classList.contains('open');
    document.querySelectorAll('.info-tooltip.open').forEach(t => t.classList.remove('open'));
    if (!isOpen) tooltip.classList.add('open');
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.info-tooltip.open').forEach(t => t.classList.remove('open'));
});

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
