export const businessInfo = {
  name: "Sri Prakash Car Travels",
  tagline: "Safe Journey, Happy Memories",
  domain: "sriprakashcartravelskakinada.com",
  phone: "9848903025",
  formattedPhone: "+91 9848903025",
  altPhone: "9848903025",
  email: "sriprakashcartravelskkd@gmail.com",
  address: "D-No: 1-15-8, Prashanti apartment, Bhupatiraju Vari St, Sriram Nagar, Kondayya Palem, Kakinada, Andhra Pradesh 533003",
  googleMapsQuery: "Prashanti+apartment+Bhupatiraju+Vari+St+Sriram+Nagar+Kondayya+Palem+Kakinada+Andhra+Pradesh+533003",
  facebook: "https://www.facebook.com/share/1C8ykLqyoQ/",
  instagram: "https://www.instagram.com/sri_prakash_car_travels?stkn=MTJtdXJuZHlpdjZ3bg==",
  workingHours: "24 Hours / 7 Days (365 Days Open)",
  experienceYears: "15+",
  happyCustomers: "10,000+",
  tripsCompleted: "50,000+",
  rating: "4.9/5 (1,450+ Reviews)"
};

export const createWhatsAppUrl = (message) => {
  const phone = "919848903025";
  const defaultText = "Hi Sri Prakash Car Travels, I would like to book a cab.";
  const encoded = encodeURIComponent(message || defaultText);
  return `https://wa.me/${phone}?text=${encoded}`;
};

export const fleetData = [
  {
    id: "dzire",
    name: "Maruti Suzuki Dzire",
    category: "sedan",
    categoryLabel: "Sedan (4+1)",
    tag: "Most Popular",
    image: "/images/dzire.jpg",
    registration: "AP 39 WK 0059",
    seats: "4 Passengers + 1 Driver",
    luggage: "2-3 Large Bags",
    ac: "Chilled Automatic AC",
    fuel: "Petrol / CNG",
    features: ["Pushback Seats", "Surround Music System", "Fast Phone Chargers", "Clean & Sanitized"],
    idealFor: "Airport drop, city commuting & family outstation trips to Vizag, Vijayawada.",
    startingRate: "Best Fixed Rate"
  },
  {
    id: "etios",
    name: "Toyota Etios",
    category: "sedan",
    categoryLabel: "Sedan (4+1)",
    tag: "Economy Classic",
    image: "/images/etios.jpg",
    registration: "AP 39 YD 0069",
    seats: "4 Passengers + 1 Driver",
    luggage: "3 Large Bags (Huge Boot)",
    ac: "Dual Zone Powerful AC",
    fuel: "Diesel / Petrol",
    features: ["Spacious Legroom", "Smooth Highway Ride", "Large Trunk Space", "GPS Tracked"],
    idealFor: "Long outstation trips, airport pickup, business travel.",
    startingRate: "Best Value"
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    category: "suv",
    categoryLabel: "Luxury MPV (7+1)",
    tag: "Executive Luxury",
    image: "/images/innova-crysta.jpg",
    registration: "AP 39 UZ 3223",
    seats: "7 Passengers + 1 Driver",
    luggage: "4-5 Large Bags",
    ac: "Individual AC Vents (3 Rows)",
    fuel: "Diesel Turbo",
    features: ["Captain Reclining Seats", "Supreme Highway Stability", "Rear Charging Ports", "Superior Safety (Airbags)"],
    idealFor: "VIP executive travel, long family pilgrimage tours, wedding transport.",
    startingRate: "Top Choice"
  },
  {
    id: "kia-carens",
    name: "Kia Carens Luxury",
    category: "suv",
    categoryLabel: "Modern MPV (6+1)",
    tag: "Premium Comfort",
    image: "/images/kia-carens.jpg",
    registration: "AP Carens Class",
    seats: "6-7 Passengers + 1 Chauffeur",
    luggage: "3-4 Bags",
    ac: "Roof-Mounted Climate AC",
    fuel: "Turbo Engine",
    features: ["Ambient Interior Lighting", "One-Touch Electric Tumble", "Air Purifier", "Bluetooth Sound"],
    idealFor: "Family holiday tours to Araku, Lambasingi, Maredumilli resorts.",
    startingRate: "Modern Luxury"
  },
  {
    id: "urbania",
    name: "Force Urbania Luxury Van",
    category: "group",
    categoryLabel: "Executive Van (10-17)",
    tag: "Ultra Luxury Coach",
    image: "/images/urbania.jpg",
    registration: "Force Urbania Luxury",
    seats: "10 to 17 Luxury Seats",
    luggage: "Massive Dedicated Luggage Bay",
    ac: "Chilled Monocoque Multi-Zone AC",
    fuel: "Mercedes Derived CRDI",
    features: ["Individual Reclining Seats", "Aircraft Style Roof Controls", "LED Ambient Mood Lighting", "USB on Every Seat"],
    idealFor: "Corporate delegates, celebrity transport, luxury family pilgrimages.",
    startingRate: "Super Luxury"
  },
  {
    id: "tempo-traveller",
    name: "Force Tempo Traveller",
    category: "group",
    categoryLabel: "Tourist Vehicle (12-26)",
    tag: "Official Branded Fleet",
    image: "/images/tempo-traveller.jpg",
    registration: "Sri Prakash Branded Fleet",
    seats: "12 to 26 Passengers",
    luggage: "Roof Carrier + Rear Boot",
    ac: "Dual High-Capacity AC",
    fuel: "Diesel",
    features: ["High-Back Pushback Seats", "LED TV & Stereo Audio", "Curtained Windows", "Dual Experienced Drivers"],
    idealFor: "Pancharama Kshetra tours, Tirupati Balaji, Sabarimala, wedding parties.",
    startingRate: "Group Special"
  },
  {
    id: "luxury-bus",
    name: "SML Isuzu Luxury AC Coach Bus",
    category: "group",
    categoryLabel: "Luxury Coach (32-45)",
    tag: "Flagship Luxury Coach",
    image: "/images/luxury-bus.jpg",
    registration: "9848903025 Branded Coach",
    seats: "32 to 45 Passengers",
    luggage: "Spacious Belly Luggage Hold",
    ac: "Central Heavy-Duty Chilled AC",
    fuel: "Heavy Commercial",
    features: ["Air Suspension Ride", "Pushback Luxury Recliners", "Dual LCD Entertainment", "Professional Chauffeurs"],
    idealFor: "Marriage guest convoys, corporate industrial outings, large pilgrim groups.",
    startingRate: "Coach Package"
  }
];

export const servicesData = [
  {
    id: "airport-taxi",
    icon: "Plane",
    title: "Airport Taxi Service",
    shortDesc: "Punctual 24/7 doorstep pickup and drop for Rajahmundry (RJA), Visakhapatnam (VTZ), Vijayawada (VGA) & Hyderabad (HYD).",
    features: ["Flight Delay Tracking", "Fixed Transparent Rates", "Doorstep Luggage Help", "Guaranteed On-Time"],
    popularDestinations: ["Rajahmundry Airport (1.5 Hrs)", "Vizag Airport (3.5 Hrs)", "Vijayawada Airport (4.5 Hrs)"]
  },
  {
    id: "outstation-cabs",
    icon: "Compass",
    title: "Outstation Cabs (One Way & Round)",
    shortDesc: "Reliable outstation car hire across Andhra Pradesh, Telangana, Tamil Nadu & Karnataka with verified highway drivers.",
    features: ["One-Way Drop Option", "Zero Night Surge", "Clean AC Cars", "Flexible Stops"],
    popularDestinations: ["Kakinada to Vijayawada", "Kakinada to Hyderabad", "Kakinada to Tirupati", "Kakinada to Bangalore"]
  },
  {
    id: "temple-tours",
    icon: "Landmark",
    title: "Temple Tour Pilgrimage Packages",
    shortDesc: "Spiritual temple packages to Annavaram, Pancharamalu, Draksharamam, Pithapuram, Bhadrachalam, Tirupati & Srisailam.",
    features: ["Temple Timings Expertise", "Custom Puja Itineraries", "Senior Citizen Friendly", "Same Day & Multi-Day"],
    popularDestinations: ["Annavaram Satyanarayana", "Draksharamam & Samarlakota", "Pithapuram Sripada Srivallabha"]
  },
  {
    id: "local-city-taxi",
    icon: "MapPin",
    title: "Local City Taxi & Hourly Rentals",
    shortDesc: "Fast and convenient car rental within Kakinada city for business meetings, shopping, port visits, hospitals & railway stations.",
    features: ["4hr/40km & 8hr/80km Packages", "Uniformed Local Drivers", "Quick 15-Min Arrival", "Clean Interiors"],
    popularDestinations: ["Kakinada Town & Port", "Kakinada Railway Station", "Apollo / Local Hospitals", "Local Shopping"]
  },
  {
    id: "holiday-packages",
    icon: "Palmtree",
    title: "Scenic Holiday & Weekend Tours",
    shortDesc: "Handcrafted tourist packages to Araku Valley, Lambasingi fog hills, Maredumilli waterfalls, and Papikondalu cruise.",
    features: ["Hill-Station Expert Drivers", "Photo-Spot Guidance", "Family-Safe Journeys", "Resort Drop & Pickup"],
    popularDestinations: ["Lambasingi & Vanajangi", "Maredumilli & Mothugudem", "Araku Valley & Borra Caves", "Konaseema Dindi"]
  },
  {
    id: "corporate-travel",
    icon: "Briefcase",
    title: "Corporate & Industrial Car Hire",
    shortDesc: "Premium executive car rental solutions for business executives, delegates, port visits, industrial plants & IT firms in Kakinada.",
    features: ["GST Invoice Billing", "Pristine Luxury Sedans/SUVs", "Professional Chauffeurs", "Monthly Rental Contracts"],
    popularDestinations: ["Kakinada Deep Water Port", "Coromandel / NFCL Plants", "District Collectorate", "Industrial Corridors"]
  },
  {
    id: "wedding-events",
    icon: "Heart",
    title: "Wedding & Event Luxury Convoy",
    shortDesc: "Luxury bridal cars and fleet convoys for marriages, reception entries, guest airport transfers, and family functions.",
    features: ["Decorated Luxury Cars", "Coordinated Fleet Convoys", "Innova Crysta & Urbania Vans", "Large AC Buses for Guests"],
    popularDestinations: ["Marriage Function Halls", "Convention Centres", "Door-to-door Guest Shuttles"]
  },
  {
    id: "group-travel",
    icon: "Users",
    title: "Tempo Traveller & Luxury Bus Hire",
    shortDesc: "Spacious 12 to 26 seater Tempo Travellers, Force Urbania, and 32-45 seater AC luxury buses for family gatherings and pilgrimages.",
    features: ["Pushback Reclining Seats", "High-Back Air Suspension", "Dual Professional Drivers", "Audio-Video Systems"],
    popularDestinations: ["College Industrial Tours", "Tirupati Pilgrim Groups", "Family Destination Events"]
  }
];

export const templePackagesData = [
  {
    id: "annavaram",
    title: "Kakinada to Annavaram Temple Taxi",
    subtitle: "Sri Veera Venkata Satyanarayana Swamy Temple",
    distance: "~50 km (1 Hr)",
    duration: "Same Day Return / 4-6 Hours",
    description: "Sacred darshan at Ratnagiri hills, holy bath in Pampa river, Vratham rituals, and serene hill views. Punctual doorstep pickup and drop in Kakinada.",
    itinerary: ["Pickup from Kakinada residence/hotel", "Drive via NH16 to Annavaram hill top", "Time for Darshan & Satyanarayana Vratham", "Visit Pampa river view & return drop"],
    recommendedCar: "Swift Dzire / Ertiga / Innova Crysta",
    tag: "Most Popular Daily Trip"
  },
  {
    id: "pancharamalu",
    title: "Pancharama Kshetra Pilgrimage Tour",
    subtitle: "5 Sacred Shiva Kshetras of Godavari",
    distance: "Custom Circuit (200-350 km)",
    duration: "1 or 2 Days Package",
    description: "Divine circuit visiting Draksharamam (Bhimeswara Swamy), Samarlakota (Kumara Rama), Palakollu (Ksheera Rama), Bhimavaram (Soma Rama), and Amaravathi (Ama Rama).",
    itinerary: ["Draksharamam Bhimeswara Swamy & Manikyamba Shakti Peetham", "Samarlakota Kumara Rama Temple", "Palakollu & Bhimavaram Kshetras", "Optional Amaravathi extension"],
    recommendedCar: "Innova Crysta / Ertiga / Tempo Traveller",
    tag: "Sacred Spiritual Circuit"
  },
  {
    id: "pithapuram",
    title: "Pithapuram Sripada Srivallabha Kshetra",
    subtitle: "Dattatreya Avatar & Puruhutika Shakti Peetham",
    distance: "~18 km (30 Mins)",
    duration: "Half Day / 3-4 Hours",
    description: "Visit Sri Pada Srivallabha Mahasamsthanam (first avatar of Lord Dattatreya in Kali Yuga), Kukkuteswara Swamy temple, and sacred Pada Gaya Sarovaram.",
    itinerary: ["Quick pickup from Kakinada", "Sripada Srivallabha Mahasamsthanam Darshan", "Pada Gaya holy bath & Kukkuteswara Temple", "Safe return to Kakinada"],
    recommendedCar: "Dzire / Etios / Carens",
    tag: "Quick Darshan"
  },
  {
    id: "konaseema-temples",
    title: "Konaseema Divya Temples Circuit",
    subtitle: "Ainavilli, Ryali, Vadapalli & Mandapalli",
    distance: "~120 km Circuit",
    duration: "Full Day (8-10 Hours)",
    description: "Scenic lush Godavari coconut groves road trip covering Siddhi Vinayaka at Ainavilli, rare Jaganmohini Kesava Swamy at Ryali, and Vadapalli Venkateswara Swamy.",
    itinerary: ["Ainavilli Vigneswara Temple", "Mukteswaram ferry & Godavari river views", "Ryali Jaganmohini Kesava Swamy", "Vadapalli Lord Venkateswara & return"],
    recommendedCar: "Ertiga / Innova Crysta / Dzire",
    tag: "Scenic & Divine"
  },
  {
    id: "bhadrachalam",
    title: "Kakinada to Bhadrachalam Temple Tour",
    subtitle: "Sri Sita Ramachandra Swamy Temple",
    distance: "~220 km (5 Hrs)",
    duration: "1 or 2 Days Package",
    description: "Holy pilgrimage to Lord Rama's celestial abode on the banks of Godavari, holy bath, temple darshan, and visit to historic Parnasala.",
    itinerary: ["Early morning start from Kakinada", "Scenic drive via Rajahmundry & Rampachodavaram", "Bhadrachalam Temple Darshan & Parnasala", "Overnight stay or same day return"],
    recommendedCar: "Toyota Innova Crysta / Force Urbania",
    tag: "High Demand Weekend"
  },
  {
    id: "srisailam-tirupati",
    title: "Grand Pilgrimage: Tirupati & Srisailam",
    subtitle: "Lord Venkateswara & Mallikarjuna Jyotirlinga",
    distance: "~540+ km",
    duration: "3 to 4 Days Package",
    description: "Comprehensive pilgrimage tour to Tirumala Balaji, Padmavathi Ammavari Temple, Kanipakam, and Mallikarjuna Jyotirlinga at Srisailam hills.",
    itinerary: ["Customized pickup and itinerary planning", "Dedicated chauffeur with extensive Ghat road experience", "Assistance with accommodation route stops", "Safe and punctual round trip drop"],
    recommendedCar: "Innova Crysta / Force Urbania / Tempo Traveller",
    tag: "Grand Pilgrimage"
  }
];

export const holidayPackagesData = [
  {
    id: "lambasingi",
    title: "Lambasingi & Vanajangi Fog Tour",
    location: "Kashmir of Andhra Pradesh",
    duration: "2 Days / 1 Night",
    highlights: ["Vanajangi Cloud Sunrise Peak", "Lambasingi Sub-Zero Winter Fog", "Kothapalli Waterfalls", "Coffee & Pepper Plantations"],
    description: "Experience misty winter mornings, cloud walking at Vanajangi hills, apple & strawberry farms, and campfire nights with our hill-expert chauffeurs.",
    car: "Kia Carens / Innova Crysta / Ertiga"
  },
  {
    id: "maredumilli",
    title: "Maredumilli & Mothugudem Waterfalls",
    location: "Dense Eastern Ghats Eco-Tourism",
    duration: "1 or 2 Days",
    highlights: ["Jalatarangini & Amruthadhara Falls", "Authentic Bamboo Chicken", "Mothugudem Polluru Waterfalls", "Jungle Eco-Resorts"],
    description: "Deep virgin forests, crystal clean streams, and tribal heritage. Perfect weekend escape for nature lovers and families from Kakinada.",
    car: "Innova Crysta / Force Urbania / Dzire"
  },
  {
    id: "araku-vizag",
    title: "Vizag Sightseeing & Araku Valley",
    location: "Beaches & Coffee Hills",
    duration: "2 to 3 Days",
    highlights: ["Borra Caves & Chaparai Rapids", "Coffee Museum & Padmapuram Gardens", "RK Beach & Submarine Museum", "Kailasagiri Hilltop"],
    description: "The complete coastal and hill-station holiday package combining the City of Destiny (Vizag) and the coffee aroma hills of Araku.",
    car: "Kia Carens / Toyota Innova Crysta"
  },
  {
    id: "konaseema-dindi",
    title: "Konaseema Backwaters & Coringa",
    location: "Godavari Backwaters & Mangroves",
    duration: "1 or 2 Days",
    highlights: ["Dindi Houseboats on Godavari", "Coringa Mangrove Sanctuary Walk", "Hope Island Boat Point", "Coconut Country Roadscapes"],
    description: "Tranquil green waterways, fresh seafood delicacies, and India's second largest mangrove forest right at Kakinada's doorstep.",
    car: "Swift Dzire / Toyota Etios / Ertiga"
  },
  {
    id: "papikondalu",
    title: "Papikondalu Godavari River Cruise",
    location: "Gorge Cruise & Nature Huts",
    duration: "1 or 2 Days",
    highlights: ["Purushothapatanam Boat Point Transfer", "Breathtaking Godavari Hill Gorges", "Perantapalli Ashram", "Kolluru Night Bamboo Huts"],
    description: "Door-to-door express taxi transfer to the Papikondalu boat launching point with seamless coordination for round trip return.",
    car: "Innova Crysta / Force Urbania / Tempo Traveller"
  }
];

export const popularRoutes = [
  { from: "Kakinada", to: "Rajahmundry Airport (RJA)", dist: "65 km", time: "1.5 Hrs", route: "Via Samarlakota & Rajanagaram", car: "Dzire / Ertiga / Innova" },
  { from: "Kakinada", to: "Visakhapatnam (Vizag)", dist: "155 km", time: "3.5 Hrs", route: "Via NH16 Annavaram Highway", car: "Dzire / Carens / Crysta" },
  { from: "Kakinada", to: "Vijayawada", dist: "210 km", time: "4.5 Hrs", route: "Via Ravulapalem & Eluru", car: "All Fleet Options" },
  { from: "Kakinada", to: "Annavaram Temple", dist: "50 km", time: "1.0 Hr", route: "Via NH16 Express Way", car: "Dzire / Etios / Ertiga" },
  { from: "Kakinada", to: "Hyderabad", dist: "490 km", time: "9.0 Hrs", route: "Via Vijayawada Expressway", car: "Innova Crysta / Carens / Bus" },
  { from: "Kakinada", to: "Tirupati", dist: "540 km", time: "10.0 Hrs", route: "Via Ongole & Nellore", car: "Innova Crysta / Urbania" },
  { from: "Kakinada", to: "Maredumilli", dist: "135 km", time: "3.5 Hrs", route: "Via Rajahmundry & Rampachodavaram", car: "Carens / Crysta / Urbania" },
  { from: "Kakinada", to: "Araku Valley", dist: "245 km", time: "6.0 Hrs", route: "Via Anakapalle & S.Kota Ghat", car: "Innova Crysta / Carens" }
];

export const testimonialsData = [
  {
    name: "Ramesh Naidu",
    city: "Kakinada to Rajahmundry Airport",
    rating: 5,
    date: "Recent Trip",
    comment: "Booked Sri Prakash Car Travels for an early morning 4 AM pickup to Rajahmundry Airport. The Innova Crysta arrived 15 minutes before time, spotless clean, and the driver was extremely polite. Highly dependable service in Kakinada!",
    vehicle: "Innova Crysta"
  },
  {
    name: "Sravani Venkat",
    city: "Family Pilgrimage to Annavaram & Pancharamalu",
    rating: 5,
    date: "Recent Trip",
    comment: "We organized a 2-day temple tour for our elderly parents to Annavaram, Draksharamam, and Pithapuram. Sri Prakash Travels provided an Ertiga with a driver who was patient, respectful, and knew every temple entry shortcut. Flawless experience!",
    vehicle: "Maruti Ertiga"
  },
  {
    name: "Dr. K. Srinivas Rao",
    city: "Kakinada to Hyderabad Outstation",
    rating: 5,
    date: "Recent Trip",
    comment: "Comfortable highway journey to Hyderabad. Clear fixed pricing with zero hidden charges. The car condition was showroom fresh with smooth AC. Sri Prakash Car Travels is truly the best taxi service in Kakinada.",
    vehicle: "Toyota Innova Crysta"
  },
  {
    name: "Vamsi Krishna",
    city: "Araku & Lambasingi Tour (12 Seater)",
    rating: 5,
    date: "Recent Trip",
    comment: "Booked their branded Tempo Traveller for our college friends' trip to Lambasingi and Araku. Music system was awesome, seats very comfortable for long hours, and the driver handled hill roads like a pro. 10/10!",
    vehicle: "Tempo Traveller"
  }
];

export const faqData = [
  {
    q: "Why is Sri Prakash Car Travels considered the best taxi service in Kakinada?",
    a: "We operate our own authentic, well-maintained fleet (Maruti Dzire, Toyota Etios, Kia Carens, Toyota Innova Crysta, Force Urbania, Tempo Travellers, and AC Luxury Coaches). With 15+ years of trusted service, 24/7 availability, verified polite drivers, and 100% transparent fixed billing with zero hidden fees, we ensure total peace of mind."
  },
  {
    q: "How can I book a cab with Sri Prakash Car Travels?",
    a: "Booking is instant! You can call our 24/7 helpline at +91 9848903025, or click the WhatsApp button on our website to send your pickup point, destination, date, and preferred vehicle. We confirm your booking and assign driver details within 2 minutes."
  },
  {
    q: "Do you offer Airport Taxi pickups from Rajahmundry and Vizag Airports?",
    a: "Yes! We specialize in doorstep transfers to and from Rajahmundry Airport (RJA ~65 km) and Visakhapatnam Airport (VTZ ~155 km), as well as Vijayawada (VGA) and Hyderabad (HYD). We track flight timings in real-time so your driver is waiting at the arrival terminal even if your flight is delayed."
  },
  {
    q: "Can I book One Way Taxi drops from Kakinada?",
    a: "Yes, we offer cost-effective One Way drop cabs from Kakinada to Rajahmundry, Visakhapatnam, Vijayawada, Hyderabad, and Tirupati. You only pay for your journey without unnecessary return fare burden."
  },
  {
    q: "Do you offer customized Temple Tour packages from Kakinada?",
    a: "Absolutely. We specialize in spiritual pilgrimages to Annavaram Satyanarayana Swamy, Draksharamam Bhimeswara Swamy, Pithapuram Sripada Srivallabha, Pancharama Kshetras, Bhadrachalam, and Tirupati Balaji with custom timings suited for family and senior citizens."
  },
  {
    q: "Are the vehicles clean, sanitized, and air-conditioned?",
    a: "Yes. Every single vehicle in our fleet undergoes complete interior vacuuming, sanitization, and mechanical safety inspections before every trip. AC is 100% operational in all vehicle classes."
  },
  {
    q: "What payment modes do you accept?",
    a: "We accept Google Pay, PhonePe, UPI, Bank Transfer, Net Banking, and Cash directly to the driver upon trip completion."
  }
];
