import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const BASE_HTML = path.join(DIST_DIR, 'index.html');
const DOMAIN = 'https://sriprakashcartravelskakinada.com';
const PHONE = '+91 9848903025';

if (!fs.existsSync(BASE_HTML)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(BASE_HTML, 'utf-8');

const routes = [
  {
    path: '/',
    title: 'Sri Prakash Car Travels Kakinada | 24/7 Taxi Service, Airport Cabs & Temple Tours',
    description: 'Sri Prakash Car Travels in Kakinada offers 24/7 Cab & Taxi Service, Rajahmundry & Vizag Airport Cabs, Outstation One Way / Round Trips, Temple Tours, and Luxury Car Rentals. Call +91 9848903025.',
    h1: 'Best Car Travels & Taxi Service in Kakinada',
    summary: '24/7 Airport Taxi, Outstation Cabs, Temple Tours, and Fleet Rentals with verified chauffeurs and fixed transparent rates in Kakinada. Servicing Bhanugudi, Sriram Nagar, JNTUK, Ramanayyapeta & all East Godavari.'
  },
  {
    path: '/cars',
    title: 'Our Fleet – Dzire, Innova Crysta, Tempo Traveller & Luxury Bus Hire | Sri Prakash Car Travels Kakinada',
    description: 'Explore Sri Prakash Car Travels verified fleet in Kakinada: Maruti Dzire, Toyota Etios, Innova Crysta, Kia Carens, Force Urbania, Tempo Traveller & AC Luxury Coach. Book 24/7.',
    h1: 'Our Verified Fleet in Kakinada',
    summary: 'Explore our sanitized, chauffeur-driven cars, luxury MPVs, and tourist buses available 24/7 in Kakinada with transparent per-km rates.'
  },
  {
    path: '/services',
    title: 'Taxi & Cab Services in Kakinada – Local, Outstation, Airport & Temple Tours | Sri Prakash Car Travels Kakinada',
    description: 'Complete taxi services by Sri Prakash Car Travels Kakinada: local city cabs, airport transfers, outstation one-way & round trips, temple pilgrimages, wedding cars, and corporate travel.',
    h1: 'Taxi & Cab Services in Kakinada',
    summary: 'Comprehensive taxi services including local city cabs, outstation trips, airport transfers, and corporate travel across Andhra Pradesh.'
  },
  {
    path: '/airport-taxi',
    title: 'Airport Taxi Kakinada – Rajahmundry, Vizag, Vijayawada & Hyderabad Airport Cabs | Sri Prakash Car Travels Kakinada',
    description: '24/7 airport pickup & drop taxi from Kakinada to Rajahmundry Airport (RJA), Vizag Airport (VTZ), Vijayawada Airport (VGA) & Hyderabad Airport (HYD). Flight tracking, fixed fares. Call 9848903025.',
    h1: 'Airport Taxi Service Kakinada',
    summary: 'Doorstep pickup and terminal drop cab service to Rajahmundry, Visakhapatnam, Vijayawada, and Hyderabad airports with live flight tracking.'
  },
  {
    path: '/temple-tours',
    title: 'Temple Tour Packages from Kakinada – Annavaram, Pancharamalu, Tirupati & More | Sri Prakash Car Travels Kakinada',
    description: 'Spiritual pilgrimage taxi packages from Kakinada to Annavaram, Draksharamam, Pancharamalu, Pithapuram, Bhadrachalam, Srisailam & Tirupati. Senior citizen friendly. Call 9848903025.',
    h1: 'Temple Tour Packages from Kakinada',
    summary: 'Sacred pilgrimage packages to famous temples across Andhra Pradesh with experienced, family-safe chauffeurs.'
  },
  {
    path: '/holiday-packages',
    title: 'Holiday Tour Packages from Kakinada – Araku, Lambasingi, Maredumilli & Vizag | Sri Prakash Car Travels Kakinada',
    description: 'Scenic holiday tour packages from Kakinada: Lambasingi fog tour, Maredumilli eco-tourism, Araku Valley, Papikondalu cruise, Konaseema backwaters & Hyderabad city tour. Book now!',
    h1: 'Holiday & Tourist Tour Packages from Kakinada',
    summary: 'Explore scenic hill stations, lush green backwaters, and waterfalls with Sri Prakash Car Travels.'
  },
  {
    path: '/routes',
    title: 'Outstation Routes & Distance Guide from Kakinada – Taxi Fare Calculator | Sri Prakash Car Travels Kakinada',
    description: 'Check distances, travel times & fixed taxi fares from Kakinada to Vizag, Vijayawada, Hyderabad, Tirupati, Rajahmundry, Araku & more. Transparent pricing by Sri Prakash Car Travels.',
    h1: 'Outstation Routes & Distance Guide from Kakinada',
    summary: 'Estimated driving distances, highway routes, and fixed cab fares for popular destinations from Kakinada.'
  },
  {
    path: '/about',
    title: 'About Sri Prakash Car Travels – 15+ Years Trusted Taxi Service in Kakinada | Sri Prakash Car Travels Kakinada',
    description: 'Learn about Sri Prakash Car Travels 15+ year legacy of safe, transparent taxi service in Kakinada with our own verified fleet, trained chauffeurs & 10,000+ happy customers.',
    h1: 'About Sri Prakash Car Travels Kakinada',
    summary: '15+ years of trusted taxi and car travels service in Kakinada, operating our own fleet with verified drivers.'
  },
  {
    path: '/contact',
    title: 'Contact Sri Prakash Car Travels Kakinada – 24/7 Cab Booking Helpline | Sri Prakash Car Travels Kakinada',
    description: 'Contact Sri Prakash Car Travels for instant cab booking in Kakinada. Call +91 9848903025, WhatsApp us, or visit our office at Kondayya Palem. Available 24 hours, 365 days.',
    h1: 'Contact Sri Prakash Car Travels Kakinada',
    summary: '24/7 cab booking helpline: +91 9848903025. Office at Sriram Nagar, Kondayya Palem, Kakinada.'
  },
  // Airport routes
  {
    path: '/airport-taxi/rajahmundry',
    title: 'Kakinada to Rajahmundry Airport Taxi (RJA) | Sri Prakash Car Travels Kakinada',
    description: 'Book 24/7 Kakinada to Rajahmundry Airport Taxi (RJA). 65 km, 1.5 hour drive with doorstep pickup and flight delay tracking. Fixed fares.',
    h1: 'Kakinada to Rajahmundry Airport Taxi (RJA)',
    summary: 'Dedicated door-to-terminal pickup and arrival drops with flight tracking for all IndiGo and domestic flights at Rajahmundry.'
  },
  {
    path: '/airport-taxi/vizag',
    title: 'Kakinada to Visakhapatnam (Vizag) Airport Taxi (VTZ) | Sri Prakash Car Travels Kakinada',
    description: 'Book 24/7 Kakinada to Vizag Airport Taxi (VTZ). 155 km, 3.5 hour highway cruising via NH16 with luxury Innova Crysta and sedan cabs.',
    h1: 'Kakinada to Visakhapatnam (Vizag) Airport Taxi (VTZ)',
    summary: 'Express highway airport transfer from Kakinada to Visakhapatnam International Airport via NH16.'
  },
  {
    path: '/airport-taxi/vijayawada',
    title: 'Kakinada to Vijayawada Airport Taxi (VGA) | Sri Prakash Car Travels Kakinada',
    description: 'Kakinada to Vijayawada Gannavaram Airport Taxi. 210 km, 4.5 hour comfortable highway drive. Chauffeur driven cabs with luggage assistance.',
    h1: 'Kakinada to Vijayawada Airport Taxi (VGA)',
    summary: 'Smooth journey to Gannavaram airport for international and metro connections.'
  },
  {
    path: '/airport-taxi/hyderabad',
    title: 'Kakinada to Hyderabad Airport Taxi (HYD) | Sri Prakash Car Travels Kakinada',
    description: 'Kakinada to Hyderabad Rajiv Gandhi International Airport Taxi. 490 km overnight/daytime sleeper-comfort SUV cabs for international flights.',
    h1: 'Kakinada to Hyderabad Airport Taxi (HYD)',
    summary: 'Comfortable family trip for international flights at Shamshabad.'
  },
  // Temple routes
  {
    path: '/temple-tours/annavaram',
    title: 'Kakinada to Annavaram Temple Taxi | Sri Prakash Car Travels Kakinada',
    description: 'Book Kakinada to Annavaram Satyanarayana Swamy Temple Cab. 50 km, 1-hour drive. Doorstep pickup, Vratham timing assistance, same-day return.',
    h1: 'Kakinada to Annavaram Temple Taxi',
    summary: 'Pilgrimage to Sri Veera Venkata Satyanarayana Swamy temple at Ratnagiri Hill with Pampa river bath and Vratham rituals.'
  },
  {
    path: '/temple-tours/pancharamalu',
    title: 'Pancharamalu & Draksharamam Temple Tour Cab from Kakinada | Sri Prakash Car Travels Kakinada',
    description: '5 Sacred Shiva Kshetras pilgrimage package: Draksharamam, Samarlakota, Palakollu, Bhimavaram & Amaravathi. Experienced devotional tour drivers.',
    h1: 'Pancharamalu & Draksharamam Temple Tour Cab',
    summary: 'Sacred pilgrimage covering 5 Lord Shiva Kshetras of Godavari with custom 1 to 2 day circuits.'
  },
  {
    path: '/temple-tours/pithapuram',
    title: 'Kakinada to Pithapuram Sripada Srivallabha Temple Cab | Sri Prakash Car Travels Kakinada',
    description: 'Kakinada to Pithapuram taxi service. 18 km, 30 min quick drive to Sripada Srivallabha Mahasamsthanam and Pada Gaya Sarovaram.',
    h1: 'Kakinada to Pithapuram Sripada Srivallabha Temple Cab',
    summary: 'Visit Sripada Srivallabha Mahasamsthanam and Pada Gaya holy sarovaram in Pithapuram.'
  },
  {
    path: '/temple-tours/konaseema-temples',
    title: 'Ainavilli, Ryali & Vadapalli Temple Tour from Kakinada | Sri Prakash Car Travels Kakinada',
    description: 'Devotional Konaseema circuit taxi package: Ainavilli Vinayaka, Ryali Jaganmohini Kesava Swamy, and Vadapalli Venkateswara Swamy.',
    h1: 'Ainavilli, Ryali & Vadapalli Temple Tour from Kakinada',
    summary: 'Divine Konaseema temple circuit through scenic coconut groves and Godavari river views.'
  },
  {
    path: '/temple-tours/bhadrachalam',
    title: 'Kakinada to Bhadrachalam Temple Taxi Tour | Sri Prakash Car Travels Kakinada',
    description: 'Kakinada to Bhadrachalam Sita Ramachandra Swamy temple cab package. Scenic Godavari river route, Parnasala visit, safe family travel.',
    h1: 'Kakinada to Bhadrachalam Temple Taxi Tour',
    summary: 'Pilgrimage to Sri Sita Ramachandra Swamy Temple on the banks of Godavari with Parnasala visit.'
  },
  {
    path: '/temple-tours/srisailam-tirupati',
    title: 'Kakinada to Srisailam & Tirupati Pilgrimage Tour | Sri Prakash Car Travels Kakinada',
    description: 'Grand Andhra pilgrimage taxi package: Lord Mallikarjuna Swamy Jyotirlinga at Srisailam and Tirumala Tirupati Balaji with Ghat road chauffeurs.',
    h1: 'Kakinada to Srisailam & Tirupati Pilgrimage Tour',
    summary: 'Grand pilgrimage tour to Srisailam Jyotirlinga and Tirumala Balaji with experienced Ghat road chauffeurs.'
  },
  // Holiday routes
  {
    path: '/holiday-packages/lambasingi',
    title: 'Lambasingi & Vanajangi Fog Tour from Kakinada | Sri Prakash Car Travels Kakinada',
    description: '2-Day tour to Kashmir of Andhra Pradesh: Vanajangi cloud sunrise, Lambasingi winter fog, Kothapalli waterfalls, and strawberry farms.',
    h1: 'Lambasingi & Vanajangi Fog Tour from Kakinada',
    summary: 'Experience Kashmir of Andhra, cloud sunrise views at Vanajangi hills, waterfalls, and campfire nights.'
  },
  {
    path: '/holiday-packages/maredumilli',
    title: 'Maredumilli & Mothugudem Eco-Tourism Tour from Kakinada | Sri Prakash Car Travels Kakinada',
    description: 'Dense Eastern Ghats eco-forest tour from Kakinada: Jalatarangini waterfalls, authentic bamboo chicken, jungle resorts, Polluru falls.',
    h1: 'Maredumilli & Mothugudem Eco-Tourism Tour from Kakinada',
    summary: 'Dense eco-forests, waterfalls, famous bamboo chicken, and nature resorts in Maredumilli.'
  },
  {
    path: '/holiday-packages/araku-vizag',
    title: 'Vizag City & Araku Valley Tour Package from Kakinada | Sri Prakash Car Travels Kakinada',
    description: 'Complete coastal and hill package: RK Beach, Submarine Museum, Kailasagiri, Borra Caves, Chaparai rapids & coffee plantations.',
    h1: 'Vizag City & Araku Valley Tour Package from Kakinada',
    summary: 'Beaches, submarine museum, Borra Caves, and coffee plantations with dedicated outstation cabs.'
  },
  {
    path: '/holiday-packages/konaseema-dindi',
    title: 'Konaseema & Dindi Backwaters Tour from Kakinada | Sri Prakash Car Travels Kakinada',
    description: 'Godavari backwaters tour: Dindi houseboats, Coringa mangrove sanctuary boardwalk, Hope Island boat point, and coconut landscapes.',
    h1: 'Konaseema & Dindi Backwaters Tour from Kakinada',
    summary: 'Coconut country tour, Dindi houseboats, Coringa Mangrove Sanctuary, and fresh seafood delicacies.'
  },
  {
    path: '/holiday-packages/papikondalu',
    title: 'Papikondalu Godavari Cruise Tour from Kakinada | Sri Prakash Car Travels Kakinada',
    description: 'Breathtaking Godavari gorge cruise, Kolluru night bamboo huts, Perantapalli Ashram with express cab and boat point transfer from Kakinada.',
    h1: 'Papikondalu Godavari Cruise Tour from Kakinada',
    summary: 'Godavari gorge boat cruise, Kolluru night stay huts, and Perantapalli Ashram.'
  },
  {
    path: '/holiday-packages/hyderabad-ramoji',
    title: 'Hyderabad & Ramoji Film City Tour from Kakinada | Sri Prakash Car Travels Kakinada',
    description: '3-4 day tour: Ramoji Film City, Charminar, Golconda Fort, Salar Jung Museum with dedicated round-trip SUV cab from Kakinada.',
    h1: 'Hyderabad & Ramoji Film City Tour from Kakinada',
    summary: 'Full day Ramoji Film City tour, Charminar, Golconda Fort, and shopping with dedicated round trip cab.'
  },
  // 404
  {
    path: '/404',
    title: 'Page Not Found | Sri Prakash Car Travels Kakinada',
    description: 'The requested page could not be found. Visit Sri Prakash Car Travels for 24/7 taxi booking in Kakinada.',
    h1: '404 - Page Not Found',
    summary: 'The page you requested does not exist. Call +91 9848903025 for immediate taxi assistance.',
    robots: 'noindex, nofollow'
  }
];

let generatedCount = 0;

for (const route of routes) {
  const isRoot = route.path === '/';
  const outDir = isRoot ? DIST_DIR : path.join(DIST_DIR, route.path.replace(/^\//, ''));
  const outFile = path.join(outDir, 'index.html');

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/i, `<meta name="title" content="${route.title}" />`);

  // Replace Description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${route.description}" />`);

  // Replace Canonical
  const canonicalUrl = `${DOMAIN}${route.path === '/' ? '' : route.path}`;
  if (html.includes('<!-- Canonical URL managed dynamically')) {
    html = html.replace(
      '<!-- Canonical URL managed dynamically per-page by react-helmet-async -->',
      `<link rel="canonical" href="${canonicalUrl}" />`
    );
  } else if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${canonicalUrl}" />`);
  }

  // Replace Robots if specified
  if (route.robots) {
    html = html.replace(/<meta name="robots" content=".*?" \/>/i, `<meta name="robots" content="${route.robots}" />`);
  }

  // Replace Open Graph & Twitter
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${route.description}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/i, `<meta name="twitter:url" content="${canonicalUrl}" />`);

  // Pre-seed <div id="root"> with semantic SEO content for non-JS crawlers
  const seoContent = `
    <div style="padding: 2rem; max-width: 1200px; margin: 0 auto; color: #0f172a; font-family: sans-serif;">
      <header>
        <p style="color: #FF5B00; font-weight: bold; font-size: 0.875rem; text-transform: uppercase;">Sri Prakash Car Travels - Kakinada #1 Rated Taxi Service</p>
        <h1 style="font-size: 2rem; margin-top: 0.5rem; margin-bottom: 1rem;">${route.h1}</h1>
        <p style="font-size: 1.125rem; line-height: 1.6; color: #334155;">${route.summary}</p>
        <p style="margin-top: 1rem;"><strong>24/7 Booking Helpline:</strong> <a href="tel:+919848903025" style="color: #FF5B00;">${PHONE}</a></p>
      </header>
    </div>
  `;

  html = html.replace('<div id="root"></div>', `<div id="root">${seoContent}</div>`);

  fs.writeFileSync(outFile, html, 'utf-8');
  generatedCount++;
}

console.log(`✅ Prerendered ${generatedCount} static HTML pages in dist/!`);
