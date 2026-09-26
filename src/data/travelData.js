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
    id: "local-city-taxi",
    icon: "MapPin",
    title: "Local Taxi Service Kakinada",
    shortDesc: "Fast, comfortable, and affordable local cab booking in Kakinada for city commutes, shopping, business meetings, and railway station transfers.",
    features: ["4hr/40km & 8hr/80km Packages", "Uniformed Local Drivers", "Quick 15-Min Arrival", "Clean Interiors"],
    popularDestinations: ["Kakinada Town & Port", "Kakinada Railway Station", "Apollo / Local Hospitals", "Local Shopping"]
  },
  {
    id: "airport-taxi",
    icon: "Plane",
    title: "Airport Taxi Kakinada",
    shortDesc: "24/7 dedicated Airport Pickup & Drop cab service to Rajahmundry Airport (RJA), Vizag Airport (VTZ), Vijayawada (VGA), and Hyderabad (HYD).",
    features: ["Flight Delay Tracking", "Fixed Transparent Rates", "Doorstep Luggage Help", "Guaranteed On-Time"],
    popularDestinations: ["Rajahmundry Airport (1.5 Hrs)", "Vizag Airport (3.5 Hrs)", "Vijayawada Airport (4.5 Hrs)", "Hyderabad Airport"]
  },
  {
    id: "outstation-cabs",
    icon: "Compass",
    title: "Outstation Cab Kakinada",
    shortDesc: "Hassle-free Outstation Taxi booking from Kakinada to Vizag, Vijayawada, Hyderabad, Chennai, Bangalore, Tirupati, and all major South India towns.",
    features: ["One-Way & Round Trip", "Zero Night Surge", "Clean AC Cars", "Flexible Stops"],
    popularDestinations: ["Kakinada to Vijayawada", "Kakinada to Hyderabad", "Kakinada to Tirupati", "Kakinada to Bangalore"]
  },
  {
    id: "one-way-taxi",
    icon: "Route",
    title: "One Way Taxi Service",
    shortDesc: "Pay only for one-way distance with our budget One Way Cab Kakinada packages to Vijayawada, Vizag, Hyderabad, and Tirupati.",
    features: ["Pay Only For 1 Way", "No Return Toll Burden", "Instant Cab Confirmation", "Doorstep Pickup & Drop"],
    popularDestinations: ["Kakinada to Vizag One Way", "Kakinada to Vijayawada One Way", "Kakinada to Hyderabad Drop"]
  },
  {
    id: "temple-tours",
    icon: "Landmark",
    title: "Temple Pilgrimage Packages",
    shortDesc: "Spiritual temple tour cabs to Annavaram, Draksharamam, Pithapuram, Samarlakota, Srisailam, Tirupati Balaji, & Sabarimala with custom timing.",
    features: ["Temple Timings Expertise", "Custom Puja Itineraries", "Senior Citizen Friendly", "Same Day & Multi-Day"],
    popularDestinations: ["Annavaram Satyanarayana", "Draksharamam & Samarlakota", "Pithapuram Sripada Srivallabha", "Tirupati & Srisailam"]
  },
  {
    id: "holiday-packages",
    icon: "Palmtree",
    title: "Holiday Tour Packages",
    shortDesc: "Scenic tourist taxi packages to Araku Valley, Lambasingi, Maredumilli, Papikondalu, Konaseema backwaters, and Vizag beaches.",
    features: ["Hill-Station Expert Drivers", "Photo-Spot Guidance", "Family-Safe Journeys", "Resort Drop & Pickup"],
    popularDestinations: ["Lambasingi & Vanajangi", "Maredumilli & Mothugudem", "Araku Valley & Borra Caves", "Konaseema Dindi"]
  },
  {
    id: "corporate-travel",
    icon: "Briefcase",
    title: "Corporate Taxi Service",
    shortDesc: "Professional executive car hiring and employee transportation in Kakinada for corporate clients, IT companies, & industrial visits.",
    features: ["GST Invoice Billing", "Pristine Luxury Sedans/SUVs", "Professional Chauffeurs", "Monthly Rental Contracts"],
    popularDestinations: ["Kakinada Deep Water Port", "Coromandel / NFCL Plants", "District Collectorate", "Industrial Corridors"]
  },
  {
    id: "wedding-events",
    icon: "Heart",
    title: "Wedding Car Booking",
    shortDesc: "Luxury wedding cars and marriage taxi services for bride/groom entries, guest transfers, and family event travel in Kakinada.",
    features: ["Decorated Luxury Cars", "Coordinated Fleet Convoys", "Innova Crysta & Urbania Vans", "Large AC Buses for Guests"],
    popularDestinations: ["Marriage Function Halls", "Convention Centres", "Door-to-door Guest Shuttles"]
  },
  {
    id: "daily-monthly-cabs",
    icon: "CalendarCheck",
    title: "Daily & Monthly Cab Booking",
    shortDesc: "Flexible long-term cab booking plans with dedicated drivers for business executives, doctors, and families residing in Kakinada.",
    features: ["Dedicated Chauffeur", "Cost-Effective Monthly Packages", "Priority Fleet Backup", "Full Maintenance Included"],
    popularDestinations: ["Daily Office Commutes", "Medical & Hospital Runs", "Long-Term Project Support"]
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
    title: "Kakinada to Annavaram Taxi",
    subtitle: "Sri Veera Venkata Satyanarayana Swamy Temple",
    distance: "~50 km (1 Hr)",
    duration: "1 Day Trip",
    description: "Darshan of Sri Veera Venkata Satyanarayana Swamy at Ratnagiri Hill, holy bath in Pampa river, Vratham rituals, and serene hill views. Punctual doorstep pickup and drop in Kakinada.",
    itinerary: ["Pickup from Kakinada residence/hotel", "Drive via NH16 to Annavaram hill top", "Time for Darshan & Satyanarayana Vratham", "Visit Pampa river view & return drop"],
    recommendedCar: "Swift Dzire / Ertiga / Innova Crysta",
    tag: "1 Day Trip"
  },
  {
    id: "pancharamalu",
    title: "Pancharamalu & Draksharamam",
    subtitle: "5 Sacred Shiva Kshetras of Godavari",
    distance: "Custom Circuit (200-350 km)",
    duration: "1-2 Days Trip",
    description: "Sacred pilgrimage covering 5 Lord Shiva Kshetras: Draksharamam (Bhimeswara Swamy & Manikyamba Shakti Peetham), Samarlakota (Kumara Rama), Palakollu, Bhimavaram, and Amaravathi.",
    itinerary: ["Draksharamam Bhimeswara Swamy & Manikyamba Shakti Peetham", "Samarlakota Kumara Rama Temple", "Palakollu & Bhimavaram Kshetras", "Optional Amaravathi extension"],
    recommendedCar: "Innova Crysta / Ertiga / Tempo Traveller",
    tag: "1-2 Days Trip"
  },
  {
    id: "pithapuram",
    title: "Pithapuram Sripada Srivallabha",
    subtitle: "Dattatreya Avatar & Puruhutika Shakti Peetham",
    distance: "~18 km (30 Mins)",
    duration: "Half Day / 1 Day",
    description: "Visit Sripada Srivallabha Mahasamsthanam (first avatar of Lord Dattatreya in Kali Yuga), Kukkuteswara Swamy temple, and sacred Pada Gaya Sarovaram.",
    itinerary: ["Quick pickup from Kakinada", "Sripada Srivallabha Mahasamsthanam Darshan", "Pada Gaya holy bath & Kukkuteswara Temple", "Safe return to Kakinada"],
    recommendedCar: "Dzire / Etios / Carens",
    tag: "Half Day / 1 Day"
  },
  {
    id: "konaseema-temples",
    title: "Ainavilli, Ryali & Vadapalli Tour",
    subtitle: "Ainavilli, Ryali, Vadapalli & Ravulapalem",
    distance: "~120 km Circuit",
    duration: "1 Day Tour",
    description: "Divine Konaseema circuit: Siddhi Vinayaka at Ainavilli, rare Jaganmohini Kesava Swamy at Ryali, and Vadapalli Sri Venkateswara Swamy amidst lush coconut groves.",
    itinerary: ["Ainavilli Vigneswara Temple", "Mukteswaram ferry & Godavari river views", "Ryali Jaganmohini Kesava Swamy", "Vadapalli Lord Venkateswara & return"],
    recommendedCar: "Ertiga / Innova Crysta / Dzire",
    tag: "1 Day Tour"
  },
  {
    id: "bhadrachalam",
    title: "Kakinada to Bhadrachalam Tour",
    subtitle: "Sri Sita Ramachandra Swamy Temple",
    distance: "~220 km (5 Hrs)",
    duration: "1-2 Days Trip",
    description: "Pilgrimage to Sri Sita Ramachandra Swamy Temple on the banks of Godavari, holy river bath, temple darshan, and visit to historic Parnasala.",
    itinerary: ["Early morning start from Kakinada", "Scenic drive via Rajahmundry & Rampachodavaram", "Bhadrachalam Temple Darshan & Parnasala", "Overnight stay or same day return"],
    recommendedCar: "Toyota Innova Crysta / Force Urbania",
    tag: "1-2 Days Trip"
  },
  {
    id: "srisailam-tirupati",
    title: "Kakinada to Srisailam & Tirupati",
    subtitle: "Lord Venkateswara & Mallikarjuna Jyotirlinga",
    distance: "~540+ km",
    duration: "3-4 Days Trip",
    description: "Grand pilgrimage tour to Lord Mallikarjuna Swamy Jyotirlinga at Srisailam and Lord Venkateswara Swamy Balaji at Tirumala Tirupati with Kanipakam darshan.",
    itinerary: ["Customized pickup and itinerary planning", "Dedicated chauffeur with extensive Ghat road experience", "Assistance with accommodation route stops", "Safe and punctual round trip drop"],
    recommendedCar: "Innova Crysta / Force Urbania / Tempo Traveller",
    tag: "3-4 Days Trip"
  }
];

export const holidayPackagesData = [
  {
    id: "lambasingi",
    title: "Lambasingi & Vanajangi Fog Tour",
    location: "Kashmir of Andhra Pradesh",
    duration: "2 Days / 1 Night",
    highlights: ["Vanajangi Cloud Sunrise Peak", "Lambasingi Sub-Zero Winter Fog", "Kothapalli Waterfalls", "Coffee & Pepper Plantations"],
    description: "Experience Kashmir of Andhra, cloud sunrise views at Vanajangi hills, Kothapalli waterfalls, apple & strawberry farms, and campfire nights with our hill-expert chauffeurs.",
    car: "Kia Carens / Innova Crysta / Ertiga"
  },
  {
    id: "maredumilli",
    title: "Maredumilli & Mothugudem",
    location: "Dense Eastern Ghats Eco-Tourism",
    duration: "1-2 Days",
    highlights: ["Jalatarangini & Amruthadhara Falls", "Authentic Bamboo Chicken", "Mothugudem Polluru Waterfalls", "Jungle Eco-Resorts"],
    description: "Dense eco-forests, waterfalls, famous bamboo chicken, crystal clean streams, and serene nature resorts. Perfect weekend escape for families from Kakinada.",
    car: "Innova Crysta / Force Urbania / Dzire"
  },
  {
    id: "araku-vizag",
    title: "Vizag City & Araku Valley",
    location: "Beaches & Coffee Hills",
    duration: "2-3 Days",
    highlights: ["Borra Caves & Chaparai Rapids", "Coffee Museum & Padmapuram Gardens", "RK Beach & Submarine Museum", "Kailasagiri Hilltop"],
    description: "RK Beach, Submarine Museum, Kailasagiri, Borra Caves, & Chaparai water cascade. The complete coastal and hill-station holiday package.",
    car: "Kia Carens / Toyota Innova Crysta"
  },
  {
    id: "konaseema-dindi",
    title: "Konaseema & Dindi Backwaters",
    location: "Godavari Backwaters & Mangroves",
    duration: "1-2 Days",
    highlights: ["Dindi Houseboats on Godavari", "Coringa Mangrove Sanctuary Walk", "Hope Island Boat Point", "Coconut Country Roadscapes"],
    description: "Coconut country tour, Dindi houseboats, Coringa Mangrove Sanctuary, and Hope Island boat point with fresh seafood delicacies.",
    car: "Swift Dzire / Toyota Etios / Ertiga"
  },
  {
    id: "papikondalu",
    title: "Papikondalu Godavari Cruise",
    location: "Gorge Cruise & Nature Huts",
    duration: "1-2 Days",
    highlights: ["Purushothapatanam Boat Point Transfer", "Breathtaking Godavari Hill Gorges", "Perantapalli Ashram", "Kolluru Night Bamboo Huts"],
    description: "Breathtaking Godavari gorge boat cruise, Kolluru night stay huts & Perantapalli Ashram with express cab and boat point transfer.",
    car: "Innova Crysta / Force Urbania / Tempo Traveller"
  },
  {
    id: "hyderabad-ramoji",
    title: "Hyderabad & Ramoji Film City",
    location: "Heritage & Entertainment Capital",
    duration: "3-4 Days",
    highlights: ["Full day Ramoji Film City Tour", "Charminar & Laad Bazaar", "Golconda Fort Sound & Light", "Salar Jung Museum & Birla Mandir"],
    description: "Full day Ramoji Film City tour, Charminar, Golconda Fort, Salar Jung Museum & shopping with dedicated round trip outstation SUV cab.",
    car: "Toyota Innova Crysta / Kia Carens / Urbania"
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
