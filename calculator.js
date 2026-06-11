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
  if (!window.jspdf) {
    alert('PDF library not loaded. Please check your internet connection and try again.');
    return;
  }

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
      payoffLbl:  'Años para terminar de pagar',
      roiLbl:     'Tiempo para recuperar la inversión',
      nextsteps:  'Próximos pasos',
      catLink:    'Ver catálogo de equipos', contactLink: 'Consultas y compras',
      disclaimer: 'Resultados estimados. Kara Solar no se hace responsable por decisiones financieras basadas en esta herramienta.',
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
      payoffLbl:  'Years to finish paying',
      roiLbl:     'Time to recover investment',
      nextsteps:  'Next steps',
      catLink:    'View equipment catalog', contactLink: 'Purchases and inquiries',
      disclaimer: 'Estimated results. Kara Solar is not responsible for financial decisions based on this tool.',
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
      payoffLbl:  'Anos para terminar de pagar',
      roiLbl:     'Tempo para recuperar o investimento',
      nextsteps:  'Próximos passos',
      catLink:    'Ver catálogo de equipamentos', contactLink: 'Compras e consultas',
      disclaimer: 'Resultados estimados. Kara Solar não se responsabiliza por decisões financeiras baseadas nesta ferramenta.',
    },
  }[lang] || {};

  const g   = id => document.getElementById(id)?.innerText || '—';
  const vis = id => document.getElementById(id)?.style.display !== 'none';

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  const GREEN    = [23, 138, 104];
  const GRN_DRK  = [15, 95, 72];
  const GRN_BG   = [240, 250, 245];
  const GRN_BDR  = [197, 232, 213];
  const MUTED    = [102, 102, 102];
  const ML = 20;
  const W  = 170;

  let y = 22;

  // Title
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...GREEN);
  doc.text(L.title, ML, y);
  y += 7;

  // Contact line
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...MUTED);
  const site = 'karasolar.com';
  const mail = 'hola@karasolar.com';
  const sep  = '   ·   ';
  doc.textWithLink(site, ML, y, { url: 'https://karasolar.com/' });
  doc.text(sep, ML + doc.getTextWidth(site), y);
  doc.textWithLink(mail, ML + doc.getTextWidth(site + sep), y, { url: 'mailto:hola@karasolar.com' });
  y += 9;

  // System configuration table
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...GREEN);
  doc.text(L.system, ML, y);
  y += 3;

  const sysRows = [[L.motor, g('bd-motor')]];
  if (vis('bd-panels-row'))  sysRows.push([L.panels,  g('bd-panels')]);
  if (vis('bd-battery-row')) sysRows.push([L.battery, g('bd-battery')]);
  if (vis('bd-hull-row'))    sysRows.push([L.hull,    g('bd-hull')]);

  doc.autoTable({
    body: sysRows,
    foot: [[
      { content: L.total,       styles: { fontStyle: 'bold', textColor: GRN_DRK } },
      { content: g('bd-total'), styles: { fontStyle: 'bold', textColor: GRN_DRK, halign: 'right' } },
    ]],
    startY: y,
    margin: { left: ML, right: ML },
    styles: { fontSize: 9, cellPadding: [2.5, 4] },
    footStyles: { fillColor: GRN_BG },
    columnStyles: { 1: { halign: 'right' } },
    theme: 'grid',
  });
  y = doc.lastAutoTable.finalY + 8;

  // Cost comparison table
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...GREEN);
  doc.text(L.comparison, ML, y);
  y += 3;

  doc.autoTable({
    head: [['', L.gas, L.solar]],
    body: [
      [L.upfront, g('gas-upfront'),  g('solar-upfront')],
      [L.monthly, g('gas-monthly'),  g('solar-monthly')],
      [L.tenyear, g('gas-10y'),      g('solar-10y')],
    ],
    foot: [[
      { content: L.savingsRow,        styles: { fontStyle: 'bold', textColor: GRN_DRK } },
      { content: '—',                 styles: { halign: 'center' } },
      { content: g('savings-total'),  styles: { fontStyle: 'bold', textColor: GRN_DRK, halign: 'right' } },
    ]],
    startY: y,
    margin: { left: ML, right: ML },
    styles: { fontSize: 9, cellPadding: [2.5, 4] },
    headStyles: { fillColor: GRN_BG, textColor: GRN_DRK, fontStyle: 'bold' },
    footStyles: { fillColor: GRN_BG },
    columnStyles: { 1: { halign: 'right' }, 2: { halign: 'right' } },
    theme: 'grid',
  });
  y = doc.lastAutoTable.finalY + 8;

  // Key metrics — two side-by-side boxes
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...GREEN);
  doc.text(L.metrics, ML, y);
  y += 4;

  const boxW = (W - 6) / 2;
  [[L.payoffLbl, g('payoff-years'), ML], [L.roiLbl, g('roi-years'), ML + boxW + 6]].forEach(([lbl, val, bx]) => {
    doc.setFillColor(...GRN_BG);
    doc.setDrawColor(...GRN_BDR);
    doc.roundedRect(bx, y, boxW, 22, 2, 2, 'FD');
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...MUTED);
    doc.text(doc.splitTextToSize(lbl, boxW - 6), bx + 3, y + 6);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...GREEN);
    doc.text(val, bx + 3, y + 18);
  });
  y += 30;

  // Next steps box
  const nxtH = 40;
  doc.setFillColor(248, 253, 251);
  doc.setDrawColor(...GRN_BDR);
  doc.roundedRect(ML, y, W, nxtH, 3, 3, 'FD');
  doc.setFontSize(10.5);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...GREEN);
  doc.text(L.nextsteps, ML + 4, y + 9);

  const links = [
    [L.catLink,     'catalogo_ma_2026.pdf',   'catalogo_ma_2026.pdf'],
    [L.contactLink, mail,                      'mailto:' + mail],
    ['Kara Solar',  site,                      'https://karasolar.com/'],
  ];
  let ly = y + 18;
  links.forEach(([label, display, href]) => {
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...MUTED);
    const labelStr = label + ':  ';
    doc.text(labelStr, ML + 4, ly);
    doc.setTextColor(...GREEN);
    doc.textWithLink(display, ML + 4 + doc.getTextWidth(labelStr), ly, { url: href });
    ly += 7;
  });
  y += nxtH + 6;

  // Disclaimer
  doc.setFontSize(7);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(...MUTED);
  doc.text(doc.splitTextToSize(L.disclaimer, W), ML, y);

  doc.save(lang === 'en' ? 'results-rios-solares.pdf' : 'resultados-rios-solares.pdf');
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
