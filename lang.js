const translations = {
    es: {
        'page-title': 'Calculadora Ríos Solares | Kara Solar',
        'hero-title': 'Calculadora Ríos Solares',
        'hero-desc': 'Esta herramienta permite comparar costos, estimar ahorros y evaluar la viabilidad financiera de cambiar de gasolina a transporte solar.',

        'nav-calculadora': 'Calculadora',
        'nav-supuestos': 'Supuestos',
        'nav-protocolo': 'Protocolo de datos',
        'nav-aviso': 'Aviso Legal',

        'step1-title': 'Paso 1 de 3 — Uso Actual',
        'step1-location-header': 'UBICACIÓN',
        'step1-location-label': 'Selecciona la ubicación aproximada',
        'step1-location-hint': 'Haz clic en el mapa para ubicar la comunidad.',
        'btn-locate': 'Localizame',
        'map-search-placeholder': 'Buscar ubicación...',
        'btn-search': 'Buscar',
        'map-search-not-found': 'No se encontró la ubicación.',
        'map-search-error': 'Error al buscar la ubicación.',
        'step1-gas-title': 'Uso actual — gasolina',
        'step1-km-week-label': 'Kilómetros navegados en bote por semana en promedio',
        'step1-gas-price-label': 'Precio local por galón de gasolina',
        'step1-gas-engine-label': 'Costo de un motor peque-peque de gasolina en la zona (US$)',
        'step1-gas-engine-hint': '¿No sabes? Déjalo como está.',
        'step1-km-per-gal-label': 'Kilómetros por galón',
        'step1-km-per-gal-hint': 'Rendimiento del motor. ¿No sabes? Déjalo como está.',
        'step1-repair-label': 'Gasto anual en mantenimiento y reparaciones del motor de gasolina (US$)',
        'step1-repair-hint': 'Incluye aceite, viajes al mecánico y cualquier otro gasto para mantener tu motor. ¿No sabes? Déjalo como está.',
        'btn-continue': 'Continuar →',

        'step2-title': 'Paso 2 de 3 — Configuración solar',
        'step2-electric-label': 'Costo del sistema de transporte solar de Motores Amazonas (US$)',
        'step2-electric-hint': 'Incluye motor eléctrico y batería. Cada batería permite recorrer unos 30 km por carga.',
        'step2-panels-label': '¿Se agregarán paneles solares para cargar el bote?',
        'step2-panels-hint': 'Los paneles cuestan US$1.500. Si se usará otra fuente de energía, deja en NO.',
        'btn-yes': 'Sí',
        'btn-no': 'No',
        'step2-battery-label': '¿Se agregará una segunda batería?',
        'step2-battery-hint': 'Una batería extra cuesta US$2.500 y permite mayor tiempo y distancia de viaje, además de usar una batería mientras la otra se carga.',
        'step2-payment-title': 'PLAN DE PAGO',
        'step2-downpayment-label': 'Pago inicial (US$)',
        'step2-downpayment-hint': 'Mientras más se pague de entrada, menos se pagará después.',
        'step2-subsidy-label': 'Subsidio o ayuda económica (US$)',
        'step2-subsidy-hint': 'De fundaciones, fondos comunitarios u otros aliados. Si no aplica, deja en blanco.',
        'step2-interest-label': 'Tasa de interés anual (%)',
        'step2-interest-hint': 'Si no aplica, deja en blanco.',
        'tooltip-interest': 'El interés es dinero extra que pagas cuando pides dinero prestado. Por ejemplo: si pides US$100 con un interés de 10% al año, al final del año debes devolver US$110 — los US$100 que pediste más US$10 extra. Si nadie te cobra interés, deja este campo en 0.',
        'btn-back': '← Volver',
        'btn-match-gas': 'Pagar mi costo mensual de gasolina',

        'step3-title': 'Paso 3 de 3 — Resultados',
        'step3-monthly-label': 'Pago mensual',
        'step3-monthly-prefix': 'Pago mensual estimado:',
        'btn-download': 'Descargar Catálogo',

        'warning-title': 'El plazo de pago supera los 5 años',
        'warning-text': 'Con estos datos, el bote tardaría más de 5 años en pagarse — más que el período de garantía de Motores Amazonas.<br>Considera aumentar el pago mensual o el pago inicial para acortar el plazo.',

        'results-title': 'Resultados',
        'bd-system-title': 'Sistema solar seleccionado',
        'bd-motor-label': 'Motor eléctrico + batería (Motores Amazonas)',
        'bd-panels-label': 'Paneles solares',
        'bd-battery-label': 'Segunda batería',
        'bd-total-label': 'Costo total del sistema',

        'sum-text-1': 'Con los datos ingresados, se estima que cambiar a un bote solar permitiría pasar de gastar',
        'sum-text-2': 'al mes en gasolina y mantenimiento a pagar',
        'sum-text-3': 'al mes por el bote solar —',
        'sum-text-4': 'cada mes. El bote estaría pagado en',
        'sum-text-5': ', y en 10 años el ahorro total sería de',
        'sum-diff-more': 'pagando <strong>{amount}</strong> más',
        'sum-diff-less': 'ahorrando <strong>{amount}</strong>',
        'sum-diff-same': 'pagando prácticamente lo mismo',

        'comparison-title': 'Comparación de Ahorro a Largo Plazo',
        'col-concept': 'Concepto',
        'col-gas': 'Gasolina',
        'col-solar': 'Solar',
        'row-upfront': 'Costo inicial',
        'row-monthly': 'Costo mensual',
        'row-10y': 'Total a 10 años',
        'row-savings': 'Ahorro total',
        'metric-payoff': 'Años para terminar de pagar',
        'metric-roi': 'Tiempo para recuperar la inversión',
        'unit-years': 'años',
        'side-tagline': 'Construyendo un ecosistema unificado para el transporte fluvial solar en la Amazonía. <a href="https://karasolar.com/" target="_blank">Saber más →</a>',

        'footer-title': 'Sobre Kara Solar',
        'footer-desc': '"Kara" significa "un sueño que se hace realidad" en achuar. Nuestro sueño es una Amazonía solar. Estamos haciendo realidad ese sueño construyendo un ecosistema unificado que integra tecnología limpia, gobernanza comunitaria y financiamiento sostenible para escalar la movilidad fluvial solar desde el territorio achuar hacia toda la Amazonía. <a href="https://karasolar.com/" target="_blank">Saber más →</a>',
        'footer-cta': '¿Listo para hacer la transición al transporte fluvial solar? Escríbenos a <a href="mailto:hola@karasolar.com">hola@karasolar.com</a>',
        'footer-credits': 'Esta calculadora fue creada por Leif Maynard, Daniel Enriquez y Daniela Borja Kaisin. Para preguntas sobre la calculadora, <a href="mailto:hola@karasolar.com">contáctenos →</a>',

        'page-supuestos-content': `
            <h2>¿Cómo funciona esta calculadora?</h2>
            <p>Esta herramienta estima el costo total del transporte a gasolina, lo compara con el costo de un sistema solar de Motores Amazonas, y calcula cuánto tiempo tomaría pagar el bote y recuperar la inversión. Los resultados son estimaciones y pueden variar según el uso real y las condiciones locales.</p>
            <h3>Supuestos principales</h3>
            <h3>Costo mensual en gasolina y mantenimiento</h3>
            <p>Galones/mes = (km/semana × 4.33) ÷ km/galón<br>Combustible/mes = galones/mes × precio/galón<br>Total mensual = combustible/mes + (mantenimiento anual ÷ 12)</p>
            <h3>Costo total del sistema solar</h3>
            <p>Costo total = motor + paneles (US$1.500 si aplica) + batería extra (US$2.500 si aplica)<br>Monto a financiar = costo total − subsidio − pago inicial</p>
            <h3>Años para terminar de pagar el bote</h3>
            <p>Sin interés: meses = monto financiado ÷ pago mensual → años = meses ÷ 12<br>Con interés: fórmula estándar de amortización</p>
            <h3>Comparación a 10 años</h3>
            <p>En el lado de gasolina se incluye el costo inicial del motor más el gasto mensual en combustible y mantenimiento durante 120 meses. En el lado solar, se incluye el pago inicial y los pagos mensuales hasta completar el pago del bote, y US$0 después.</p>
            <p>Total gasolina 10 años = costo motor gasolina + (gasto mensual × 120)<br>Total solar 10 años = pago inicial + (pago mensual × meses hasta pagar, máx 120)</p>
            <h3>Tiempo para recuperar la inversión (ROI)</h3>
            <p>La inversión neta es la diferencia entre el costo del sistema solar y el costo del motor de gasolina que se reemplaza. El tiempo de recuperación es cuántos años de ahorro en combustible y mantenimiento se necesitan para cubrir esa inversión neta.</p>
            <p>Inversión neta = costo total sistema solar − costo motor gasolina<br>Ahorro anual = (gasto mensual combustible + mantenimiento) × 12<br>ROI = inversión neta ÷ ahorro anual</p>
            <h3>Ejemplo</h3>
            <p>Una familia de Sharamentsa, Ecuador, navega 60 km/semana. Precio gasolina: US$7.50/galón. Rendimiento: 14 km/galón. Mantenimiento: US$300/año. Motor gasolina: US$900. Sistema solar completo (US$10.000). Pago inicial: US$500. Pago mensual: US$150. Sin interés, sin subsidio.</p>
            <table class="comparison-table" style="margin-top:1rem">
              <thead><tr><th>Resultado estimado</th><th>Valor</th></tr></thead>
              <tbody>
                <tr><td>Gasto mensual gasolina + mantenimiento</td><td>US$168</td></tr>
                <tr><td>Pago mensual por el bote solar</td><td>US$150</td></tr>
                <tr><td>Ahorro mensual durante el pago</td><td>US$18</td></tr>
                <tr><td>Años para terminar de pagar</td><td>5.1 años</td></tr>
                <tr><td>Inversión neta (solar − motor gasolina)</td><td>US$9.100</td></tr>
                <tr><td>Ahorro anual (combustible + mantenimiento)</td><td>US$2.016</td></tr>
                <tr><td>Tiempo para recuperar la inversión</td><td>4.5 años</td></tr>
                <tr><td>Ahorro total en 10 años</td><td>~US$8.260</td></tr>
              </tbody>
            </table>`,

        'page-protocolo-content': `
            <h2>Protocolo de recopilación de datos</h2>
            <p>La Calculadora Ríos Solares recopila datos con el objetivo de mejorar la planificación del transporte solar en la Amazonía y apoyar la misión de Fundación Kara Solar.</p>
            <h3>¿Qué datos se recopilan?</h3>
            <ul>
              <li>Ubicación (comunidad y país)</li>
              <li>Kilómetros navegados por semana</li>
              <li>Precio local del galón de gasolina</li>
              <li>Rendimiento del motor (km/galón)</li>
              <li>Costo del motor de gasolina en la zona</li>
              <li>Gasto anual en mantenimiento</li>
              <li>Configuración del sistema solar seleccionado</li>
              <li>Parámetros de pago (pago inicial, pago mensual, interés, subsidio)</li>
            </ul>
            <h3>¿Cómo se usan los datos?</h3>
            <p>Los datos se almacenan en una hoja de cálculo interna de Fundación Kara Solar. Se utilizan exclusivamente para:</p>
            <ul>
              <li>Analizar el costo del combustible y los patrones de uso de botes en distintas zonas de la Amazonía</li>
              <li>Mejorar los modelos financieros para la expansión del transporte solar</li>
              <li>Informar estrategias de financiamiento comunitario y alianzas con fondos y fundaciones</li>
              <li>Reportes internos y de impacto para socios y financiadores</li>
            </ul>
            <h3>Privacidad y confidencialidad</h3>
            <p>Los datos no se venden a terceros bajo ninguna circunstancia. No se recopila información de identificación personal más allá de la ubicación geográfica general. Los datos se almacenan de forma segura y solo el equipo de Fundación Kara Solar tiene acceso a ellos. Datos agregados sin identificadores específicos pueden compartirse en reportes públicos de impacto.</p>`,

        'page-aviso-content': `
            <h2>Aviso legal y descargo de responsabilidad</h2>
            <h3>Estimaciones, no garantías</h3>
            <p>Los resultados de esta calculadora son estimaciones basadas en los datos ingresados y en supuestos generales. Los ahorros reales, plazos de pago y tiempos de recuperación de inversión pueden variar según el uso real del bote, las fluctuaciones en el precio de la gasolina, las condiciones de financiamiento y otros factores locales.</p>
            <h3>Uso de datos</h3>
            <p>Al usar esta herramienta, se acepta que los datos ingresados sean recopilados por Fundación Kara Solar con fines de investigación y planificación, según el Protocolo de datos. Los datos no serán vendidos a terceros.</p>
            <h3>Sin responsabilidad financiera</h3>
            <p>Esta herramienta no constituye asesoramiento financiero, legal o de inversión. Fundación Kara Solar y Motores Amazonas no se hacen responsables de decisiones tomadas basándose en los resultados de esta calculadora.</p>
            <h3>Precios de referencia</h3>
            <p>Los precios de los sistemas solares de Motores Amazonas son de referencia y pueden cambiar. Para precios actualizados y disponibilidad, contactar directamente a Motores Amazonas en <a href="https://motoresamazonas.com/" target="_blank">motoresamazonas.com</a>.</p>`
    },

    en: {
        'page-title': 'Ríos Solares Calculator | Kara Solar',
        'hero-title': 'Ríos Solares Calculator',
        'hero-desc': 'This tool allows you to compare costs, estimate savings, and evaluate the financial viability of switching from gasoline to solar transport.',

        'nav-calculadora': 'Calculator',
        'nav-supuestos': 'Assumptions',
        'nav-protocolo': 'Data Protocol',
        'nav-aviso': 'Legal Notice',

        'step1-title': 'Step 1 of 3 — Current Usage',
        'step1-location-header': 'LOCATION',
        'step1-location-label': 'Select the approximate location',
        'step1-location-hint': 'Click on the map to locate the community.',
        'btn-locate': 'Locate Me',
        'map-search-placeholder': 'Search location...',
        'btn-search': 'Search',
        'map-search-not-found': 'Location not found.',
        'map-search-error': 'Error searching for location.',
        'step1-gas-title': 'Current usage — gasoline',
        'step1-km-week-label': 'Kilometers traveled by boat per week on average',
        'step1-gas-price-label': 'Local price per gallon of gasoline',
        'step1-gas-engine-label': 'Cost of a gasoline boat engine in the area (US$)',
        'step1-gas-engine-hint': 'Not sure? Leave it as is.',
        'step1-km-per-gal-label': 'Kilometers per gallon',
        'step1-km-per-gal-hint': 'Engine fuel efficiency. Not sure? Leave it as is.',
        'step1-repair-label': 'Annual spending on gasoline engine maintenance and repairs (US$)',
        'step1-repair-hint': 'Includes oil, mechanic visits, and any other costs to maintain your engine. Not sure? Leave it as is.',
        'btn-continue': 'Continue →',

        'step2-title': 'Step 2 of 3 — Solar Configuration',
        'step2-electric-label': 'Cost of the Motores Amazonas solar transport system (US$)',
        'step2-electric-hint': 'Includes electric motor and battery. Each battery allows travel of about 30 km per charge.',
        'step2-panels-label': 'Will solar panels be added to charge the boat?',
        'step2-panels-hint': 'Panels cost US$1,500. If another energy source will be used, leave as NO.',
        'btn-yes': 'Yes',
        'btn-no': 'No',
        'step2-battery-label': 'Will a second battery be added?',
        'step2-battery-hint': 'An extra battery costs US$2,500 and allows greater travel time and distance, plus the ability to use one battery while the other charges.',
        'step2-payment-title': 'PAYMENT PLAN',
        'step2-downpayment-label': 'Down payment (US$)',
        'step2-downpayment-hint': 'The more you pay upfront, the less you pay later.',
        'step2-subsidy-label': 'Subsidy or financial aid (US$)',
        'step2-subsidy-hint': 'From foundations, community funds, or other partners. If not applicable, leave blank.',
        'step2-interest-label': 'Annual interest rate (%)',
        'step2-interest-hint': 'If not applicable, leave blank.',
        'tooltip-interest': 'Interest is extra money you pay when borrowing money. For example: if you borrow US$100 with 10% interest per year, at the end of the year you owe US$110 — the US$100 you borrowed plus US$10 extra. If no one is charging you interest, leave this as 0.',
        'btn-back': '← Back',
        'btn-match-gas': 'Match my monthly gasoline cost',

        'step3-title': 'Step 3 of 3 — Results',
        'step3-monthly-label': 'Monthly payment',
        'step3-monthly-prefix': 'Estimated monthly payment:',
        'btn-download': 'Download Catalog',

        'warning-title': 'Payment term exceeds 5 years',
        'warning-text': 'With this data, the boat would take more than 5 years to pay off — longer than the Motores Amazonas warranty period.<br>Consider increasing the monthly payment or down payment to shorten the term.',

        'results-title': 'Results',
        'bd-system-title': 'Selected solar system',
        'bd-motor-label': 'Electric motor + battery (Motores Amazonas)',
        'bd-panels-label': 'Solar panels',
        'bd-battery-label': 'Second battery',
        'bd-total-label': 'Total system cost',

        'sum-text-1': 'Based on the data entered, it is estimated that switching to a solar boat would allow going from spending',
        'sum-text-2': 'per month on gasoline and maintenance to paying',
        'sum-text-3': 'per month for the solar boat —',
        'sum-text-4': 'each month. The boat would be paid off in',
        'sum-text-5': ', and in 10 years the total savings would be',
        'sum-diff-more': 'paying <strong>{amount}</strong> more',
        'sum-diff-less': 'saving <strong>{amount}</strong>',
        'sum-diff-same': 'paying practically the same',

        'comparison-title': 'Long-Term Savings Comparison',
        'col-concept': 'Item',
        'col-gas': 'Gasoline',
        'col-solar': 'Solar',
        'row-upfront': 'Initial cost',
        'row-monthly': 'Monthly cost',
        'row-10y': 'Total over 10 years',
        'row-savings': 'Total savings',
        'metric-payoff': 'Years to finish paying',
        'metric-roi': 'Time to recover investment',
        'unit-years': 'years',
        'side-tagline': 'Building a unified ecosystem for solar river transport in the Amazon. <a href="https://karasolar.com/" target="_blank">Learn more →</a>',

        'footer-title': 'About Kara Solar',
        'footer-desc': '"Kara" means "a dream that becomes reality" in Achuar. Our dream is a solar Amazon. We are making that dream a reality by building a unified ecosystem that integrates clean technology, community governance, and sustainable financing to scale solar river mobility from Achuar territory across the entire Amazon. <a href="https://karasolar.com/" target="_blank">Learn more →</a>',
        'footer-cta': 'Ready to make the transition to solar river transport? Write to us at <a href="mailto:hola@karasolar.com">hola@karasolar.com</a>',
        'footer-credits': 'This calculator was created by Leif Maynard, Daniel Enriquez, and Daniela Borja Kaisin. For questions about the calculator, <a href="mailto:hola@karasolar.com">contact us →</a>',

        'page-supuestos-content': `
            <h2>How does this calculator work?</h2>
            <p>This tool estimates the total cost of gasoline transport, compares it with the cost of a Motores Amazonas solar system, and calculates how long it would take to pay off the boat and recover the investment. Results are estimates and may vary depending on actual use and local conditions.</p>
            <h3>Main assumptions</h3>
            <h3>Monthly gasoline and maintenance cost</h3>
            <p>Gallons/month = (km/week × 4.33) ÷ km/gallon<br>Fuel/month = gallons/month × price/gallon<br>Monthly total = fuel/month + (annual maintenance ÷ 12)</p>
            <h3>Total solar system cost</h3>
            <p>Total cost = motor + panels (US$1,500 if applicable) + extra battery (US$2,500 if applicable)<br>Amount to finance = total cost − subsidy − down payment</p>
            <h3>Years to pay off the boat</h3>
            <p>Without interest: months = financed amount ÷ monthly payment → years = months ÷ 12<br>With interest: standard amortization formula</p>
            <h3>10-year comparison</h3>
            <p>The gasoline side includes the initial engine cost plus monthly fuel and maintenance spending over 120 months. The solar side includes the down payment and monthly payments until the boat is paid off, and US$0 after that.</p>
            <p>Gasoline 10-year total = gasoline engine cost + (monthly expense × 120)<br>Solar 10-year total = down payment + (monthly payment × months until paid, max 120)</p>
            <h3>Time to recover investment (ROI)</h3>
            <p>The net investment is the difference between the solar system cost and the gasoline engine cost it replaces. The payback period is how many years of fuel and maintenance savings are needed to cover that net investment.</p>
            <p>Net investment = total solar system cost − gasoline engine cost<br>Annual savings = (monthly fuel expense + maintenance) × 12<br>ROI = net investment ÷ annual savings</p>
            <h3>Example</h3>
            <p>A family from Sharamentsa, Ecuador, travels 60 km/week. Gasoline price: US$7.50/gallon. Efficiency: 14 km/gallon. Maintenance: US$300/year. Gasoline engine: US$900. Full solar system (US$10,000). Down payment: US$500. Monthly payment: US$150. No interest, no subsidy.</p>
            <table class="comparison-table" style="margin-top:1rem">
              <thead><tr><th>Estimated result</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Monthly gasoline + maintenance expense</td><td>US$168</td></tr>
                <tr><td>Monthly payment for solar boat</td><td>US$150</td></tr>
                <tr><td>Monthly savings during payment period</td><td>US$18</td></tr>
                <tr><td>Years to pay off</td><td>5.1 years</td></tr>
                <tr><td>Net investment (solar − gasoline engine)</td><td>US$9,100</td></tr>
                <tr><td>Annual savings (fuel + maintenance)</td><td>US$2,016</td></tr>
                <tr><td>Time to recover investment</td><td>4.5 years</td></tr>
                <tr><td>Total savings in 10 years</td><td>~US$8,260</td></tr>
              </tbody>
            </table>`,

        'page-protocolo-content': `
            <h2>Data collection protocol</h2>
            <p>The Ríos Solares Calculator collects data with the aim of improving solar transport planning in the Amazon and supporting the mission of Fundación Kara Solar.</p>
            <h3>What data is collected?</h3>
            <ul>
              <li>Location (community and country)</li>
              <li>Kilometers traveled per week</li>
              <li>Local gasoline price per gallon</li>
              <li>Engine efficiency (km/gallon)</li>
              <li>Cost of the gasoline engine in the area</li>
              <li>Annual maintenance spending</li>
              <li>Selected solar system configuration</li>
              <li>Payment parameters (down payment, monthly payment, interest, subsidy)</li>
            </ul>
            <h3>How is the data used?</h3>
            <p>Data is stored in an internal Fundación Kara Solar spreadsheet. It is used exclusively to:</p>
            <ul>
              <li>Analyze fuel costs and boat usage patterns in different areas of the Amazon</li>
              <li>Improve financial models for solar transport expansion</li>
              <li>Inform community financing strategies and partnerships with funds and foundations</li>
              <li>Internal and impact reports for partners and funders</li>
            </ul>
            <h3>Privacy and confidentiality</h3>
            <p>Data is never sold to third parties under any circumstances. No personally identifiable information is collected beyond general geographic location. Data is stored securely and only the Fundación Kara Solar team has access. Aggregated data without specific identifiers may be shared in public impact reports.</p>`,

        'page-aviso-content': `
            <h2>Legal notice and disclaimer</h2>
            <h3>Estimates, not guarantees</h3>
            <p>The results of this calculator are estimates based on the data entered and general assumptions. Actual savings, payment terms, and investment recovery times may vary depending on actual boat usage, fluctuations in gasoline prices, financing conditions, and other local factors.</p>
            <h3>Data use</h3>
            <p>By using this tool, you agree that the data entered may be collected by Fundación Kara Solar for research and planning purposes, as described in the Data Protocol. Data will not be sold to third parties.</p>
            <h3>No financial liability</h3>
            <p>This tool does not constitute financial, legal, or investment advice. Fundación Kara Solar and Motores Amazonas are not responsible for decisions made based on the results of this calculator.</p>
            <h3>Reference prices</h3>
            <p>Prices for Motores Amazonas solar systems are reference prices and may change. For updated prices and availability, contact Motores Amazonas directly at <a href="https://motoresamazonas.com/" target="_blank">motoresamazonas.com</a>.</p>`
    },

    pt: {
        'page-title': 'Calculadora Ríos Solares | Kara Solar',
        'hero-title': 'Calculadora Ríos Solares',
        'hero-desc': 'Esta ferramenta permite comparar custos, estimar poupanças e avaliar a viabilidade financeira de mudar da gasolina para o transporte solar.',

        'nav-calculadora': 'Calculadora',
        'nav-supuestos': 'Premissas',
        'nav-protocolo': 'Protocolo de dados',
        'nav-aviso': 'Aviso Legal',

        'step1-title': 'Passo 1 de 3 — Uso Atual',
        'step1-location-header': 'LOCALIZAÇÃO',
        'step1-location-label': 'Selecione a localização aproximada',
        'step1-location-hint': 'Clique no mapa para localizar a comunidade.',
        'btn-locate': 'Localizar-me',
        'map-search-placeholder': 'Buscar localização...',
        'btn-search': 'Buscar',
        'map-search-not-found': 'Localização não encontrada.',
        'map-search-error': 'Erro ao buscar localização.',
        'step1-gas-title': 'Uso atual — gasolina',
        'step1-km-week-label': 'Quilômetros navegados de barco por semana em média',
        'step1-gas-price-label': 'Preço local por galão de gasolina',
        'step1-gas-engine-label': 'Custo de um motor a gasolina para barco na região (US$)',
        'step1-gas-engine-hint': 'Não sabe? Deixe como está.',
        'step1-km-per-gal-label': 'Quilômetros por galão',
        'step1-km-per-gal-hint': 'Rendimento do motor. Não sabe? Deixe como está.',
        'step1-repair-label': 'Gasto anual em manutenção e reparos do motor a gasolina (US$)',
        'step1-repair-hint': 'Inclui óleo, visitas ao mecânico e qualquer outro gasto para manter o motor. Não sabe? Deixe como está.',
        'btn-continue': 'Continuar →',

        'step2-title': 'Passo 2 de 3 — Configuração solar',
        'step2-electric-label': 'Custo do sistema de transporte solar da Motores Amazonas (US$)',
        'step2-electric-hint': 'Inclui motor elétrico e bateria. Cada bateria permite percorrer cerca de 30 km por carga.',
        'step2-panels-label': 'Serão adicionados painéis solares para carregar o barco?',
        'step2-panels-hint': 'Os painéis custam US$1.500. Se outra fonte de energia for utilizada, deixe em NÃO.',
        'btn-yes': 'Sim',
        'btn-no': 'Não',
        'step2-battery-label': 'Será adicionada uma segunda bateria?',
        'step2-battery-hint': 'Uma bateria extra custa US$2.500 e permite maior tempo e distância de viagem, além de usar uma bateria enquanto a outra carrega.',
        'step2-payment-title': 'PLANO DE PAGAMENTO',
        'step2-downpayment-label': 'Entrada (US$)',
        'step2-downpayment-hint': 'Quanto mais se pagar de entrada, menos se pagará depois.',
        'step2-subsidy-label': 'Subsídio ou ajuda financeira (US$)',
        'step2-subsidy-hint': 'De fundações, fundos comunitários ou outros parceiros. Se não se aplica, deixe em branco.',
        'step2-interest-label': 'Taxa de juros anual (%)',
        'step2-interest-hint': 'Se não se aplica, deixe em branco.',
        'tooltip-interest': 'Juros são um dinheiro extra que você paga ao pegar dinheiro emprestado. Por exemplo: se você pega US$100 com 10% de juros ao ano, no final do ano deve devolver US$110 — os US$100 que pegou mais US$10 a mais. Se ninguém está cobrando juros, deixe este campo como 0.',
        'btn-back': '← Voltar',
        'btn-match-gas': 'Igualar meu custo mensal de gasolina',

        'step3-title': 'Passo 3 de 3 — Resultados',
        'step3-monthly-label': 'Pagamento mensal',
        'step3-monthly-prefix': 'Pagamento mensal estimado:',
        'btn-download': 'Baixar Catálogo',

        'warning-title': 'O prazo de pagamento ultrapassa 5 anos',
        'warning-text': 'Com esses dados, o barco levaria mais de 5 anos para ser pago — mais do que o período de garantia da Motores Amazonas.<br>Considere aumentar o pagamento mensal ou a entrada para encurtar o prazo.',

        'results-title': 'Resultados',
        'bd-system-title': 'Sistema solar selecionado',
        'bd-motor-label': 'Motor elétrico + bateria (Motores Amazonas)',
        'bd-panels-label': 'Painéis solares',
        'bd-battery-label': 'Segunda bateria',
        'bd-total-label': 'Custo total do sistema',

        'sum-text-1': 'Com os dados inseridos, estima-se que mudar para um barco solar permitiria passar de gastar',
        'sum-text-2': 'por mês em gasolina e manutenção para pagar',
        'sum-text-3': 'por mês pelo barco solar —',
        'sum-text-4': 'a cada mês. O barco estaria pago em',
        'sum-text-5': ', e em 10 anos a poupança total seria de',
        'sum-diff-more': 'pagando <strong>{amount}</strong> a mais',
        'sum-diff-less': 'poupando <strong>{amount}</strong>',
        'sum-diff-same': 'pagando praticamente o mesmo',

        'comparison-title': 'Comparação de Poupança a Longo Prazo',
        'col-concept': 'Item',
        'col-gas': 'Gasolina',
        'col-solar': 'Solar',
        'row-upfront': 'Custo inicial',
        'row-monthly': 'Custo mensal',
        'row-10y': 'Total em 10 anos',
        'row-savings': 'Poupança total',
        'metric-payoff': 'Anos para terminar de pagar',
        'metric-roi': 'Tempo para recuperar o investimento',
        'unit-years': 'anos',
        'side-tagline': 'Construindo um ecossistema unificado para o transporte fluvial solar na Amazônia. <a href="https://karasolar.com/" target="_blank">Saiba mais →</a>',

        'footer-title': 'Sobre a Kara Solar',
        'footer-desc': '"Kara" significa "um sonho que se torna realidade" em achuar. Nosso sonho é uma Amazônia solar. Estamos tornando esse sonho realidade construindo um ecossistema unificado que integra tecnologia limpa, governança comunitária e financiamento sustentável para escalar a mobilidade fluvial solar desde o território achuar até toda a Amazônia. <a href="https://karasolar.com/" target="_blank">Saiba mais →</a>',
        'footer-cta': 'Pronto para fazer a transição para o transporte fluvial solar? Escreva-nos em <a href="mailto:hola@karasolar.com">hola@karasolar.com</a>',
        'footer-credits': 'Esta calculadora foi criada por Leif Maynard, Daniel Enriquez e Daniela Borja Kaisin. Para dúvidas sobre a calculadora, <a href="mailto:hola@karasolar.com">entre em contato →</a>',

        'page-supuestos-content': `
            <h2>Como funciona esta calculadora?</h2>
            <p>Esta ferramenta estima o custo total do transporte a gasolina, compara com o custo de um sistema solar da Motores Amazonas, e calcula quanto tempo levaria para pagar o barco e recuperar o investimento. Os resultados são estimativas e podem variar conforme o uso real e as condições locais.</p>
            <h3>Premissas principais</h3>
            <h3>Custo mensal em gasolina e manutenção</h3>
            <p>Galões/mês = (km/semana × 4.33) ÷ km/galão<br>Combustível/mês = galões/mês × preço/galão<br>Total mensal = combustível/mês + (manutenção anual ÷ 12)</p>
            <h3>Custo total do sistema solar</h3>
            <p>Custo total = motor + painéis (US$1.500 se aplicável) + bateria extra (US$2.500 se aplicável)<br>Valor a financiar = custo total − subsídio − entrada</p>
            <h3>Anos para terminar de pagar o barco</h3>
            <p>Sem juros: meses = valor financiado ÷ pagamento mensal → anos = meses ÷ 12<br>Com juros: fórmula padrão de amortização</p>
            <h3>Comparação em 10 anos</h3>
            <p>No lado da gasolina inclui-se o custo inicial do motor mais o gasto mensal em combustível e manutenção durante 120 meses. No lado solar, inclui-se a entrada e os pagamentos mensais até completar o pagamento do barco, e US$0 depois.</p>
            <p>Total gasolina 10 anos = custo motor gasolina + (gasto mensal × 120)<br>Total solar 10 anos = entrada + (pagamento mensal × meses até pagar, máx 120)</p>
            <h3>Tempo para recuperar o investimento (ROI)</h3>
            <p>O investimento líquido é a diferença entre o custo do sistema solar e o custo do motor a gasolina que ele substitui. O tempo de retorno é quantos anos de poupança em combustível e manutenção são necessários para cobrir esse investimento líquido.</p>
            <p>Investimento líquido = custo total sistema solar − custo motor gasolina<br>Poupança anual = (gasto mensal combustível + manutenção) × 12<br>ROI = investimento líquido ÷ poupança anual</p>
            <h3>Exemplo</h3>
            <p>Uma família de Sharamentsa, Equador, navega 60 km/semana. Preço gasolina: US$7,50/galão. Rendimento: 14 km/galão. Manutenção: US$300/ano. Motor gasolina: US$900. Sistema solar completo (US$10.000). Entrada: US$500. Pagamento mensal: US$150. Sem juros, sem subsídio.</p>
            <table class="comparison-table" style="margin-top:1rem">
              <thead><tr><th>Resultado estimado</th><th>Valor</th></tr></thead>
              <tbody>
                <tr><td>Gasto mensal gasolina + manutenção</td><td>US$168</td></tr>
                <tr><td>Pagamento mensal pelo barco solar</td><td>US$150</td></tr>
                <tr><td>Poupança mensal durante o pagamento</td><td>US$18</td></tr>
                <tr><td>Anos para terminar de pagar</td><td>5,1 anos</td></tr>
                <tr><td>Investimento líquido (solar − motor gasolina)</td><td>US$9.100</td></tr>
                <tr><td>Poupança anual (combustível + manutenção)</td><td>US$2.016</td></tr>
                <tr><td>Tempo para recuperar o investimento</td><td>4,5 anos</td></tr>
                <tr><td>Poupança total em 10 anos</td><td>~US$8.260</td></tr>
              </tbody>
            </table>`,

        'page-protocolo-content': `
            <h2>Protocolo de coleta de dados</h2>
            <p>A Calculadora Ríos Solares coleta dados com o objetivo de melhorar o planejamento do transporte solar na Amazônia e apoiar a missão da Fundação Kara Solar.</p>
            <h3>Quais dados são coletados?</h3>
            <ul>
              <li>Localização (comunidade e país)</li>
              <li>Quilômetros navegados por semana</li>
              <li>Preço local do galão de gasolina</li>
              <li>Rendimento do motor (km/galão)</li>
              <li>Custo do motor a gasolina na região</li>
              <li>Gasto anual em manutenção</li>
              <li>Configuração do sistema solar selecionado</li>
              <li>Parâmetros de pagamento (entrada, pagamento mensal, juros, subsídio)</li>
            </ul>
            <h3>Como os dados são utilizados?</h3>
            <p>Os dados são armazenados em uma planilha interna da Fundação Kara Solar. São utilizados exclusivamente para:</p>
            <ul>
              <li>Analisar o custo do combustível e os padrões de uso de barcos em diferentes regiões da Amazônia</li>
              <li>Melhorar os modelos financeiros para a expansão do transporte solar</li>
              <li>Informar estratégias de financiamento comunitário e parcerias com fundos e fundações</li>
              <li>Relatórios internos e de impacto para parceiros e financiadores</li>
            </ul>
            <h3>Privacidade e confidencialidade</h3>
            <p>Os dados não são vendidos a terceiros em nenhuma circunstância. Nenhuma informação de identificação pessoal é coletada além da localização geográfica geral. Os dados são armazenados de forma segura e apenas a equipe da Fundação Kara Solar tem acesso. Dados agregados sem identificadores específicos podem ser compartilhados em relatórios públicos de impacto.</p>`,

        'page-aviso-content': `
            <h2>Aviso legal e isenção de responsabilidade</h2>
            <h3>Estimativas, não garantias</h3>
            <p>Os resultados desta calculadora são estimativas baseadas nos dados inseridos e em premissas gerais. As poupanças reais, prazos de pagamento e tempos de recuperação do investimento podem variar conforme o uso real do barco, as flutuações no preço da gasolina, as condições de financiamento e outros fatores locais.</p>
            <h3>Uso de dados</h3>
            <p>Ao usar esta ferramenta, você concorda que os dados inseridos sejam coletados pela Fundação Kara Solar com fins de pesquisa e planejamento, conforme o Protocolo de dados. Os dados não serão vendidos a terceiros.</p>
            <h3>Sem responsabilidade financeira</h3>
            <p>Esta ferramenta não constitui aconselhamento financeiro, jurídico ou de investimento. A Fundação Kara Solar e a Motores Amazonas não se responsabilizam por decisões tomadas com base nos resultados desta calculadora.</p>
            <h3>Preços de referência</h3>
            <p>Os preços dos sistemas solares da Motores Amazonas são de referência e podem mudar. Para preços atualizados e disponibilidade, entre em contato diretamente com a Motores Amazonas em <a href="https://motoresamazonas.com/" target="_blank">motoresamazonas.com</a>.</p>`
    }
};

let currentLang = 'es';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.title = translations[lang]['page-title'];

    document.querySelectorAll('[data-il8n]').forEach(el => {
        const key = el.getAttribute('data-il8n');
        if (translations[lang][key] !== undefined) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    if (typeof calculateResults === 'function') {
        calculateResults();
    }
}

