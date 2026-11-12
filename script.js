/**
 * ===================================================================
 * MY CITY SERVICE — CORE APPLICATION JAVASCRIPT
 * Technology: Pure Vanilla ES6+ JavaScript (Zero External Frameworks)
 * Architecture: Hash Router, Component Renderers, LocalStorage State
 * ===================================================================
 */

'use strict';

/* ===================================================================
   1. CENTRALIZED DATA STRUCTURES (CATEGORIES, SERVICES, COUPONS)
   =================================================================== */

// All 21 Comprehensive Service Categories
const CATEGORIES_DATA = [
  {
    id: 'salon',
    name: 'Salon and Beauty',
    shortName: 'Salon',
    group: 'personal',
    count: '24 Services',
    icon: 'fa-wand-magic-sparkles',
    coverImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80',
    rating: 4.86,
    reviewCount: 1420,
    subcategories: [
      { id: 'packages', name: 'My Packages', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=200&q=80' },
      { id: 'threading', name: 'Threading', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=200&q=80' },
      { id: 'hair-color', name: 'Hair Coloring', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=200&q=80' },
      { id: 'haircut', name: 'Haircut & Styling', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=200&q=80' },
      { id: 'pedicure', name: 'Pedicure & Manicure', image: 'https://images.unsplash.com/photo-1519014816548-bf785179c244?auto=format&fit=crop&w=200&q=80' },
      { id: 'facial', name: 'Facial & Cleanups', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=200&q=80' },
      { id: 'hair-spa', name: 'Hair Spa', image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=200&q=80' },
      { id: 'bridal', name: 'Bridal Makeup', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'cooking',
    name: 'Cooking & Chef Services',
    shortName: 'Cooking',
    group: 'personal',
    count: '12 Chefs',
    icon: 'fa-utensils',
    coverImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=300&q=80',
    rating: 4.78,
    reviewCount: 680,
    subcategories: [
      { id: 'daily-cook', name: 'Daily Home Cook', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=200&q=80' },
      { id: 'party-chef', name: 'Party Chef', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80' },
      { id: 'diet-meals', name: 'Healthy Diet Cook', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'construction',
    name: 'Construction & Masonry',
    shortName: 'Construction',
    group: 'home',
    count: '16 Services',
    icon: 'fa-trowel-bricks',
    coverImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=300&q=80',
    rating: 4.82,
    reviewCount: 430,
    subcategories: [
      { id: 'brickwork', name: 'Masonry & Plaster', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=200&q=80' },
      { id: 'tile-work', name: 'Tile & Flooring', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=200&q=80' },
      { id: 'waterproofing', name: 'Roof Waterproofing', image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'cleaning',
    name: 'Home Deep Cleaning',
    shortName: 'Cleaning',
    group: 'home',
    count: '18 Services',
    icon: 'fa-broom',
    coverImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=300&q=80',
    rating: 4.91,
    reviewCount: 1850,
    subcategories: [
      { id: 'full-home', name: 'Full Home Deep Clean', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=200&q=80' },
      { id: 'kitchen', name: 'Kitchen Degreasing', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=200&q=80' },
      { id: 'bathroom', name: 'Bathroom Descaling', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=200&q=80' },
      { id: 'sofa-carpet', name: 'Sofa & Carpet Wash', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'painting',
    name: 'House Painting & Polish',
    shortName: 'Painting',
    group: 'home',
    count: '14 Services',
    icon: 'fa-paint-roller',
    coverImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=300&q=80',
    rating: 4.84,
    reviewCount: 520,
    subcategories: [
      { id: 'interior-paint', name: 'Interior Painting', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=200&q=80' },
      { id: 'exterior-paint', name: 'Exterior Waterproofing', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=200&q=80' },
      { id: 'wood-polish', name: 'Wood & PU Polish', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'electrician',
    name: 'Electrician & Wiring',
    shortName: 'Electrician',
    group: 'home',
    count: '22 Services',
    icon: 'fa-bolt',
    coverImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80',
    rating: 4.89,
    reviewCount: 2150,
    subcategories: [
      { id: 'switch-socket', name: 'Switches & Sockets', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=200&q=80' },
      { id: 'fan-install', name: 'Fans & Lights', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=200&q=80' },
      { id: 'inverter-wiring', name: 'Inverter & MCB', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=200&q=80' },
      { id: 'short-circuit', name: 'Fault Finding', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'plumbing',
    name: 'Plumbing & Water Leakage',
    shortName: 'Plumbing',
    group: 'home',
    count: '20 Services',
    icon: 'fa-faucet-drip',
    coverImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=300&q=80',
    rating: 4.82,
    reviewCount: 1640,
    subcategories: [
      { id: 'taps-mixers', name: 'Taps & Mixers', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=200&q=80' },
      { id: 'drain-blockage', name: 'Blockage Clearing', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=200&q=80' },
      { id: 'tank-motor', name: 'Motors & Pumps', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'carpenter',
    name: 'Carpentry & Furniture Repair',
    shortName: 'Carpenter',
    group: 'home',
    count: '15 Services',
    icon: 'fa-hammer',
    coverImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=300&q=80',
    rating: 4.80,
    reviewCount: 910,
    subcategories: [
      { id: 'door-lock', name: 'Locks & Hinges', image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=200&q=80' },
      { id: 'furniture-assembly', name: 'Furniture Assembly', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=200&q=80' },
      { id: 'modular-kitchen', name: 'Cabinet Repairs', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'driver',
    name: 'Professional Chauffeur & Driver',
    shortName: 'Driver',
    group: 'personal',
    count: '10 Options',
    icon: 'fa-car-side',
    coverImage: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=300&q=80',
    rating: 4.79,
    reviewCount: 760,
    subcategories: [
      { id: 'hourly-driver', name: 'Hourly City Driver', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=200&q=80' },
      { id: 'outstation-driver', name: 'Outstation Trip Driver', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'telephone',
    name: 'Telephone & Intercom Repair',
    shortName: 'Telephone',
    group: 'home',
    count: '8 Services',
    icon: 'fa-phone-volume',
    coverImage: 'https://images.unsplash.com/photo-1520923642038-b4259aceafd7?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=300&q=80',
    rating: 4.72,
    reviewCount: 310,
    subcategories: [
      { id: 'landline-fix', name: 'Landline Line Repair', image: 'https://images.unsplash.com/photo-1520923642038-b4259aceafd7?auto=format&fit=crop&w=200&q=80' },
      { id: 'epabx-install', name: 'Society Intercom / EPABX', image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'wifi',
    name: 'WiFi & Networking Solutions',
    shortName: 'WiFi Repair',
    group: 'home',
    count: '11 Services',
    icon: 'fa-wifi',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=80',
    rating: 4.85,
    reviewCount: 640,
    subcategories: [
      { id: 'router-setup', name: 'Mesh WiFi & Router Setup', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=200&q=80' },
      { id: 'lan-cabling', name: 'Ethernet & Structured Cabling', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'ac-repair',
    name: 'AC Repair & Servicing',
    shortName: 'AC Repair',
    group: 'appliance',
    count: '14 Services',
    icon: 'fa-snowflake',
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=300&q=80',
    rating: 4.92,
    reviewCount: 1980,
    subcategories: [
      { id: 'ac-foam-jet', name: 'Foam Jet Deep Service', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=200&q=80' },
      { id: 'ac-gas-charge', name: 'Gas Refilling & Leak Fix', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=200&q=80' },
      { id: 'ac-install', name: 'AC Installation / Uninstallation', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'refrigerator',
    name: 'Refrigerator Repair',
    shortName: 'Fridge Repair',
    group: 'appliance',
    count: '10 Services',
    icon: 'fa-cube',
    coverImage: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=300&q=80',
    rating: 4.81,
    reviewCount: 820,
    subcategories: [
      { id: 'fridge-cooling', name: 'Not Cooling / Overcooling', image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=200&q=80' },
      { id: 'fridge-gas', name: 'Compressor & Gas Fill', image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'washing-machine',
    name: 'Washing Machine Repair',
    shortName: 'Washing Machine',
    group: 'appliance',
    count: '12 Services',
    icon: 'fa-soap',
    coverImage: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=300&q=80',
    rating: 4.84,
    reviewCount: 940,
    subcategories: [
      { id: 'wm-motor', name: 'Drum & Spin Issue', image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=200&q=80' },
      { id: 'wm-drain', name: 'Drainage / Water Overflow', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'ro-water',
    name: 'RO & Water Purifier Service',
    shortName: 'RO Purifier',
    group: 'appliance',
    count: '9 Services',
    icon: 'fa-glass-water-droplet',
    coverImage: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=300&q=80',
    rating: 4.88,
    reviewCount: 1100,
    subcategories: [
      { id: 'ro-filter-change', name: 'Filter & Membrane Replacement', image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=200&q=80' },
      { id: 'ro-tds-service', name: 'Full Periodic Service', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'computer-laptop',
    name: 'Computer & Laptop Repair',
    shortName: 'Laptop Repair',
    group: 'appliance',
    count: '14 Services',
    icon: 'fa-laptop-code',
    coverImage: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=300&q=80',
    rating: 4.80,
    reviewCount: 710,
    subcategories: [
      { id: 'os-format', name: 'Windows OS & Software', image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=200&q=80' },
      { id: 'ssd-ram-upgrade', name: 'SSD / RAM Speed Boost', image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'pest-control',
    name: 'Pest & Termite Control',
    shortName: 'Pest Control',
    group: 'home',
    count: '8 Services',
    icon: 'fa-shield-virus',
    coverImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=300&q=80',
    rating: 4.87,
    reviewCount: 540,
    subcategories: [
      { id: 'cockroach-herbal', name: 'Odorless Cockroach Gel', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=200&q=80' },
      { id: 'termite-drill', name: 'Anti-Termite Treatment', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'packers-movers',
    name: 'Packers & Movers',
    shortName: 'Packers Movers',
    group: 'moving',
    count: '6 Plans',
    icon: 'fa-truck-ramp-box',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=300&q=80',
    rating: 4.86,
    reviewCount: 420,
    subcategories: [
      { id: 'local-shifting', name: 'Intra-City House Move', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=80' },
      { id: 'inter-city', name: 'Inter-City Relocation', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'gardening',
    name: 'Gardening & Landscape Care',
    shortName: 'Gardening',
    group: 'home',
    count: '7 Services',
    icon: 'fa-seedling',
    coverImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=300&q=80',
    rating: 4.75,
    reviewCount: 290,
    subcategories: [
      { id: 'lawn-mowing', name: 'Lawn Mowing & Pruning', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=200&q=80' },
      { id: 'potting-soil', name: 'Repotting & Fertilizer', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'cctv',
    name: 'CCTV Camera Installation',
    shortName: 'CCTV Setup',
    group: 'moving',
    count: '8 Services',
    icon: 'fa-video',
    coverImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=300&q=80',
    rating: 4.88,
    reviewCount: 480,
    subcategories: [
      { id: 'cctv-setup', name: 'Wireless IP Camera Setup', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=200&q=80' },
      { id: 'dvr-cabling', name: '4/8 Channel DVR Wiring', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    id: 'appliance',
    name: 'General Appliance Repair',
    shortName: 'Appliance Repair',
    group: 'appliance',
    count: '16 Services',
    icon: 'fa-screwdriver-wrench',
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80',
    rating: 4.82,
    reviewCount: 890,
    subcategories: [
      { id: 'microwave-fix', name: 'Microwave & Oven Repair', image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=200&q=80' },
      { id: 'geyser-service', name: 'Water Geyser Maintenance', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=200&q=80' }
    ]
  }
];

// Rich Services Catalog with High Quality Unsplash Images & Verified Specs
const SERVICES_DATA = [
  // --- SALON SERVICES (Detailed per Requirement 4) ---
  {
    id: 'svc-salon-glow-facial',
    categoryId: 'salon',
    subcategoryId: 'facial',
    name: 'Diamond Radiant Glow Facial',
    price: 899,
    originalPrice: 1499,
    duration: '60 mins',
    rating: 4.88,
    reviewsCount: 382,
    popular: true,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    description: 'Luxurious 6-step deep skin rejuvenation facial using single-dose sealed hygienic kits, galvanic steam, and relaxing shoulder massage for instant glow.',
    included: [
      'Deep pore cleansing & gentle exfoliating scrub',
      'Galvanic ozone steam & blackhead extraction',
      'Antioxidant botanical massage cream (15 mins)',
      'Diamond peel-off whitening mask',
      'Relaxing neck & shoulder pressure-point therapy'
    ],
    addons: [
      { id: 'gold-collagen-eye-pad', name: 'Gold Collagen Under-Eye Mask', price: 149, selected: false },
      { id: 'detan-pack', name: 'Express Sara Herbal De-Tan Pack', price: 249, selected: false }
    ]
  },
  {
    id: 'svc-salon-deluxe-mani-pedi',
    categoryId: 'salon',
    subcategoryId: 'pedicure',
    name: 'Deluxe Rose & Mint Pedicure & Manicure',
    price: 749,
    originalPrice: 1199,
    duration: '75 mins',
    rating: 4.84,
    reviewsCount: 290,
    popular: true,
    image: 'https://images.unsplash.com/photo-1519014816548-bf785179c244?auto=format&fit=crop&w=800&q=80',
    description: 'Therapeutic foot & hand spa with organic rose water soak, dead skin callus filing, cuticle treatment, and gentle reflexology massage.',
    included: [
      'Warm aromatic rose petal bubble soak',
      'Dead skin removal & electronic callus buffing',
      'Cuticle push & nail shaping/buffing',
      'Hydrating walnut & aloe vera scrub',
      'Choice of premium long-stay gel polish'
    ],
    addons: [
      { id: 'paraffin-wax', name: 'Warm Paraffin Wax Treatment', price: 199, selected: false }
    ]
  },
  {
    id: 'svc-salon-hair-spa',
    categoryId: 'salon',
    subcategoryId: 'hair-spa',
    name: 'L’Oréal Moroccan Argan Hair Spa',
    price: 999,
    originalPrice: 1599,
    duration: '50 mins',
    rating: 4.90,
    reviewsCount: 412,
    popular: false,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    description: 'Intense moisture repair treatment for damaged, frizzy, and chemically treated hair. Includes scalp steam and serum infusion.',
    included: [
      'Deep nourishing hair wash with sulfate-free shampoo',
      'Micro-steaming with Argan oil mask application',
      'Invigorating 15-minute scalp acupressure massage',
      'Rinse & professional blowout finish'
    ],
    addons: [
      { id: 'anti-dandruff-ampoule', name: 'Anti-Dandruff Serum Booster', price: 179, selected: false }
    ]
  },
  {
    id: 'svc-salon-threading-combo',
    categoryId: 'salon',
    subcategoryId: 'threading',
    name: 'Eyebrow Shaping + Upper Lip + Forehead',
    price: 149,
    originalPrice: 250,
    duration: '20 mins',
    rating: 4.79,
    reviewsCount: 620,
    popular: false,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    description: 'Precision threading using antimicrobial organic cotton thread followed by soothing aloe vera gel application.',
    included: [
      'Eyebrows shaping to your desired arch',
      'Upper lip threading',
      'Forehead line cleanup',
      'Calming ice roller or pure aloe vera massage'
    ],
    addons: []
  },
  {
    id: 'svc-salon-bridal-makeup',
    categoryId: 'salon',
    subcategoryId: 'bridal',
    name: 'HD Bridal Glow & Saree Draping',
    price: 4999,
    originalPrice: 7999,
    duration: '180 mins',
    rating: 4.96,
    reviewsCount: 165,
    popular: true,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    description: 'Complete high-definition bridal styling by senior celebrity-trained artists with MAC & Huda Beauty cosmetics.',
    included: [
      'Waterproof HD base with 16-hour sweat resistance',
      'Smokey/Glitter eye makeup with 3D mink lashes',
      'Traditional or contemporary bridal hair updos',
      'Intricate saree or lehenga draping with pin support',
      'Free touch-up kit provided'
    ],
    addons: [
      { id: 'airbrush-finish', name: 'Airbrush Foundation Upgrade', price: 999, selected: false }
    ]
  },
  {
    id: 'svc-salon-haircut-styling',
    categoryId: 'salon',
    subcategoryId: 'haircut',
    name: 'Layered Feather Haircut & Blowdry',
    price: 449,
    originalPrice: 799,
    duration: '40 mins',
    rating: 4.82,
    reviewsCount: 310,
    popular: false,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    description: 'Customized haircut suited to your face structure, styled with heat-protectant serum and volumetric blowout.',
    included: [
      'Face shape consultation & recommendation',
      'Precision sectioning and cut',
      'Blowdry with rounded barrel brush',
      'Moroccanoil shine mist application'
    ],
    addons: []
  },

  // --- CLEANING SERVICES ---
  {
    id: 'svc-cleaning-full-home',
    categoryId: 'cleaning',
    subcategoryId: 'full-home',
    name: 'Complete 2BHK / 3BHK Deep Home Cleaning',
    price: 2499,
    originalPrice: 3999,
    duration: '4-5 hours',
    rating: 4.93,
    reviewsCount: 540,
    popular: true,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    description: 'Hospital-grade sanitization and deep scrubbing of all rooms, bathrooms, kitchen chimneys, windows, balconies, and floors.',
    included: [
      'Heavy industrial vacuuming of mattresses, carpets & sofas',
      'Tile scrubbing machine for stained floors',
      'Full kitchen degreasing (slabs, cabinets inside-out & tiles)',
      'Bathrooms scale removal, disinfection and chrome polishing',
      'Ceiling fan, switchboard & window track dusting'
    ],
    addons: [
      { id: 'balcony-pressure-wash', name: 'Balcony High-Pressure Wash', price: 299, selected: false },
      { id: 'refrigerator-deep-clean', name: 'Interior Refrigerator Scrubbing', price: 349, selected: false }
    ]
  },
  {
    id: 'svc-cleaning-sofa-shampoo',
    categoryId: 'cleaning',
    subcategoryId: 'sofa-carpet',
    name: 'Fabric Sofa Foam Jet Shampoo (5 Seater)',
    price: 799,
    originalPrice: 1299,
    duration: '90 mins',
    rating: 4.86,
    reviewsCount: 420,
    popular: true,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    description: 'Deep stain removal using high-suction German extraction machines and pH-balanced antibacterial foam.',
    included: [
      'Dry suction vacuuming to pull deep dust & mites',
      'Spot treatment on stubborn grease/spill stains',
      'Foam injection and agitation with soft bristle brush',
      'Moisture extraction leaving sofa 90% dry within 2 hours'
    ],
    addons: []
  },

  // --- ELECTRICIAN SERVICES ---
  {
    id: 'svc-electrician-switch-repair',
    categoryId: 'electrician',
    subcategoryId: 'switch-socket',
    name: 'Switch & Power Socket Replacement (Pack of 3)',
    price: 199,
    originalPrice: 350,
    duration: '30 mins',
    rating: 4.88,
    reviewsCount: 890,
    popular: true,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    description: 'Replacement or repair of sparking modular switches, 6A/16A sockets, or loose electrical gang boxes.',
    included: [
      'Safety disconnection & multimeter load check',
      'Fitting of up to 3 switches/sockets',
      'Proper earthing line verification',
      'Cleanup of chipped plaster debris'
    ],
    addons: [
      { id: 'heavy-geyser-mcb', name: 'Heavy 25A Geyser MCB Switch', price: 149, selected: false }
    ]
  },
  {
    id: 'svc-electrician-ceiling-fan',
    categoryId: 'electrician',
    subcategoryId: 'fan-install',
    name: 'Ceiling Fan Installation & Balancing',
    price: 149,
    originalPrice: 250,
    duration: '35 mins',
    rating: 4.85,
    reviewsCount: 512,
    popular: false,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    description: 'Assembly of blades, downrod, safety pin installation, capacitor test, and wobble-free balancing.',
    included: [
      'Blade angle balancing to eliminate wobbling',
      'Anchor fastener & hook check',
      'Speed regulator compatibility testing'
    ],
    addons: []
  },

  // --- PLUMBING SERVICES ---
  {
    id: 'svc-plumbing-tap-repair',
    categoryId: 'plumbing',
    subcategoryId: 'taps-mixers',
    name: 'Tap / Mixer Repair & Cartridge Change',
    price: 189,
    originalPrice: 300,
    duration: '30 mins',
    rating: 4.82,
    reviewsCount: 670,
    popular: true,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    description: 'Fix dripping faucets, replace brass spindles/ceramic discs, or replace old angle valves and flexible connection pipes.',
    included: [
      'Dripping spindle change or Teflon sealing',
      'Water pressure regulation check',
      'Zero-leakage guarantee with 7 days warranty'
    ],
    addons: []
  },
  {
    id: 'svc-plumbing-blockage-clear',
    categoryId: 'plumbing',
    subcategoryId: 'drain-blockage',
    name: 'Kitchen Sink / Drain Choke Removal',
    price: 299,
    originalPrice: 499,
    duration: '45 mins',
    rating: 4.84,
    reviewsCount: 410,
    popular: false,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy blockage clearing in kitchen sink pipe, floor trap, or bathroom gully using mechanical snakes and non-acidic safe dissolvers.',
    included: [
      'Snake wire rotary clearing',
      'P-trap dismantlement and sludge flush',
      'Safe disinfectant deodorizer flush'
    ],
    addons: []
  },

  // --- AC & APPLIANCE REPAIR ---
  {
    id: 'svc-ac-foam-jet-service',
    categoryId: 'ac-repair',
    subcategoryId: 'ac-foam-jet',
    name: 'Split AC Power Jet Chemical Servicing',
    price: 549,
    originalPrice: 999,
    duration: '60 mins',
    rating: 4.94,
    reviewsCount: 1280,
    popular: true,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive 2X cooling enhancement using high-pressure foam jet machine and special AC jacket to protect your room walls.',
    included: [
      'High-pressure water jet cleaning of cooling coils & blower',
      'Anti-fungal foam spray on condenser & evaporator',
      'Drain pipe flush to prevent indoor water dripping',
      'Amperage check & gas pressure verification'
    ],
    addons: [
      { id: 'ac-gas-topup', name: 'R32/R410 Refrigerant Top-Up', price: 499, selected: false }
    ]
  },
  {
    id: 'svc-ro-water-full-service',
    categoryId: 'ro-water',
    subcategoryId: 'ro-tds-service',
    name: 'Complete RO Water Purifier Servicing',
    price: 399,
    originalPrice: 650,
    duration: '45 mins',
    rating: 4.87,
    reviewsCount: 460,
    popular: false,
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80',
    description: 'Sediment filter flushing, carbon filter inspection, digital TDS calibration, and booster pump leak testing.',
    included: [
      'Pre-filter candle backwash or replacement labor',
      'Digital TDS test before & after service',
      'UV lamp & solenoid valve health diagnostic'
    ],
    addons: []
  },

  // --- CARPENTRY SERVICES ---
  {
    id: 'svc-carpenter-lock-repair',
    categoryId: 'carpenter',
    subcategoryId: 'door-lock',
    name: 'Main Door Godrej Lock Installation',
    price: 349,
    originalPrice: 550,
    duration: '45 mins',
    rating: 4.83,
    reviewsCount: 380,
    popular: false,
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=800&q=80',
    description: 'Chiseling, wood alignment, mortise lock fitting, or key cylinder replacement with zero door scratches.',
    included: [
      'Precision wood groove routing',
      'Deadbolt alignment with door frame',
      'Smooth latch action tuning'
    ],
    addons: []
  },

  // --- COOKING & CHEF ---
  {
    id: 'svc-cooking-party-chef',
    categoryId: 'cooking',
    subcategoryId: 'party-chef',
    name: 'Party / Family Gathering Chef (Up to 15 Guests)',
    price: 1499,
    originalPrice: 2200,
    duration: '3-4 hours',
    rating: 4.89,
    reviewsCount: 240,
    popular: true,
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
    description: 'Professional chef prepares delicious North Indian, South Indian, or Continental dishes in your own kitchen with hygiene assurance.',
    included: [
      'Preparation of 2 Starters + 2 Mains + 1 Dal + Rice + Breads',
      'Custom spice preference & allergy adjustments',
      'Post-cooking kitchen stove & counter top wiping'
    ],
    addons: []
  },

  // --- DRIVER ---
  {
    id: 'svc-driver-city-hourly',
    categoryId: 'driver',
    subcategoryId: 'hourly-driver',
    name: 'Chauffeur for Personal Car (4 Hours Package)',
    price: 499,
    originalPrice: 750,
    duration: '4 hours',
    rating: 4.81,
    reviewsCount: 320,
    popular: false,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
    description: 'Uniformed, background-verified driver for automatic or manual cars. Ideal for shopping, hospital visits, or city errands.',
    included: [
      '4 hours of dedicated driving within city limits',
      'Route navigation via live GPS traffic avoiding jams',
      'Clean driving record & polite demeanor'
    ],
    addons: []
  }
];

// Active Discount Coupons
const COUPONS_DATA = [
  {
    code: 'TRYNEW',
    title: 'Flat ₹150 OFF',
    discountType: 'flat',
    discountValue: 150,
    minOrder: 499,
    desc: 'Valid on your first booking above ₹499',
    expires: 'Expires in 6 days'
  },
  {
    code: 'CITY10',
    title: '10% Instant Savings',
    discountType: 'percentage',
    discountValue: 10,
    maxDiscount: 200,
    minOrder: 399,
    desc: 'Applicable across all electrical & plumbing services',
    expires: 'Valid till month end'
  },
  {
    code: 'CLEAN50',
    title: '50% OFF Cleaning',
    discountType: 'percentage',
    discountValue: 50,
    maxDiscount: 500,
    minOrder: 1200,
    desc: 'Biggest discount on full home deep cleaning packages',
    expires: 'Limited time festive offer'
  },
  {
    code: 'FESTIVE20',
    title: '20% OFF Salon & Care',
    discountType: 'percentage',
    discountValue: 20,
    maxDiscount: 350,
    minOrder: 699,
    desc: 'Enjoy relaxing glow facials and spa at home',
    expires: 'Valid this weekend'
  }
];

// Demo Notifications
const DEMO_NOTIFICATIONS = [
  {
    id: 'notif-1',
    title: '50% Off On Home Cleaning!',
    message: 'Use code CLEAN50 today and get your home sparkling before the weekend.',
    time: '2 hours ago',
    read: false,
    iconClass: 'blue',
    icon: 'fa-tag'
  },
  {
    id: 'notif-2',
    title: 'Doorstep Partner Assigned',
    message: 'Technician Rajesh S. has accepted your electrical booking. ETA 20 mins.',
    time: 'Yesterday',
    read: false,
    iconClass: 'green',
    icon: 'fa-user-check'
  },
  {
    id: 'notif-3',
    title: 'Welcome to My City Service Chhindwara!',
    message: 'Enjoy ₹150 OFF on your first booking with coupon code TRYNEW.',
    time: '3 days ago',
    read: true,
    iconClass: 'amber',
    icon: 'fa-sparkles'
  }
];

// Featured Cities & Localities
const CITIES_DATA = [
  { id: 'chhindwara', name: 'Chhindwara', state: 'Madhya Pradesh', active: true },
  { id: 'bhopal', name: 'Bhopal', state: 'Madhya Pradesh', active: false },
  { id: 'indore', name: 'Indore', state: 'Madhya Pradesh', active: false },
  { id: 'jabalpur', name: 'Jabalpur', state: 'Madhya Pradesh', active: false },
  { id: 'nagpur', name: 'Nagpur', state: 'Maharashtra', active: false },
  { id: 'pune', name: 'Pune', state: 'Maharashtra', active: false }
];

const LOCALITIES_DATA = {
  'chhindwara': ['Gulabra', 'Parasia Road', 'Khajri', 'Chandangaon', 'VIP Road', 'Mohan Nagar', 'Lalbagh', 'Chhoti Bazar', 'Sonpur'],
  'bhopal': ['MP Nagar', 'Arera Colony', 'Kolar Road', 'Bittan Market', 'Hoshangabad Road'],
  'indore': ['Vijay Nagar', 'Palasia', 'Rajwada', 'Bhanwar Kuan', 'Bicholi Mardana'],
  'jabalpur': ['Civil Lines', 'Wright Town', 'Napier Town', 'Gorakhpur'],
  'nagpur': ['Dharampeth', 'Sitabuldi', 'Sadar', 'Wardha Road', 'Manish Nagar'],
  'pune': ['Kothrud', 'Hinjewadi', 'Viman Nagar', 'Wakad', 'Baner']
};

/* ===================================================================
   2. LOCAL STORAGE STATE MANAGEMENT
   =================================================================== */
class AppState {
  constructor() {
    this.cartKey = 'mcs_cart';
    this.bookingsKey = 'mcs_bookings';
    this.profileKey = 'mcs_profile';
    this.wishlistKey = 'mcs_wishlist';
    this.locationKey = 'mcs_location';
    this.appliedCouponKey = 'mcs_coupon';

    this.initDefaults();
  }

  initDefaults() {
    // Default Profile
    if (!localStorage.getItem(this.profileKey)) {
      const defaultProfile = {
        name: 'Anjali Sharma',
        phone: '9826012345',
        email: 'anjali.sharma@example.com',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        addresses: [
          { id: 'addr-1', tag: 'Home', full: 'House 42, Gulabra Chowk, Near Sai Temple', city: 'Chhindwara, MP', pincode: '480001', isDefault: true },
          { id: 'addr-2', tag: 'Office', full: 'Cabin 302, Business Arcade, Parasia Road', city: 'Chhindwara, MP', pincode: '480001', isDefault: false }
        ]
      };
      localStorage.setItem(this.profileKey, JSON.stringify(defaultProfile));
    }

    // Default Bookings (Seed with 1 realistic upcoming booking so the user can test cancellation & receipt immediately)
    if (!localStorage.getItem(this.bookingsKey)) {
      const defaultBookings = [
        {
          id: 'MCS-2026-8192',
          serviceId: 'svc-salon-glow-facial',
          serviceName: 'Diamond Radiant Glow Facial',
          categoryName: 'Salon and Beauty',
          image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80',
          price: 899,
          totalPaid: 798, // with discount
          date: 'Tomorrow',
          timeSlot: '11:30 AM',
          status: 'upcoming',
          customerName: 'Anjali Sharma',
          phone: '9826012345',
          address: 'House 42, Gulabra Chowk, Near Sai Temple, Chhindwara, MP',
          paymentMethod: 'Pay After Service (Cash / UPI)',
          createdAt: new Date().toISOString()
        }
      ];
      localStorage.setItem(this.bookingsKey, JSON.stringify(defaultBookings));
    }

    // Default Location
    if (!localStorage.getItem(this.locationKey)) {
      localStorage.setItem(this.locationKey, JSON.stringify({ city: 'Chhindwara', state: 'MP', locality: 'Gulabra' }));
    }

    // Default Wishlist
    if (!localStorage.getItem(this.wishlistKey)) {
      localStorage.setItem(this.wishlistKey, JSON.stringify(['svc-cleaning-full-home']));
    }

    // Default Cart
    if (!localStorage.getItem(this.cartKey)) {
      localStorage.setItem(this.cartKey, JSON.stringify([]));
    }
  }

  // Getters & Setters
  getCart() {
    try { return JSON.parse(localStorage.getItem(this.cartKey)) || []; } catch(e) { return []; }
  }
  setCart(cart) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
    updateCartBadges();
  }

  getBookings() {
    try { return JSON.parse(localStorage.getItem(this.bookingsKey)) || []; } catch(e) { return []; }
  }
  setBookings(bookings) {
    localStorage.setItem(this.bookingsKey, JSON.stringify(bookings));
    updateBookingBadges();
  }

  getProfile() {
    try { return JSON.parse(localStorage.getItem(this.profileKey)); } catch(e) { return {}; }
  }
  setProfile(profile) {
    localStorage.setItem(this.profileKey, JSON.stringify(profile));
    syncProfileUI();
  }

  getWishlist() {
    try { return JSON.parse(localStorage.getItem(this.wishlistKey)) || []; } catch(e) { return []; }
  }
  setWishlist(wishlist) {
    localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
    updateWishlistBadges();
  }

  getLocation() {
    try { return JSON.parse(localStorage.getItem(this.locationKey)); } catch(e) { return { city: 'Chhindwara', state: 'MP' }; }
  }
  setLocation(loc) {
    localStorage.setItem(this.locationKey, JSON.stringify(loc));
    syncLocationUI();
  }

  getAppliedCoupon() {
    try { return JSON.parse(localStorage.getItem(this.appliedCouponKey)); } catch(e) { return null; }
  }
  setAppliedCoupon(coupon) {
    if (coupon) {
      localStorage.setItem(this.appliedCouponKey, JSON.stringify(coupon));
    } else {
      localStorage.removeItem(this.appliedCouponKey);
    }
  }
}

const state = new AppState();

/* ===================================================================
   3. CLIENT-SIDE SPA HASH ROUTER
   =================================================================== */
class Router {
  constructor() {
    this.routes = {
      'home': renderHomeView,
      'categories': renderCategoriesView,
      'category': renderCategoryDetailView,
      'service': renderServiceDetailView,
      'search': renderSearchView,
      'cart': renderCartView,
      'bookings': renderBookingsView,
      'profile': renderProfileView,
      'offers': renderOffersView
    };

    window.addEventListener('hashchange', () => this.handleHashChange());
    window.addEventListener('DOMContentLoaded', () => this.handleHashChange());
  }

  navigate(routeName, params = {}) {
    let hash = `#${routeName}`;
    const query = Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
    if (query) hash += `?${query}`;
    window.location.hash = hash;
  }

  back() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      this.navigate('home');
    }
  }

  handleHashChange() {
    const rawHash = window.location.hash.slice(1) || 'home';
    const [path, queryString] = rawHash.split('?');
    const params = {};
    if (queryString) {
      queryString.split('&').forEach(part => {
        const [k, v] = part.split('=');
        if (k) params[decodeURIComponent(k)] = decodeURIComponent(v || '');
      });
    }

    // Hide all views
    document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));

    // Update bottom nav & desktop nav highlights
    updateNavHighlights(path);

    // Close any open search suggestion dropdown
    hideSearchDropdown();

    // Scroll window smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Execute route handler
    const handler = this.routes[path];
    if (typeof handler === 'function') {
      handler(params);
    } else {
      // 404 fallback: redirect to home
      renderHomeView();
    }
  }
}

const router = new Router();

/* ===================================================================
   4. VIEW RENDERERS & CONTROLLERS
   =================================================================== */

// --- VIEW 1: HOME PAGE ---
function renderHomeView() {
  const viewEl = document.getElementById('view-home');
  viewEl.classList.add('active');

  // Render Top 12 Popular Categories on Home
  renderHomeCategoriesGrid();

  // Render Most Booked Services with Loading Skeleton
  renderMostBookedServices();

  // Render Coupons Slider
  renderHomeCoupons();

  // Init Hero Carousel logic
  initHeroCarousel();
}

function renderHomeCategoriesGrid() {
  const container = document.getElementById('homeCategoriesGrid');
  if (!container) return;

  // Take first 11 categories + 1 "More Categories" card
  const top11 = CATEGORIES_DATA.slice(0, 11);
  let html = top11.map(cat => `
    <div class="category-card-home" onclick="router.navigate('category', { id: '${cat.id}' })">
      <div class="cat-thumb-wrap">
        <img src="${cat.thumbImage}" alt="${cat.name}" loading="lazy" onerror="handleImageError(this, '${cat.name}')">
      </div>
      <span class="cat-home-label">${cat.shortName}</span>
    </div>
  `).join('');

  // 12th card: "More Categories"
  html += `
    <div class="category-card-home more-card" onclick="router.navigate('categories')">
      <div class="more-icon-box">
        <i class="fa-solid fa-grid-2-plus"></i>
      </div>
      <span class="cat-home-label">More (21+)</span>
    </div>
  `;

  container.innerHTML = html;
}

function renderMostBookedServices(filter = 'all') {
  const container = document.getElementById('mostBookedServicesGrid');
  if (!container) return;

  // Show Skeleton placeholder first for realistic progressive feel
  container.innerHTML = `
    <div class="skeleton-card">
      <div class="skeleton-media skeleton-shimmer"></div>
      <div class="skeleton-body">
        <div class="skeleton-line short skeleton-shimmer"></div>
        <div class="skeleton-line long skeleton-shimmer"></div>
        <div class="skeleton-line medium skeleton-shimmer"></div>
      </div>
    </div>
    <div class="skeleton-card">
      <div class="skeleton-media skeleton-shimmer"></div>
      <div class="skeleton-body">
        <div class="skeleton-line short skeleton-shimmer"></div>
        <div class="skeleton-line long skeleton-shimmer"></div>
        <div class="skeleton-line medium skeleton-shimmer"></div>
      </div>
    </div>
    <div class="skeleton-card">
      <div class="skeleton-media skeleton-shimmer"></div>
      <div class="skeleton-body">
        <div class="skeleton-line short skeleton-shimmer"></div>
        <div class="skeleton-line long skeleton-shimmer"></div>
        <div class="skeleton-line medium skeleton-shimmer"></div>
      </div>
    </div>
  `;

  // Filter items
  let items = SERVICES_DATA;
  if (filter !== 'all') {
    items = SERVICES_DATA.filter(s => s.categoryId === filter);
  }

  // Render cards after slight micro-timeout to render smoothly
  setTimeout(() => {
    if (items.length === 0) {
      container.innerHTML = `
        <div class="empty-state-card" style="grid-column: 1 / -1;">
          <div class="empty-icon-wrap"><i class="fa-solid fa-magnifying-glass"></i></div>
          <h3>No services found in this tab</h3>
          <p>Try selecting "All" to browse popular home services.</p>
        </div>
      `;
      return;
    }

    const wishlist = state.getWishlist();
    const cart = state.getCart();

    container.innerHTML = items.map(svc => {
      const isFav = wishlist.includes(svc.id);
      const inCart = cart.some(c => c.id === svc.id);
      const cat = CATEGORIES_DATA.find(c => c.id === svc.categoryId) || { name: 'Home Service' };

      return `
        <div class="service-card" data-service-id="${svc.id}">
          <div class="service-card-media">
            <img src="${svc.image}" alt="${svc.name}" loading="lazy" onerror="handleImageError(this, '${svc.name}')">
            <span class="card-badge-category">${cat.shortName || cat.name}</span>
            <button class="card-fav-btn ${isFav ? 'active' : ''}" onclick="toggleWishlist('${svc.id}', event)" aria-label="Favorite">
              <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
          </div>
          <div class="service-card-body">
            <div class="service-card-rating">
              <span class="rating-badge"><i class="fa-solid fa-star"></i> ${svc.rating}</span>
              <span class="review-count">(${svc.reviewsCount}+ reviews)</span>
              <span class="meta-divider">•</span>
              <span class="review-count"><i class="fa-regular fa-clock"></i> ${svc.duration}</span>
            </div>
            <h3 class="service-card-title" onclick="router.navigate('service', { id: '${svc.id}' })">${svc.name}</h3>
            <p class="service-card-desc">${svc.description}</p>
            <div class="service-card-footer">
              <div class="price-box">
                <span class="price-label">Starts at</span>
                <div>
                  <span class="price-current">₹${svc.price}</span>
                  ${svc.originalPrice ? `<span class="price-original">₹${svc.originalPrice}</span>` : ''}
                </div>
              </div>
              <div class="card-action-group">
                <button class="btn-card-cart ${inCart ? 'in-cart' : ''}" onclick="quickAddToCart('${svc.id}', event)" title="${inCart ? 'Item in Cart' : 'Add to Cart'}" aria-label="Add to cart">
                  <i class="fa-solid ${inCart ? 'fa-check' : 'fa-cart-plus'}"></i>
                </button>
                <button class="btn-card-book" onclick="openBookingModalForService('${svc.id}')">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }, 220);
}

function renderHomeCoupons() {
  const container = document.getElementById('couponsSlider');
  if (!container) return;

  container.innerHTML = COUPONS_DATA.map(c => `
    <div class="coupon-ticket-card">
      <div class="coupon-left">
        <div class="coupon-icon-box">
          <i class="fa-solid fa-ticket-simple"></i>
        </div>
        <div>
          <h4 class="coupon-title">${c.title}</h4>
          <p class="coupon-desc">${c.desc}</p>
          <span class="coupon-expiry"><i class="fa-regular fa-clock"></i> ${c.expires}</span>
        </div>
      </div>
      <div class="coupon-right">
        <span class="coupon-code-pill">${c.code}</span>
        <button class="btn-copy-code" onclick="copyCouponCode('${c.code}', event)"><i class="fa-regular fa-copy"></i> Copy</button>
      </div>
    </div>
  `).join('');
}

// Hero Carousel Auto-Play & Controls
let carouselInterval = null;
let currentSlideIndex = 0;

function initHeroCarousel() {
  const track = document.getElementById('carouselTrack');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');
  const indicators = document.querySelectorAll('#carouselIndicators .indicator');

  if (!track || slides.length === 0) return;

  const totalSlides = slides.length;

  function updateSlide(idx) {
    currentSlideIndex = (idx + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    indicators.forEach((ind, i) => ind.classList.toggle('active', i === currentSlideIndex));
  }

  // Next / Prev listeners
  if (prevBtn) prevBtn.onclick = () => updateSlide(currentSlideIndex - 1);
  if (nextBtn) nextBtn.onclick = () => updateSlide(currentSlideIndex + 1);

  indicators.forEach(ind => {
    ind.onclick = () => {
      const idx = parseInt(ind.getAttribute('data-slide'), 10);
      updateSlide(idx);
    };
  });

  // Auto-play timer
  clearInterval(carouselInterval);
  carouselInterval = setInterval(() => {
    updateSlide(currentSlideIndex + 1);
  }, 4200);

  // Pause on hover
  const carouselContainer = document.getElementById('promoCarousel');
  if (carouselContainer) {
    carouselContainer.onmouseenter = () => clearInterval(carouselInterval);
    carouselContainer.onmouseleave = () => {
      clearInterval(carouselInterval);
      carouselInterval = setInterval(() => updateSlide(currentSlideIndex + 1), 4200);
    };
  }
}

// --- VIEW 2: CATEGORIES PAGE ---
function renderCategoriesView() {
  const viewEl = document.getElementById('view-categories');
  viewEl.classList.add('active');

  const container = document.getElementById('allCategoriesGrid');
  const searchInput = document.getElementById('categoryFilterInput');
  const clearBtn = document.getElementById('clearCatSearchBtn');

  function render(filterText = '', group = 'all') {
    let list = CATEGORIES_DATA;
    if (group !== 'all') {
      list = list.filter(c => c.group === group);
    }
    if (filterText.trim()) {
      const q = filterText.toLowerCase();
      list = list.filter(c => c.name.toLowerCase().includes(q) || c.shortName.toLowerCase().includes(q));
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div class="empty-state-card" style="grid-column: 1 / -1;">
          <div class="empty-icon-wrap"><i class="fa-solid fa-magnifying-glass"></i></div>
          <h3>No matching categories found</h3>
          <p>Try searching for Salon, Electrician, Cleaning, or Plumbing.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(cat => `
      <div class="cat-card-full" onclick="router.navigate('category', { id: '${cat.id}' })">
        <div class="cat-img-box">
          <img src="${cat.thumbImage}" alt="${cat.name}" loading="lazy" onerror="handleImageError(this, '${cat.name}')">
        </div>
        <span class="cat-full-title">${cat.name}</span>
        <span class="cat-item-count">${cat.count}</span>
      </div>
    `).join('');
  }

  // Initial render
  render();

  // Search input listener
  if (searchInput) {
    searchInput.value = '';
    searchInput.oninput = (e) => {
      const val = e.target.value;
      clearBtn.classList.toggle('hidden', !val);
      const activeGroup = document.querySelector('.cat-type-pills .pill-btn.active')?.dataset.catGroup || 'all';
      render(val, activeGroup);
    };
  }

  if (clearBtn) {
    clearBtn.onclick = () => {
      searchInput.value = '';
      clearBtn.classList.add('hidden');
      const activeGroup = document.querySelector('.cat-type-pills .pill-btn.active')?.dataset.catGroup || 'all';
      render('', activeGroup);
    };
  }

  // Group filter pills
  document.querySelectorAll('.cat-type-pills .pill-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.cat-type-pills .pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const group = btn.dataset.catGroup;
      render(searchInput.value, group);
    };
  });
}

// --- VIEW 3: CATEGORY DETAILS & SUBCATEGORIES ---
function renderCategoryDetailView(params = {}) {
  const catId = params.id || 'salon';
  const category = CATEGORIES_DATA.find(c => c.id === catId) || CATEGORIES_DATA[0];

  const viewEl = document.getElementById('view-category-detail');
  viewEl.classList.add('active');

  // Hero Cover Image & Meta
  const banner = document.getElementById('categoryHeroBanner');
  banner.style.backgroundImage = `url('${category.coverImage}')`;
  document.getElementById('categoryTitle').textContent = `Our ${category.shortName} Services`;
  document.getElementById('categoryRating').textContent = category.rating;

  // Share & Fav buttons on hero
  const shareBtn = document.getElementById('categoryShareBtn');
  if (shareBtn) {
    shareBtn.onclick = () => shareContent(`Book top-rated ${category.name} in Chhindwara on My City Service!`);
  }

  // Render Subcategories Scroll Track
  const subcatTrack = document.getElementById('subcategoriesTrack');
  const subcats = category.subcategories || [];
  document.getElementById('subcatCountLabel').textContent = `${subcats.length} options`;

  let activeSubcatId = params.subcat || (subcats[0] ? subcats[0].id : 'all');

  subcatTrack.innerHTML = subcats.map((sc, idx) => {
    const isActive = sc.id === activeSubcatId || (!params.subcat && idx === 0);
    return `
      <div class="subcat-pill-card ${isActive ? 'active' : ''}" data-subcat-id="${sc.id}" onclick="selectSubcategory('${category.id}', '${sc.id}')">
        <img src="${sc.image}" alt="${sc.name}" class="subcat-pill-img" onerror="handleImageError(this, '${sc.name}')">
        <span class="subcat-pill-name">${sc.name}</span>
      </div>
    `;
  }).join('');

  // Render Services list for active subcategory
  renderCategoryServices(category.id, activeSubcatId);

  // Sort dropdown
  const sortSelect = document.getElementById('subcatSortSelect');
  if (sortSelect) {
    sortSelect.value = 'popular';
    sortSelect.onchange = () => {
      renderCategoryServices(category.id, activeSubcatId, sortSelect.value);
    };
  }
}

function selectSubcategory(catId, subcatId) {
  document.querySelectorAll('.subcat-pill-card').forEach(p => {
    p.classList.toggle('active', p.dataset.subcatId === subcatId);
  });
  const sortVal = document.getElementById('subcatSortSelect')?.value || 'popular';
  renderCategoryServices(catId, subcatId, sortVal);
}

function renderCategoryServices(catId, subcatId, sortBy = 'popular') {
  const container = document.getElementById('categoryServicesGrid');
  const cat = CATEGORIES_DATA.find(c => c.id === catId);
  const activeSubcat = cat?.subcategories?.find(s => s.id === subcatId);

  document.getElementById('activeSubcatTitle').textContent = activeSubcat ? activeSubcat.name : 'All Services';

  let items = SERVICES_DATA.filter(s => s.categoryId === catId);
  if (subcatId && subcatId !== 'all') {
    const filtered = items.filter(s => s.subcategoryId === subcatId);
    if (filtered.length > 0) items = filtered;
  }

  // Sort logic
  if (sortBy === 'price-low') items.sort((a, b) => a.price - b.price);
  else if (sortBy === 'price-high') items.sort((a, b) => b.price - a.price);
  else if (sortBy === 'rating') items.sort((a, b) => b.rating - a.rating);
  else items.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));

  const wishlist = state.getWishlist();
  const cart = state.getCart();

  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-state-card" style="grid-column: 1 / -1;">
        <div class="empty-icon-wrap"><i class="fa-solid fa-sparkles"></i></div>
        <h3>More services launching soon</h3>
        <p>Our verified technicians are curating new packages for this subcategory.</p>
        <button class="btn btn-primary btn-sm" onclick="selectSubcategory('${catId}', '${cat?.subcategories?.[0]?.id || 'all'}')">Browse Available Options</button>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(svc => {
    const isFav = wishlist.includes(svc.id);
    const inCart = cart.some(c => c.id === svc.id);

    return `
      <div class="service-card" data-service-id="${svc.id}">
        <div class="service-card-media">
          <img src="${svc.image}" alt="${svc.name}" loading="lazy" onerror="handleImageError(this, '${svc.name}')">
          <span class="card-badge-category">${activeSubcat?.name || cat?.shortName}</span>
          <button class="card-fav-btn ${isFav ? 'active' : ''}" onclick="toggleWishlist('${svc.id}', event)" aria-label="Favorite">
            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>
        <div class="service-card-body">
          <div class="service-card-rating">
            <span class="rating-badge"><i class="fa-solid fa-star"></i> ${svc.rating}</span>
            <span class="review-count">(${svc.reviewsCount}+ reviews)</span>
            <span class="meta-divider">•</span>
            <span class="review-count"><i class="fa-regular fa-clock"></i> ${svc.duration}</span>
          </div>
          <h3 class="service-card-title" onclick="router.navigate('service', { id: '${svc.id}' })">${svc.name}</h3>
          <p class="service-card-desc">${svc.description}</p>
          <div class="service-card-footer">
            <div class="price-box">
              <span class="price-label">Transparent Price</span>
              <div>
                <span class="price-current">₹${svc.price}</span>
                ${svc.originalPrice ? `<span class="price-original">₹${svc.originalPrice}</span>` : ''}
              </div>
            </div>
            <div class="card-action-group">
              <button class="btn-card-cart ${inCart ? 'in-cart' : ''}" onclick="quickAddToCart('${svc.id}', event)" title="${inCart ? 'In Cart' : 'Add to Cart'}" aria-label="Add to cart">
                <i class="fa-solid ${inCart ? 'fa-check' : 'fa-cart-plus'}"></i>
              </button>
              <button class="btn-card-book" onclick="openBookingModalForService('${svc.id}')">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- VIEW 4: SERVICE DETAILS SPEC VIEW ---
function renderServiceDetailView(params = {}) {
  const svcId = params.id;
  const svc = SERVICES_DATA.find(s => s.id === svcId) || SERVICES_DATA[0];
  const cat = CATEGORIES_DATA.find(c => c.id === svc.categoryId) || { name: 'Home Service' };

  const viewEl = document.getElementById('view-service-detail');
  viewEl.classList.add('active');

  document.getElementById('svcHeaderTitle').textContent = svc.name;
  document.getElementById('svcHeaderSub').textContent = `${cat.name} • 100% Satisfaction Guarantee`;

  const shareBtn = document.getElementById('svcShareBtn');
  if (shareBtn) {
    shareBtn.onclick = () => shareContent(`Book ${svc.name} at ₹${svc.price} on My City Service!`);
  }

  const container = document.getElementById('serviceDetailContainer');
  const wishlist = state.getWishlist();
  const isFav = wishlist.includes(svc.id);
  const cart = state.getCart();
  const inCart = cart.some(c => c.id === svc.id);

  // Calculate discount percentage
  const discountPercent = svc.originalPrice ? Math.round(((svc.originalPrice - svc.price) / svc.originalPrice) * 100) : 0;

  // Render detail contents
  container.innerHTML = `
    <!-- Large Photo Hero -->
    <div class="svc-detail-hero">
      <img src="${svc.image}" alt="${svc.name}" onerror="handleImageError(this, '${svc.name}')">
      <button class="hero-fav-btn ${isFav ? 'active' : ''}" onclick="toggleWishlist('${svc.id}', event)" aria-label="Save to favorites">
        <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
      </button>
    </div>

    <!-- Main Service Info Card -->
    <div class="svc-main-card">
      <div class="svc-meta-chips">
        <span class="svc-meta-chip duration"><i class="fa-regular fa-clock"></i> Duration: ${svc.duration}</span>
        <span class="svc-meta-chip warranty"><i class="fa-solid fa-shield-halved"></i> 7-Day Rework Warranty</span>
        <span class="svc-meta-chip"><i class="fa-solid fa-spray-can-sparkles"></i> Sealed Single-Use Kits</span>
      </div>

      <h1 class="svc-title-detail">${svc.name}</h1>
      <p class="svc-desc-detail">${svc.description}</p>

      <div class="svc-price-bar">
        <div>
          <span class="price-label">All-Inclusive Rate</span>
          <div>
            <span class="detail-price-num">₹${svc.price}</span>
            ${svc.originalPrice ? `<span class="detail-price-orig">₹${svc.originalPrice}</span>` : ''}
          </div>
        </div>
        ${discountPercent > 0 ? `<span class="detail-savings-badge"><i class="fa-solid fa-tag"></i> SAVE ${discountPercent}%</span>` : ''}
      </div>
    </div>

    <!-- What's Included Section -->
    <div class="detail-box">
      <h3 class="detail-box-title"><i class="fa-solid fa-list-check text-primary"></i> What's Included in This Service</h3>
      <ul class="included-checklist">
        ${(svc.included || [
          'Professional certified service partner arrival with toolkits',
          'Pre-service inspection and consultation',
          'Complete task execution according to standard safety SOP',
          'Post-service cleanup and performance testing'
        ]).map(item => `<li><i class="fa-solid fa-circle-check"></i> <span>${item}</span></li>`).join('')}
      </ul>
    </div>

    <!-- Add-ons Section (if available) -->
    ${svc.addons && svc.addons.length > 0 ? `
      <div class="detail-box">
        <h3 class="detail-box-title"><i class="fa-solid fa-puzzle-piece text-primary"></i> Recommended Add-ons</h3>
        <div class="addons-list" id="addonsListContainer">
          ${svc.addons.map((addon, index) => `
            <div class="addon-card-item ${addon.selected ? 'selected' : ''}" onclick="toggleAddon(${index}, '${svc.id}')">
              <div class="addon-info">
                <input type="checkbox" class="addon-checkbox" ${addon.selected ? 'checked' : ''} onclick="event.stopPropagation(); toggleAddon(${index}, '${svc.id}')">
                <div>
                  <h4 class="addon-name">${addon.name}</h4>
                  <p class="addon-desc">Optional service upgrade</p>
                </div>
              </div>
              <span class="addon-price">+₹${addon.price}</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Reviews & Ratings Section -->
    <div class="detail-box">
      <h3 class="detail-box-title"><i class="fa-solid fa-star text-gold"></i> Ratings &amp; Verified Reviews</h3>
      <div class="reviews-summary-bar">
        <span class="big-rating-num">${svc.rating}</span>
        <div>
          <div class="rating-stars-gold">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <span class="reviews-total-text">Based on ${svc.reviewsCount} verified customer ratings</span>
        </div>
      </div>

      <!-- Sample review items -->
      <div class="testimonials-grid" style="grid-template-columns: 1fr; gap: 10px;">
        <div class="testimonial-card">
          <div class="testimonial-stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <p class="testimonial-text">"Punctual, hygienic, and skilled. Completely transformed my room and was very polite throughout."</p>
          <div class="testimonial-user">
            <img src="https://ui-avatars.com/api/?name=Kavita+R" alt="Reviewer" class="user-avatar">
            <div>
              <h4 class="user-name">Kavita R.</h4>
              <span class="user-loc">Verified Booking • Chhindwara</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sticky Bottom Bar -->
    <div class="svc-floating-bottom-bar">
      <div class="bottom-price-meta">
        <span class="label">Total Price</span>
        <div class="value" id="detailDynamicTotal">₹${calculateServiceDynamicTotal(svc)}</div>
      </div>
      <div class="bottom-actions-row">
        <button class="btn btn-outline" id="detailCartActionBtn" onclick="toggleCartForCurrentService('${svc.id}')">
          <i class="fa-solid ${inCart ? 'fa-check' : 'fa-cart-plus'}"></i> ${inCart ? 'In Cart' : 'Add to Cart'}
        </button>
        <button class="btn btn-primary" onclick="openBookingModalForService('${svc.id}')">
          <i class="fa-solid fa-calendar-check"></i> Book Now
        </button>
      </div>
    </div>
  `;
}

function calculateServiceDynamicTotal(svc) {
  let total = svc.price;
  if (svc.addons) {
    svc.addons.forEach(a => {
      if (a.selected) total += a.price;
    });
  }
  return total;
}

function toggleAddon(index, svcId) {
  const svc = SERVICES_DATA.find(s => s.id === svcId);
  if (!svc || !svc.addons || !svc.addons[index]) return;

  svc.addons[index].selected = !svc.addons[index].selected;

  // Update total badge
  const totalEl = document.getElementById('detailDynamicTotal');
  if (totalEl) totalEl.textContent = `₹${calculateServiceDynamicTotal(svc)}`;

  // Re-render addons container
  const container = document.getElementById('addonsListContainer');
  if (container) {
    container.innerHTML = svc.addons.map((addon, i) => `
      <div class="addon-card-item ${addon.selected ? 'selected' : ''}" onclick="toggleAddon(${i}, '${svc.id}')">
        <div class="addon-info">
          <input type="checkbox" class="addon-checkbox" ${addon.selected ? 'checked' : ''} onclick="event.stopPropagation(); toggleAddon(${i}, '${svc.id}')">
          <div>
            <h4 class="addon-name">${addon.name}</h4>
            <p class="addon-desc">Optional service upgrade</p>
          </div>
        </div>
        <span class="addon-price">+₹${addon.price}</span>
      </div>
    `).join('');
  }
}

function toggleCartForCurrentService(svcId) {
  const svc = SERVICES_DATA.find(s => s.id === svcId);
  if (!svc) return;

  const cart = state.getCart();
  const existingIdx = cart.findIndex(c => c.id === svcId);

  if (existingIdx >= 0) {
    cart.splice(existingIdx, 1);
    state.setCart(cart);
    showToast(`Removed "${svc.name}" from cart`, 'info');
  } else {
    cart.push({
      id: svc.id,
      name: svc.name,
      price: calculateServiceDynamicTotal(svc),
      image: svc.image,
      duration: svc.duration,
      categoryId: svc.categoryId,
      quantity: 1
    });
    state.setCart(cart);
    showToast(`Added "${svc.name}" to cart`, 'success');
  }

  // Update button UI
  const btn = document.getElementById('detailCartActionBtn');
  const inCart = state.getCart().some(c => c.id === svcId);
  if (btn) {
    btn.innerHTML = `<i class="fa-solid ${inCart ? 'fa-check' : 'fa-cart-plus'}"></i> ${inCart ? 'In Cart' : 'Add to Cart'}`;
  }
}

// --- VIEW 5: SEARCH & CATALOG FILTERS ---
function renderSearchView(params = {}) {
  const viewEl = document.getElementById('view-search');
  viewEl.classList.add('active');

  const query = params.q !== undefined ? params.q : '';
  const searchInput = document.getElementById('globalSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (searchInput && params.q !== undefined) {
    searchInput.value = query;
    clearBtn?.classList.toggle('hidden', !query);
  }

  const catSelect = document.getElementById('filterCategorySelect');
  const sortSelect = document.getElementById('filterSortSelect');
  const priceSlider = document.getElementById('filterPriceMax');
  const priceLabel = document.getElementById('priceRangeValue');

  // Populate category options
  if (catSelect && catSelect.children.length <= 1) {
    catSelect.innerHTML = `<option value="all">All Categories</option>` +
      CATEGORIES_DATA.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  }

  function filterAndRender() {
    let list = SERVICES_DATA;
    const catVal = catSelect?.value || 'all';
    const sortVal = sortSelect?.value || 'popular';
    const maxPrice = parseInt(priceSlider?.value || 5000, 10);
    const searchVal = (document.getElementById('globalSearchInput')?.value || query).toLowerCase().trim();

    if (catVal !== 'all') {
      list = list.filter(s => s.categoryId === catVal);
    }

    list = list.filter(s => s.price <= maxPrice);

    if (searchVal) {
      list = list.filter(s =>
        s.name.toLowerCase().includes(searchVal) ||
        s.description.toLowerCase().includes(searchVal) ||
        s.categoryId.toLowerCase().includes(searchVal)
      );
    }

    // Sort
    if (sortVal === 'price-low') list.sort((a, b) => a.price - b.price);
    else if (sortVal === 'price-high') list.sort((a, b) => b.price - a.price);
    else if (sortVal === 'rating') list.sort((a, b) => b.rating - a.rating);
    else list.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));

    // Render count
    document.getElementById('searchResultsCount').textContent = `Found ${list.length} matching services`;

    const grid = document.getElementById('searchResultsGrid');
    const wishlist = state.getWishlist();
    const cart = state.getCart();

    if (list.length === 0) {
      grid.innerHTML = `
        <div class="empty-state-card" style="grid-column: 1 / -1;">
          <div class="empty-icon-wrap"><i class="fa-solid fa-magnifying-glass"></i></div>
          <h3>No matching services found</h3>
          <p>Try broadening your price range or clearing category filters.</p>
          <button class="btn btn-outline btn-sm" onclick="resetSearchFilters()">Reset Filters</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map(svc => {
      const isFav = wishlist.includes(svc.id);
      const inCart = cart.some(c => c.id === svc.id);
      const cat = CATEGORIES_DATA.find(c => c.id === svc.categoryId) || { name: 'Home Service' };

      return `
        <div class="service-card" data-service-id="${svc.id}">
          <div class="service-card-media">
            <img src="${svc.image}" alt="${svc.name}" loading="lazy" onerror="handleImageError(this, '${svc.name}')">
            <span class="card-badge-category">${cat.shortName || cat.name}</span>
            <button class="card-fav-btn ${isFav ? 'active' : ''}" onclick="toggleWishlist('${svc.id}', event)" aria-label="Favorite">
              <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
          </div>
          <div class="service-card-body">
            <div class="service-card-rating">
              <span class="rating-badge"><i class="fa-solid fa-star"></i> ${svc.rating}</span>
              <span class="review-count">(${svc.reviewsCount}+ reviews)</span>
            </div>
            <h3 class="service-card-title" onclick="router.navigate('service', { id: '${svc.id}' })">${svc.name}</h3>
            <p class="service-card-desc">${svc.description}</p>
            <div class="service-card-footer">
              <div class="price-box">
                <span class="price-label">Starts at</span>
                <div>
                  <span class="price-current">₹${svc.price}</span>
                  ${svc.originalPrice ? `<span class="price-original">₹${svc.originalPrice}</span>` : ''}
                </div>
              </div>
              <div class="card-action-group">
                <button class="btn-card-cart ${inCart ? 'in-cart' : ''}" onclick="quickAddToCart('${svc.id}', event)">
                  <i class="fa-solid ${inCart ? 'fa-check' : 'fa-cart-plus'}"></i>
                </button>
                <button class="btn-card-book" onclick="openBookingModalForService('${svc.id}')">Book</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Event handlers for filters
  if (catSelect) catSelect.onchange = filterAndRender;
  if (sortSelect) sortSelect.onchange = filterAndRender;
  if (priceSlider) {
    priceSlider.oninput = (e) => {
      if (priceLabel) priceLabel.textContent = `₹${parseInt(e.target.value, 10).toLocaleString('en-IN')}`;
      filterAndRender();
    };
  }

  filterAndRender();
}

function resetSearchFilters() {
  const catSelect = document.getElementById('filterCategorySelect');
  const sortSelect = document.getElementById('filterSortSelect');
  const priceSlider = document.getElementById('filterPriceMax');
  const priceLabel = document.getElementById('priceRangeValue');
  const searchInput = document.getElementById('globalSearchInput');

  if (catSelect) catSelect.value = 'all';
  if (sortSelect) sortSelect.value = 'popular';
  if (priceSlider) priceSlider.value = '5000';
  if (priceLabel) priceLabel.textContent = '₹5,000';
  if (searchInput) searchInput.value = '';

  renderSearchView();
}

// --- VIEW 6: SHOPPING CART ---
function renderCartView() {
  const viewEl = document.getElementById('view-cart');
  viewEl.classList.add('active');

  const container = document.getElementById('cartLayoutContainer');
  const cart = state.getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state-card" style="grid-column: 1 / -1;">
        <div class="empty-icon-wrap"><i class="fa-solid fa-cart-shopping"></i></div>
        <h3>Your Service Cart is Empty</h3>
        <p>Explore popular household services and add tasks for convenient doorstep delivery.</p>
        <button class="btn btn-primary" onclick="router.navigate('home')"><i class="fa-solid fa-arrow-left"></i> Browse Services</button>
      </div>
    `;
    return;
  }

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const safetyFee = 49; // Fixed service delivery & safety fee

  const appliedCoupon = state.getAppliedCoupon();
  let discount = 0;

  if (appliedCoupon) {
    if (appliedCoupon.discountType === 'flat') {
      discount = appliedCoupon.discountValue;
    } else if (appliedCoupon.discountType === 'percentage') {
      discount = Math.round((subtotal * appliedCoupon.discountValue) / 100);
      if (appliedCoupon.maxDiscount && discount > appliedCoupon.maxDiscount) {
        discount = appliedCoupon.maxDiscount;
      }
    }
  }

  const grandTotal = Math.max(0, subtotal + safetyFee - discount);

  container.innerHTML = `
    <!-- Cart Items Column -->
    <div class="cart-items-column">
      ${cart.map(item => `
        <div class="cart-item-card">
          <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="handleImageError(this, '${item.name}')">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <span class="cart-item-cat"><i class="fa-regular fa-clock"></i> ${item.duration || 'Doorstep Service'}</span>
            <span class="cart-item-price">₹${item.price}</span>
            <div class="cart-item-controls">
              <div class="qty-stepper">
                <button class="qty-btn" onclick="updateCartItemQty('${item.id}', -1)" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" onclick="updateCartItemQty('${item.id}', 1)" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
              </div>
              <button class="btn-remove-item" onclick="removeCartItem('${item.id}')" title="Remove Service">
                <i class="fa-regular fa-trash-can"></i> Remove
              </button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Bill Summary Column -->
    <div class="bill-summary-card">
      <h3 class="bill-card-title"><i class="fa-solid fa-receipt text-primary"></i> Payment Summary</h3>

      <!-- Coupon Apply Field -->
      <div class="coupon-apply-wrap">
        <input type="text" id="cartCouponInput" placeholder="Enter coupon code (e.g. TRYNEW)" value="${appliedCoupon ? appliedCoupon.code : ''}">
        <button class="btn btn-primary btn-sm" onclick="applyCouponFromCart()">Apply</button>
      </div>

      ${appliedCoupon ? `
        <div class="applied-coupon-pill">
          <span><i class="fa-solid fa-circle-check"></i> Coupon <strong>${appliedCoupon.code}</strong> applied</span>
          <button class="btn-text-danger btn-sm" onclick="removeAppliedCoupon()"><i class="fa-solid fa-xmark"></i></button>
        </div>
      ` : ''}

      <!-- Detailed Breakdown -->
      <div class="bill-rows">
        <div class="bill-row">
          <span>Item Total (${cart.reduce((a, b) => a + b.quantity, 0)} items)</span>
          <span>₹${subtotal}</span>
        </div>
        <div class="bill-row">
          <span>Safety & Hygiene Fee</span>
          <span>₹${safetyFee}</span>
        </div>
        ${discount > 0 ? `
          <div class="bill-row discount">
            <span>Coupon Discount</span>
            <span>- ₹${discount}</span>
          </div>
        ` : ''}
        <div class="bill-row total">
          <span>Grand Total</span>
          <span>₹${grandTotal}</span>
        </div>
      </div>

      <button class="btn btn-primary w-100" onclick="proceedToCheckoutFromCart()">
        <i class="fa-solid fa-shield-check"></i> Proceed to Schedule Booking
      </button>

      <div style="font-size: 0.75rem; color: var(--text-muted); text-align: center; margin-top: 12px;">
        <i class="fa-solid fa-lock"></i> Safe & contactless booking with free cancellation
      </div>
    </div>
  `;
}

function updateCartItemQty(svcId, delta) {
  const cart = state.getCart();
  const item = cart.find(c => c.id === svcId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeCartItem(svcId);
    return;
  }
  state.setCart(cart);
  renderCartView();
}

function removeCartItem(svcId) {
  let cart = state.getCart();
  cart = cart.filter(c => c.id !== svcId);
  state.setCart(cart);
  showToast('Removed service from cart', 'info');
  renderCartView();
}

function applyCouponFromCart() {
  const input = document.getElementById('cartCouponInput');
  const code = (input?.value || '').trim().toUpperCase();

  if (!code) {
    showToast('Please enter a coupon code', 'error');
    return;
  }

  const coupon = COUPONS_DATA.find(c => c.code === code);
  if (!coupon) {
    showToast(`Invalid coupon "${code}". Try TRYNEW or CITY10`, 'error');
    return;
  }

  const cart = state.getCart();
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (coupon.minOrder && subtotal < coupon.minOrder) {
    showToast(`Coupon "${code}" requires minimum booking of ₹${coupon.minOrder}`, 'error');
    return;
  }

  state.setAppliedCoupon(coupon);
  showToast(`Coupon "${code}" applied successfully!`, 'success');
  renderCartView();
}

function removeAppliedCoupon() {
  state.setAppliedCoupon(null);
  showToast('Coupon removed', 'info');
  renderCartView();
}

function proceedToCheckoutFromCart() {
  const cart = state.getCart();
  if (cart.length === 0) return;

  // Open booking modal prefilled with all cart services
  openBookingModalForCart();
}

// Clear cart button in header
document.getElementById('clearCartBtn')?.addEventListener('click', () => {
  if (confirm('Are you sure you want to clear your cart?')) {
    state.setCart([]);
    state.setAppliedCoupon(null);
    showToast('Cart cleared', 'info');
    renderCartView();
  }
});

// --- VIEW 7: BOOKINGS HISTORY PAGE ---
function renderBookingsView(filterTab = 'upcoming') {
  const viewEl = document.getElementById('view-bookings');
  viewEl.classList.add('active');

  const container = document.getElementById('bookingsListContainer');
  const allBookings = state.getBookings();

  // Update Tab Badges
  const upcomingCount = allBookings.filter(b => b.status === 'upcoming').length;
  const completedCount = allBookings.filter(b => b.status === 'completed').length;
  const cancelledCount = allBookings.filter(b => b.status === 'cancelled').length;

  document.getElementById('upcomingBadge').textContent = upcomingCount;
  document.getElementById('completedBadge').textContent = completedCount;
  document.getElementById('cancelledBadge').textContent = cancelledCount;

  // Tab activation
  document.querySelectorAll('.booking-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === filterTab);
    btn.onclick = () => renderBookingsView(btn.dataset.tab);
  });

  const filtered = allBookings.filter(b => b.status === filterTab);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state-card">
        <div class="empty-icon-wrap"><i class="fa-regular fa-calendar-xmark"></i></div>
        <h3>No ${filterTab} bookings</h3>
        <p>You do not have any appointments under this section.</p>
        <button class="btn btn-primary btn-sm" onclick="router.navigate('home')">Book a Doorstep Service</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(booking => `
    <div class="booking-record-card">
      <div class="booking-card-top">
        <span class="booking-ref-badge"><i class="fa-solid fa-hashtag"></i> ${booking.id}</span>
        <span class="booking-status-tag ${booking.status}">${booking.status}</span>
      </div>

      <div class="booking-content-row">
        <img src="${booking.image}" alt="${booking.serviceName}" class="booking-thumb" onerror="handleImageError(this, '${booking.serviceName}')">
        <div class="booking-details-box">
          <h4 class="booking-service-title">${booking.serviceName}</h4>
          <div class="booking-schedule-time">
            <i class="fa-regular fa-calendar-days"></i> ${booking.date} at ${booking.timeSlot}
          </div>
          <p class="booking-address-preview"><i class="fa-solid fa-location-dot"></i> ${booking.address}</p>
        </div>
      </div>

      <div class="booking-card-bottom">
        <div>
          <span style="font-size: 0.72rem; color: var(--text-muted); display: block;">Total Amount</span>
          <span class="booking-amount">₹${booking.totalPaid || booking.price}</span>
        </div>
        <div class="booking-actions">
          <button class="btn btn-outline btn-sm" onclick="viewBookingDetailsModal('${booking.id}')">View Details</button>
          ${booking.status === 'upcoming' ? `
            <button class="btn btn-text-danger btn-sm" onclick="confirmCancelBooking('${booking.id}')">Cancel</button>
          ` : `
            <button class="btn btn-primary btn-sm" onclick="rebookService('${booking.serviceId}')">Book Again</button>
          `}
        </div>
      </div>
    </div>
  `).join('');
}

function confirmCancelBooking(bookingId) {
  if (confirm(`Are you sure you want to cancel booking #${bookingId}? There are zero cancellation charges.`)) {
    const bookings = state.getBookings();
    const b = bookings.find(item => item.id === bookingId);
    if (b) {
      b.status = 'cancelled';
      state.setBookings(bookings);
      showToast(`Booking #${bookingId} has been cancelled`, 'info');
      renderBookingsView('cancelled');
    }
  }
}

function rebookService(serviceId) {
  openBookingModalForService(serviceId);
}

function viewBookingDetailsModal(bookingId) {
  const bookings = state.getBookings();
  const b = bookings.find(item => item.id === bookingId);
  if (!b) return;

  document.getElementById('bookingDetailRef').textContent = `Booking #${b.id}`;
  const content = document.getElementById('bookingDetailContent');

  content.innerHTML = `
    <div class="booking-content-row" style="margin-bottom: 16px;">
      <img src="${b.image}" alt="${b.serviceName}" class="booking-thumb" style="width: 80px; height: 80px;">
      <div>
        <h4 style="font-size: 1.1rem; font-weight: 700;">${b.serviceName}</h4>
        <span class="booking-status-tag ${b.status}" style="margin: 4px 0; display: inline-block;">Status: ${b.status}</span>
        <div style="font-size: 0.85rem; color: var(--brand-blue);"><i class="fa-regular fa-clock"></i> Scheduled: ${b.date} • ${b.timeSlot}</div>
      </div>
    </div>

    <div class="booking-section-box">
      <h4 class="form-section-title"><i class="fa-solid fa-user-shield"></i> Assigned Service Expert</h4>
      <div style="display: flex; align-items: center; gap: 12px;">
        <img src="https://ui-avatars.com/api/?name=Rakesh+Kumar&background=2563eb&color=fff" style="width: 44px; height: 44px; border-radius: 50%;">
        <div>
          <strong style="font-size: 0.95rem;">Rakesh Kumar (Verified Technician)</strong>
          <p style="font-size: 0.78rem; color: var(--text-muted);"><i class="fa-solid fa-star text-gold"></i> 4.9 Rating • 480+ Jobs Completed</p>
        </div>
      </div>
    </div>

    <div class="booking-section-box">
      <h4 class="form-section-title"><i class="fa-solid fa-map-pin"></i> Service Location & Contact</h4>
      <p style="font-size: 0.85rem;"><strong>Name:</strong> ${b.customerName || 'Customer'}</p>
      <p style="font-size: 0.85rem;"><strong>Phone:</strong> +91 ${b.phone || '9826012345'}</p>
      <p style="font-size: 0.85rem;"><strong>Address:</strong> ${b.address}</p>
      <p style="font-size: 0.85rem;"><strong>Payment Mode:</strong> ${b.paymentMethod}</p>
    </div>

    <div class="receipt-row total">
      <span>Amount Payable:</span>
      <span style="font-size: 1.25rem; font-weight: 800; color: var(--brand-blue);">₹${b.totalPaid || b.price}</span>
    </div>

    <div class="modal-footer" style="padding-left: 0; padding-right: 0;">
      <button class="btn btn-outline" onclick="closeModal('bookingDetailsModal')">Close</button>
      ${b.status === 'upcoming' ? `
        <button class="btn btn-text-danger" onclick="closeModal('bookingDetailsModal'); confirmCancelBooking('${b.id}');">Cancel Booking</button>
      ` : ''}
    </div>
  `;

  openModal('bookingDetailsModal');
}

// --- VIEW 8: USER PROFILE ---
function renderProfileView() {
  const viewEl = document.getElementById('view-profile');
  viewEl.classList.add('active');

  const profile = state.getProfile();
  const bookings = state.getBookings();
  const wishlist = state.getWishlist();

  // Populate info
  document.getElementById('profileDisplayName').textContent = profile.name || 'User';
  document.getElementById('profileDisplayPhone').textContent = `+91 ${profile.phone || '98260 12345'}`;
  document.getElementById('profileBookingsCount').textContent = bookings.length;
  document.getElementById('profileWishlistCount').textContent = wishlist.length;

  if (profile.avatar) {
    document.getElementById('profileLargeAvatar').src = profile.avatar;
    document.getElementById('headerUserAvatar').src = profile.avatar;
  }

  // Address preview label
  const defaultAddr = (profile.addresses || []).find(a => a.isDefault) || profile.addresses?.[0];
  if (defaultAddr) {
    document.getElementById('profileSavedAddressPreview').textContent = `${defaultAddr.tag}: ${defaultAddr.full.slice(0, 32)}...`;
  }
}

// Edit Profile Form
document.getElementById('editProfileBtn')?.addEventListener('click', () => {
  const profile = state.getProfile();
  document.getElementById('editNameInput').value = profile.name || '';
  document.getElementById('editPhoneInput').value = profile.phone || '';
  document.getElementById('editEmailInput').value = profile.email || '';
  openModal('editProfileModal');
});

function saveUserProfile(e) {
  e.preventDefault();
  const profile = state.getProfile();
  profile.name = document.getElementById('editNameInput').value.trim();
  profile.phone = document.getElementById('editPhoneInput').value.trim();
  profile.email = document.getElementById('editEmailInput').value.trim();
  profile.avatar = document.getElementById('editAvatarSelect').value;

  state.setProfile(profile);
  closeModal('editProfileModal');
  showToast('Profile updated successfully', 'success');
  renderProfileView();
}

function resetDemoDataPrompt() {
  if (confirm('Reset demo data to initial defaults? All cart items, bookings, and addresses will be restored.')) {
    localStorage.clear();
    state.initDefaults();
    showToast('Demo data restored successfully', 'success');
    window.location.reload();
  }
}

// --- VIEW 9: OFFERS VIEW ---
function renderOffersView() {
  const viewEl = document.getElementById('view-offers');
  viewEl.classList.add('active');

  const container = document.getElementById('offersPageContainer');
  container.innerHTML = `
    <div class="coupons-slider" style="grid-template-columns: 1fr; margin-bottom: 24px;">
      ${COUPONS_DATA.map(c => `
        <div class="coupon-ticket-card">
          <div class="coupon-left">
            <div class="coupon-icon-box">
              <i class="fa-solid fa-gift"></i>
            </div>
            <div>
              <h4 class="coupon-title">${c.title}</h4>
              <p class="coupon-desc">${c.desc}</p>
              <span class="coupon-expiry"><i class="fa-regular fa-clock"></i> ${c.expires}</span>
            </div>
          </div>
          <div class="coupon-right">
            <span class="coupon-code-pill">${c.code}</span>
            <button class="btn-copy-code" onclick="copyCouponCode('${c.code}', event)"><i class="fa-regular fa-copy"></i> Copy</button>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="detail-box">
      <h3 class="detail-box-title"><i class="fa-solid fa-circle-question text-primary"></i> How to Redeem Offers</h3>
      <ul class="included-checklist">
        <li><i class="fa-solid fa-circle-check"></i> Copy any coupon code shown above.</li>
        <li><i class="fa-solid fa-circle-check"></i> Add any eligible home or salon service to your cart.</li>
        <li><i class="fa-solid fa-circle-check"></i> Paste the coupon code in the "Payment Summary" box during checkout.</li>
        <li><i class="fa-solid fa-circle-check"></i> Discount will be deducted instantly from your total payable amount.</li>
      </ul>
    </div>
  `;
}

/* ===================================================================
   5. BOOKING FLOW MODAL & ORDER CREATION
   =================================================================== */
let currentBookingItems = []; // Array of services to be booked in modal

function openBookingModalForService(svcId) {
  const svc = SERVICES_DATA.find(s => s.id === svcId);
  if (!svc) return;

  currentBookingItems = [{
    id: svc.id,
    name: svc.name,
    price: svc.price,
    image: svc.image,
    duration: svc.duration,
    categoryName: (CATEGORIES_DATA.find(c => c.id === svc.categoryId) || {}).name || 'Home Service'
  }];

  showBookingFormModal();
}

function openBookingModalForCart() {
  const cart = state.getCart();
  if (cart.length === 0) return;

  currentBookingItems = cart.map(c => ({
    id: c.id,
    name: c.name,
    price: c.price * c.quantity,
    image: c.image,
    duration: c.duration,
    categoryName: (CATEGORIES_DATA.find(cat => cat.id === c.categoryId) || {}).name || 'Service'
  }));

  showBookingFormModal();
}

function showBookingFormModal() {
  const profile = state.getProfile();
  const defaultAddr = (profile.addresses || []).find(a => a.isDefault) || profile.addresses?.[0];

  // Prefill Customer details
  document.getElementById('bookingCustomerName').value = profile.name || '';
  document.getElementById('bookingCustomerPhone').value = profile.phone || '';
  document.getElementById('bookingCustomerAddress').value = defaultAddr ? defaultAddr.full : 'House 42, Gulabra Chowk, Chhindwara';
  document.getElementById('bookingPincode').value = defaultAddr ? defaultAddr.pincode : '480001';

  // Prefill Service Preview Box
  const previewBox = document.getElementById('bookingServicePreview');
  previewBox.innerHTML = `
    <div style="display: flex; align-items: center; gap: 14px; padding: 12px; background: #fff; border-radius: var(--radius-md); border: 1px solid var(--border-light); margin-bottom: 14px;">
      <img src="${currentBookingItems[0].image}" alt="Service" style="width: 58px; height: 58px; border-radius: 8px; object-fit: cover;">
      <div style="flex: 1;">
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main);">${currentBookingItems.map(i => i.name).join(' + ')}</h4>
        <span style="font-size: 0.78rem; color: var(--text-muted);"><i class="fa-regular fa-clock"></i> Estimated: ${currentBookingItems[0].duration || '1-2 hrs'}</span>
      </div>
      <div style="font-size: 1.15rem; font-weight: 800; color: var(--brand-blue);">₹${currentBookingItems.reduce((acc, item) => acc + item.price, 0)}</div>
    </div>
  `;

  // Init Date Picker: disable past dates, allow next 14 days
  const dateInput = document.getElementById('bookingDateInput');
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const minDateStr = today.toISOString().split('T')[0];
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 14);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  dateInput.min = minDateStr;
  dateInput.max = maxDateStr;
  dateInput.value = tomorrow.toISOString().split('T')[0];

  // Populate Time Slot Pills
  const timeSlots = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '06:30 PM', '08:00 PM'];
  const slotsGrid = document.getElementById('timeSlotsGrid');
  const selectedSlotInput = document.getElementById('selectedTimeSlotInput');
  selectedSlotInput.value = timeSlots[1]; // default 11:30 AM

  slotsGrid.innerHTML = timeSlots.map((slot, idx) => `
    <button type="button" class="slot-pill-btn ${idx === 1 ? 'active' : ''}" onclick="selectTimeSlot(this, '${slot}')">
      <i class="fa-regular fa-clock"></i> ${slot}
    </button>
  `).join('');

  // Bill Summary Card in modal
  updateBookingModalBill();

  openModal('bookingModal');
}

function selectTimeSlot(btn, slot) {
  document.querySelectorAll('.slot-pill-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('selectedTimeSlotInput').value = slot;
}

function updateBookingModalBill() {
  const billBox = document.getElementById('bookingBillCard');
  const subtotal = currentBookingItems.reduce((acc, i) => acc + i.price, 0);
  const safetyFee = 49;
  const coupon = state.getAppliedCoupon();
  let discount = 0;

  if (coupon) {
    if (coupon.discountType === 'flat') discount = coupon.discountValue;
    else if (coupon.discountType === 'percentage') {
      discount = Math.round((subtotal * coupon.discountValue) / 100);
      if (coupon.maxDiscount && discount > coupon.maxDiscount) discount = coupon.maxDiscount;
    }
  }

  const grandTotal = Math.max(0, subtotal + safetyFee - discount);

  billBox.innerHTML = `
    <div class="bill-rows" style="margin-bottom: 0;">
      <div class="bill-row"><span>Service Total:</span><span>₹${subtotal}</span></div>
      <div class="bill-row"><span>Safety & Sanitized Kit:</span><span>₹${safetyFee}</span></div>
      ${discount > 0 ? `<div class="bill-row discount"><span>Coupon (${coupon.code}):</span><span>- ₹${discount}</span></div>` : ''}
      <div class="bill-row total"><span>Payable Amount:</span><span>₹${grandTotal}</span></div>
    </div>
  `;
}

function handleBookingFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('bookingCustomerName').value.trim();
  const phone = document.getElementById('bookingCustomerPhone').value.trim();
  const address = document.getElementById('bookingCustomerAddress').value.trim();
  const pincode = document.getElementById('bookingPincode').value.trim();
  const dateVal = document.getElementById('bookingDateInput').value;
  const slotVal = document.getElementById('selectedTimeSlotInput').value;
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'Cash / UPI on Service';

  // Validation
  if (!name || phone.length !== 10 || !address || pincode.length !== 6 || !slotVal) {
    showToast('Please fill all required fields correctly', 'error');
    return;
  }

  // Calculate total
  const subtotal = currentBookingItems.reduce((acc, i) => acc + i.price, 0);
  const coupon = state.getAppliedCoupon();
  let discount = 0;
  if (coupon) {
    if (coupon.discountType === 'flat') discount = coupon.discountValue;
    else if (coupon.discountType === 'percentage') {
      discount = Math.round((subtotal * coupon.discountValue) / 100);
      if (coupon.maxDiscount && discount > coupon.maxDiscount) discount = coupon.maxDiscount;
    }
  }
  const grandTotal = Math.max(0, subtotal + 49 - discount);

  // Generate Unique Ref Number
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const bookingRef = `MCS-2026-${randomSuffix}`;

  const primaryItem = currentBookingItems[0];
  const allNames = currentBookingItems.map(i => i.name).join(', ');

  const newBooking = {
    id: bookingRef,
    serviceId: primaryItem.id,
    serviceName: allNames,
    categoryName: primaryItem.categoryName || 'Home Service',
    image: primaryItem.image,
    price: subtotal,
    totalPaid: grandTotal,
    date: dateVal,
    timeSlot: slotVal,
    status: 'upcoming',
    customerName: name,
    phone: phone,
    address: `${address}, Chhindwara, MP - ${pincode}`,
    paymentMethod: paymentMethod,
    createdAt: new Date().toISOString()
  };

  // Save to State
  const bookings = state.getBookings();
  bookings.unshift(newBooking);
  state.setBookings(bookings);

  // Clear cart if booking came from cart
  state.setCart([]);

  // Close booking form modal
  closeModal('bookingModal');

  // Show Success Receipt Modal
  const receiptEl = document.getElementById('successReceiptDetails');
  receiptEl.innerHTML = `
    <div class="receipt-row"><span>Reference ID:</span><strong>${bookingRef}</strong></div>
    <div class="receipt-row"><span>Service:</span><span>${allNames}</span></div>
    <div class="receipt-row"><span>Date & Slot:</span><span>${dateVal} • ${slotVal}</span></div>
    <div class="receipt-row"><span>Address:</span><span>${address}</span></div>
    <div class="receipt-row"><span>Payment Preference:</span><span>${paymentMethod}</span></div>
    <div class="receipt-row total"><span>Total Payable:</span><span>₹${grandTotal}</span></div>
  `;

  openModal('bookingSuccessModal');
  showToast('Booking scheduled successfully!', 'success');
}

/* ===================================================================
   6. GLOBAL SEARCH & LIVE SUGGESTIONS
   =================================================================== */
function initGlobalSearch() {
  const input = document.getElementById('globalSearchInput');
  const searchBox = document.getElementById('headerSearchBox') || document.querySelector('.search-input-box');
  const searchIcon = document.getElementById('searchIconBtn') || document.querySelector('.search-input-box .search-icon');
  const clearBtn = document.getElementById('clearSearchBtn');
  const dropdown = document.getElementById('searchSuggestionsBox');
  const listEl = document.getElementById('suggestionsList');
  const countEl = document.getElementById('suggestionCount');
  const headerTitleEl = document.getElementById('suggestionsHeaderTitle');
  const viewAllBtn = document.getElementById('viewAllSearchResultsBtn');

  if (!input) return;

  // Popular search items for instant empty-state suggestions
  const POPULAR_SEARCH_TERMS = [
    { label: 'Salon at Home', icon: 'fa-wand-magic-sparkles', action: () => router.navigate('category', { id: 'salon' }) },
    { label: 'AC Repair & Service', icon: 'fa-snowflake', action: () => router.navigate('category', { id: 'ac-repair' }) },
    { label: 'House Deep Cleaning', icon: 'fa-broom', action: () => router.navigate('category', { id: 'cleaning' }) },
    { label: 'Electrician', icon: 'fa-bolt', action: () => router.navigate('category', { id: 'electrician' }) },
    { label: 'Plumber', icon: 'fa-faucet-drip', action: () => router.navigate('category', { id: 'plumbing' }) },
    { label: 'RO Water Purifier', icon: 'fa-glass-water', action: () => router.navigate('category', { id: 'water-purifier' }) }
  ];

  function showPopularSuggestions() {
    if (!dropdown || !listEl) return;
    if (headerTitleEl) headerTitleEl.innerHTML = `<i class="fa-solid fa-fire text-gold"></i> Popular &amp; Trending in Chhindwara`;
    if (countEl) countEl.textContent = 'Top Picks';

    // Curated top 4 services
    const topServices = SERVICES_DATA.filter(s => s.popular || s.rating >= 4.9).slice(0, 4);

    let html = `
      <div class="search-popular-tags">
        ${POPULAR_SEARCH_TERMS.map((t, idx) => `
          <button type="button" class="search-tag-chip" data-chip-idx="${idx}">
            <i class="fa-solid ${t.icon}"></i> ${t.label}
          </button>
        `).join('')}
      </div>
      <div class="suggestions-section-label" style="padding: 8px 16px 4px; font-size: 0.72rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">
        Recommended Services
      </div>
    `;

    html += topServices.map(m => `
      <div class="suggestion-item" data-service-id="${m.id}">
        <img src="${m.image}" alt="${m.name}" class="suggestion-thumb" onerror="handleImageError(this, '${m.name}')">
        <div class="suggestion-info">
          <span class="suggestion-name">${m.name}</span>
          <span class="suggestion-cat"><i class="fa-solid fa-star text-gold"></i> ${m.rating} • ${m.duration}</span>
        </div>
        <span class="suggestion-price">₹${m.price}</span>
      </div>
    `).join('');

    listEl.innerHTML = html;

    // Attach click events to chips and service items
    listEl.querySelectorAll('.search-tag-chip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.chipIdx, 10);
        hideSearchDropdown();
        POPULAR_SEARCH_TERMS[idx].action();
      });
    });

    listEl.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const svcId = item.dataset.serviceId;
        hideSearchDropdown();
        router.navigate('service', { id: svcId });
      });
    });

    dropdown.classList.remove('hidden');
  }

  function handleSearchInput(query) {
    const val = query.trim().toLowerCase();
    clearBtn.classList.toggle('hidden', !val);

    if (val.length === 0) {
      showPopularSuggestions();
      return;
    }

    const valStem = val.length >= 4 ? val.slice(0, 4) : val;

    // Match categories (exact, partial, or common stem like plumber -> plumbing)
    const matchedCategories = CATEGORIES_DATA.filter(c =>
      c.name.toLowerCase().includes(val) ||
      c.shortName.toLowerCase().includes(val) ||
      c.id.toLowerCase().includes(val) ||
      (val.length >= 4 && (c.id.startsWith(valStem) || c.name.toLowerCase().startsWith(valStem)))
    ).slice(0, 2);

    // Match services
    const matches = SERVICES_DATA.filter(s =>
      s.name.toLowerCase().includes(val) ||
      s.categoryId.toLowerCase().includes(val) ||
      s.description.toLowerCase().includes(val) ||
      (val.length >= 4 && (s.categoryId.startsWith(valStem) || s.name.toLowerCase().includes(valStem)))
    );

    if (headerTitleEl) headerTitleEl.innerHTML = `<i class="fa-solid fa-magnifying-glass text-primary"></i> Search Results`;
    if (countEl) countEl.textContent = `${matches.length + matchedCategories.length} found`;

    if (matches.length === 0 && matchedCategories.length === 0) {
      listEl.innerHTML = `
        <div style="padding: 24px 16px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
          <div style="font-size: 1.5rem; margin-bottom: 6px;"><i class="fa-regular fa-face-meh"></i></div>
          No exact matches found for "<strong>${val}</strong>".<br>
          <span style="font-size: 0.8rem; color: var(--text-light);">Press Enter to view all services catalog</span>
        </div>
      `;
    } else {
      let html = '';

      // Matched categories at top
      if (matchedCategories.length > 0) {
        html += matchedCategories.map(cat => `
          <div class="suggestion-item suggestion-cat-item" data-cat-id="${cat.id}">
            <div class="suggestion-cat-icon">
              <i class="fa-solid ${cat.icon}"></i>
            </div>
            <div class="suggestion-info">
              <span class="suggestion-name">${cat.name}</span>
              <span class="suggestion-cat"><span class="suggestion-category-tag">Category</span> ${cat.count || 'Explore services'}</span>
            </div>
            <i class="fa-solid fa-arrow-right text-muted" style="font-size: 0.8rem;"></i>
          </div>
        `).join('');
      }

      // Matched services (up to 5)
      html += matches.slice(0, 5).map(m => `
        <div class="suggestion-item" data-service-id="${m.id}">
          <img src="${m.image}" alt="${m.name}" class="suggestion-thumb" onerror="handleImageError(this, '${m.name}')">
          <div class="suggestion-info">
            <span class="suggestion-name">${m.name}</span>
            <span class="suggestion-cat"><i class="fa-solid fa-star text-gold"></i> ${m.rating} • ${m.duration}</span>
          </div>
          <span class="suggestion-price">₹${m.price}</span>
        </div>
      `).join('');

      listEl.innerHTML = html;

      // Attach clicks
      listEl.querySelectorAll('.suggestion-cat-item').forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          const catId = item.dataset.catId;
          hideSearchDropdown();
          router.navigate('category', { id: catId });
        });
      });

      listEl.querySelectorAll('.suggestion-item:not(.suggestion-cat-item)').forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          const svcId = item.dataset.serviceId;
          hideSearchDropdown();
          router.navigate('service', { id: svcId });
        });
      });
    }

    dropdown.classList.remove('hidden');
  }

  // Input events
  input.addEventListener('input', (e) => {
    handleSearchInput(e.target.value);
  });

  input.addEventListener('focus', () => {
    if (!input.value.trim()) {
      showPopularSuggestions();
    } else {
      handleSearchInput(input.value);
    }
  });

  // Clicking anywhere inside search box focuses input
  searchBox?.addEventListener('click', (e) => {
    if (e.target !== clearBtn && !clearBtn?.contains(e.target)) {
      input.focus();
    }
  });

  // Clicking search icon executes search
  searchIcon?.addEventListener('click', (e) => {
    e.stopPropagation();
    const val = input.value.trim();
    if (val) {
      hideSearchDropdown();
      router.navigate('search', { q: val });
    } else {
      input.focus();
      showPopularSuggestions();
    }
  });

  // Enter key searches
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = input.value.trim();
      hideSearchDropdown();
      router.navigate('search', { q: val });
    }
  });

  // Clear button
  clearBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    input.value = '';
    clearBtn.classList.add('hidden');
    input.focus();
    showPopularSuggestions();
  });

  // View all results button in footer
  viewAllBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const val = input.value.trim();
    hideSearchDropdown();
    router.navigate('search', { q: val });
  });

  // Global keyboard shortcut '/' to focus search & 'Escape' to close dropdown
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== input) {
      const activeTag = document.activeElement?.tagName;
      if (activeTag !== 'INPUT' && activeTag !== 'TEXTAREA' && activeTag !== 'SELECT') {
        e.preventDefault();
        input.focus();
        input.select();
        if (!input.value.trim()) {
          showPopularSuggestions();
        }
      }
    } else if (e.key === 'Escape' && dropdown && !dropdown.classList.contains('hidden')) {
      hideSearchDropdown();
      input.blur();
    }
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-search-wrap')) {
      hideSearchDropdown();
    }
  });
}

function hideSearchDropdown() {
  document.getElementById('searchSuggestionsBox')?.classList.add('hidden');
}

/* ===================================================================
   7. WISHLIST & QUICK ACTIONS
   =================================================================== */
function toggleWishlist(svcId, e) {
  if (e) e.stopPropagation();
  let wishlist = state.getWishlist();
  const index = wishlist.indexOf(svcId);
  const svc = SERVICES_DATA.find(s => s.id === svcId);

  if (index >= 0) {
    wishlist.splice(index, 1);
    state.setWishlist(wishlist);
    showToast(`Removed from favorites`, 'info');
  } else {
    wishlist.push(svcId);
    state.setWishlist(wishlist);
    showToast(`Saved "${svc ? svc.name : 'Service'}" to favorites`, 'success');
  }

  // Update heart buttons across document
  document.querySelectorAll(`.service-card[data-service-id="${svcId}"] .card-fav-btn`).forEach(btn => {
    btn.classList.toggle('active', wishlist.includes(svcId));
    btn.innerHTML = `<i class="${wishlist.includes(svcId) ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
  });
}

function quickAddToCart(svcId, e) {
  if (e) e.stopPropagation();
  const svc = SERVICES_DATA.find(s => s.id === svcId);
  if (!svc) return;

  const cart = state.getCart();
  const existing = cart.find(c => c.id === svcId);

  if (existing) {
    existing.quantity += 1;
    state.setCart(cart);
    showToast(`Increased quantity for "${svc.name}"`, 'success');
  } else {
    cart.push({
      id: svc.id,
      name: svc.name,
      price: svc.price,
      image: svc.image,
      duration: svc.duration,
      categoryId: svc.categoryId,
      quantity: 1
    });
    state.setCart(cart);
    showToast(`Added "${svc.name}" to cart`, 'success');
  }

  // Refresh cart button style on card
  document.querySelectorAll(`.service-card[data-service-id="${svcId}"] .btn-card-cart`).forEach(btn => {
    btn.classList.add('in-cart');
    btn.innerHTML = `<i class="fa-solid fa-check"></i>`;
  });
}

function copyCouponCode(code, e) {
  if (e) e.stopPropagation();
  navigator.clipboard.writeText(code).then(() => {
    showToast(`Coupon code "${code}" copied! Paste at checkout.`, 'success');
  }).catch(() => {
    showToast(`Code: ${code}`, 'info');
  });
}

function openOfferDetailsModal(code) {
  const coupon = COUPONS_DATA.find(c => c.code === code) || COUPONS_DATA[0];
  copyCouponCode(coupon.code);
  router.navigate('offers');
}

/* ===================================================================
   8. LOCATION SELECTOR MODAL
   =================================================================== */
function initLocationModal() {
  const btn = document.getElementById('locationBtn');
  const cityChipsContainer = document.getElementById('citiesChipsGrid');
  const localitiesList = document.getElementById('localitiesList');
  const selectedLabel = document.getElementById('selectedCityLabel');

  btn?.addEventListener('click', () => {
    renderCitiesAndLocalities();
    openModal('locationModal');
  });

  function renderCitiesAndLocalities(activeCityId = 'chhindwara') {
    const currentLoc = state.getLocation();
    const city = CITIES_DATA.find(c => c.id === activeCityId) || CITIES_DATA[0];
    selectedLabel.textContent = city.name;

    cityChipsContainer.innerHTML = CITIES_DATA.map(c => `
      <button class="city-chip ${c.id === activeCityId ? 'active' : ''}" onclick="changeActiveCity('${c.id}')">
        ${c.name}
      </button>
    `).join('');

    const localities = LOCALITIES_DATA[activeCityId] || ['City Center', 'Main Market'];
    localitiesList.innerHTML = localities.map(loc => `
      <div class="locality-item" onclick="selectLocality('${city.name}', '${city.state}', '${loc}')">
        <span><i class="fa-solid fa-location-dot text-primary"></i> ${loc}</span>
        <i class="fa-solid fa-arrow-right" style="font-size: 0.75rem; color: var(--text-light);"></i>
      </div>
    `).join('');
  }

  window.changeActiveCity = (cityId) => renderCitiesAndLocalities(cityId);

  window.selectLocality = (cityName, stateName, locality) => {
    state.setLocation({ city: cityName, state: stateName, locality: locality });
    closeModal('locationModal');
    showToast(`Service location set to ${locality}, ${cityName}`, 'success');
  };

  // GPS detect button simulation
  document.getElementById('detectLocationBtn')?.addEventListener('click', () => {
    state.setLocation({ city: 'Chhindwara', state: 'MP', locality: 'Gulabra' });
    closeModal('locationModal');
    showToast('Detected: Gulabra, Chhindwara (GPS Accurate)', 'success');
  });
}

/* ===================================================================
   9. NOTIFICATIONS DRAWER
   =================================================================== */
function initNotificationsDrawer() {
  const btn = document.getElementById('headerNotifBtn');
  const modal = document.getElementById('notificationsModal');
  const listEl = document.getElementById('notificationsList');
  const markReadBtn = document.getElementById('markAllNotifsReadBtn');
  const clearBtn = document.getElementById('clearAllNotifsBtn');

  btn?.addEventListener('click', () => {
    renderNotifications();
    openModal('notificationsModal');
  });

  function renderNotifications() {
    const unreadCount = DEMO_NOTIFICATIONS.filter(n => !n.read).length;
    document.getElementById('unreadNotifCountText').textContent = `${unreadCount} unread notification${unreadCount === 1 ? '' : 's'}`;
    document.getElementById('notifBadge').textContent = unreadCount;

    if (DEMO_NOTIFICATIONS.length === 0) {
      listEl.innerHTML = `
        <div style="padding: 32px 16px; text-align: center; color: var(--text-muted);">
          <i class="fa-regular fa-bell-slash" style="font-size: 2rem; margin-bottom: 8px; display: block;"></i>
          <p>No notifications at the moment.</p>
        </div>
      `;
      return;
    }

    listEl.innerHTML = DEMO_NOTIFICATIONS.map(n => `
      <div class="notification-card ${n.read ? '' : 'unread'}" onclick="markSingleNotifRead('${n.id}')">
        <div class="notif-icon ${n.iconClass}"><i class="fa-solid ${n.icon}"></i></div>
        <div class="notif-content">
          <strong>${n.title}</strong>
          <p>${n.message}</p>
          <span class="notif-time">${n.time}</span>
        </div>
      </div>
    `).join('');
  }

  window.markSingleNotifRead = (id) => {
    const notif = DEMO_NOTIFICATIONS.find(n => n.id === id);
    if (notif) notif.read = true;
    renderNotifications();
  };

  markReadBtn?.addEventListener('click', () => {
    DEMO_NOTIFICATIONS.forEach(n => n.read = true);
    renderNotifications();
    showToast('All notifications marked as read', 'info');
  });

  clearBtn?.addEventListener('click', () => {
    DEMO_NOTIFICATIONS.length = 0;
    renderNotifications();
    showToast('Notifications cleared', 'info');
  });
}

/* ===================================================================
   10. ADDRESS MANAGER & WISHLIST MODALS
   =================================================================== */
function openAddressManagerModal() {
  const profile = state.getProfile();
  const list = document.getElementById('savedAddressesList');

  list.innerHTML = (profile.addresses || []).map((addr, idx) => `
    <div style="padding: 12px; border: 1.5px solid var(--border-light); border-radius: var(--radius-md); margin-bottom: 10px; display: flex; justify-content: space-between; align-items: flex-start;">
      <div>
        <strong style="color: var(--primary-navy);">${addr.tag} ${addr.isDefault ? '<span class="badge-success-pill" style="font-size: 0.65rem; padding: 2px 6px;">Default</span>' : ''}</strong>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 3px;">${addr.full}</p>
        <span style="font-size: 0.75rem; color: var(--text-light);">${addr.city} - ${addr.pincode}</span>
      </div>
      <div>
        <button class="btn-text-danger btn-sm" onclick="deleteAddress(${idx})"><i class="fa-regular fa-trash-can"></i></button>
      </div>
    </div>
  `).join('');

  openModal('addressManagerModal');
}

function handleAddNewAddress(e) {
  e.preventDefault();
  const tag = document.getElementById('newAddressTitle').value.trim();
  const pincode = document.getElementById('newAddressPincode').value.trim();
  const full = document.getElementById('newAddressFull').value.trim();

  if (!tag || !full || pincode.length !== 6) {
    showToast('Please fill all address fields correctly', 'error');
    return;
  }

  const profile = state.getProfile();
  profile.addresses = profile.addresses || [];
  profile.addresses.push({
    id: `addr-${Date.now()}`,
    tag: tag,
    full: full,
    city: 'Chhindwara, MP',
    pincode: pincode,
    isDefault: false
  });

  state.setProfile(profile);
  showToast('New address saved', 'success');
  openAddressManagerModal();
}

function deleteAddress(idx) {
  const profile = state.getProfile();
  if (profile.addresses && profile.addresses[idx]) {
    profile.addresses.splice(idx, 1);
    state.setProfile(profile);
    openAddressManagerModal();
    showToast('Address deleted', 'info');
  }
}

function openWishlistModal() {
  const wishlist = state.getWishlist();
  const body = document.getElementById('wishlistModalBody');

  if (wishlist.length === 0) {
    body.innerHTML = `
      <div style="padding: 30px 10px; text-align: center; color: var(--text-muted);">
        <i class="fa-regular fa-heart" style="font-size: 2.2rem; color: var(--text-light); margin-bottom: 8px; display: block;"></i>
        <h4>No favorite services yet</h4>
        <p style="font-size: 0.85rem;">Click the heart icon on any service card to bookmark it here.</p>
      </div>
    `;
  } else {
    const items = SERVICES_DATA.filter(s => wishlist.includes(s.id));
    body.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${items.map(item => `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; border: 1px solid var(--border-light); border-radius: var(--radius-md);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <img src="${item.image}" alt="${item.name}" style="width: 48px; height: 48px; border-radius: 6px; object-fit: cover;">
              <div>
                <h4 style="font-size: 0.88rem; font-weight: 700;">${item.name}</h4>
                <span style="font-size: 0.85rem; font-weight: 800; color: var(--brand-blue);">₹${item.price}</span>
              </div>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-primary btn-sm" onclick="closeModal('wishlistModal'); openBookingModalForService('${item.id}');">Book</button>
              <button class="btn-text-danger btn-sm" onclick="toggleWishlist('${item.id}'); openWishlistModal();"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  openModal('wishlistModal');
}

// Help Modal & FAQ Accordion
function openHelpModal() {
  openModal('helpModal');
}

function toggleFaq(btn) {
  const parent = btn.closest('.faq-item');
  if (parent) parent.classList.toggle('active');
}

// Terms & Privacy Policy Modal
function openPolicyModal(type) {
  const title = document.getElementById('policyModalTitle');
  const body = document.getElementById('policyModalContent');

  if (type === 'privacy') {
    title.textContent = 'Privacy Policy';
    body.innerHTML = `
      <p><strong>Last Updated: October 2026</strong></p>
      <p>My City Service Technologies Pvt Ltd respects your privacy and is committed to protecting your personal data.</p>
      <h4 style="margin: 12px 0 6px;">1. Information We Collect</h4>
      <p>We collect your name, mobile phone number, delivery address, and scheduled appointment slots solely for service fulfillment.</p>
      <h4 style="margin: 12px 0 6px;">2. Local Storage Usage</h4>
      <p>This frontend showcase stores your preferences, cart items, and demo bookings directly in your device's browser memory (localStorage). No data is transmitted to unauthorized third-party trackers.</p>
      <h4 style="margin: 12px 0 6px;">3. Service Partner Security</h4>
      <p>Every technician dispatched to your doorstep is vetted through government ID checks and skill credentials.</p>
    `;
  } else {
    title.textContent = 'Terms & Conditions';
    body.innerHTML = `
      <p><strong>Standard Doorstep Service Agreement</strong></p>
      <h4 style="margin: 12px 0 6px;">1. Fixed Pricing & Transparency</h4>
      <p>All quotes shown on My City Service include labor and inspection charges. Any optional spare parts required will be quoted prior to installation with authentic bills.</p>
      <h4 style="margin: 12px 0 6px;">2. 7-Day Rework Warranty</h4>
      <p>If an electrical or repair issue reoccurs within 7 days of completed service, our technician will visit and resolve it at zero inspection cost.</p>
      <h4 style="margin: 12px 0 6px;">3. Cancellation Policy</h4>
      <p>Bookings may be cancelled or rescheduled with zero fees up to 2 hours prior to the scheduled appointment slot.</p>
    `;
  }

  openModal('policyModal');
}

/* ===================================================================
   11. HELPER & UTILITY FUNCTIONS
   =================================================================== */

// Modal open/close helpers
function openModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) {
    el.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) {
    el.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Close modals when clicking overlay backdrop
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.add('hidden');
    document.body.style.overflow = '';
  }
});

// Toast notification toaster
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const icons = {
    success: 'fa-circle-check text-green',
    error: 'fa-triangle-exclamation text-danger',
    info: 'fa-circle-info text-primary'
  };

  const toast = document.createElement('div');
  toast.className = `toast-message ${type}`;
  toast.innerHTML = `<i class="fa-solid ${icons[type] || 'fa-info'}"></i> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.25s forwards';
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}

// Web Share API with Clipboard Fallback
function shareContent(text) {
  if (navigator.share) {
    navigator.share({
      title: 'My City Service',
      text: text,
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(`${text} — Check out: ${window.location.href}`).then(() => {
      showToast('Link copied to clipboard for sharing!', 'success');
    }).catch(() => {
      showToast('Sharing link prepared', 'info');
    });
  }
}

// Safe Fallback for Any Remote Images that Fail to Load
function handleImageError(imgEl, fallbackName = 'Service') {
  imgEl.onerror = null; // prevent infinite loops
  imgEl.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(fallbackName)}&background=0b1f3a&color=fff&size=400&bold=true`;
}

// Sync UI Badges
function updateCartBadges() {
  const cart = state.getCart();
  const count = cart.reduce((a, b) => a + b.quantity, 0);
  const badges = document.querySelectorAll('#cartBadge, #mobileCartBadge');
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-flex' : 'none';
  });
}

function updateBookingBadges() {
  const bookings = state.getBookings();
  const upcomingCount = bookings.filter(b => b.status === 'upcoming').length;
  const bottomBadge = document.getElementById('bottomBookingsBadge');
  if (bottomBadge) {
    bottomBadge.textContent = upcomingCount;
    bottomBadge.style.display = upcomingCount > 0 ? 'inline-flex' : 'none';
  }
}

function updateWishlistBadges() {
  const wishlist = state.getWishlist();
  const badges = document.querySelectorAll('#wishlistBadge, #mobileWishlistBadge');
  badges.forEach(badge => {
    badge.textContent = wishlist.length;
    badge.style.display = wishlist.length > 0 ? 'inline-flex' : 'none';
  });
}

function syncLocationUI() {
  const loc = state.getLocation();
  const text = document.getElementById('headerLocationText');
  if (text) {
    text.textContent = `${loc.locality ? loc.locality + ', ' : ''}${loc.city}`;
  }
}

function syncProfileUI() {
  const profile = state.getProfile();
  if (profile.name) {
    const greeting = document.querySelector('.user-greeting');
    if (greeting) greeting.innerHTML = `${profile.name.split(' ')[0]} <i class="fa-solid fa-chevron-down avatar-arrow"></i>`;
  }
}

function updateNavHighlights(path) {
  // Desktop Nav links
  document.querySelectorAll('.desktop-nav .nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.nav === path);
  });

  // Mobile Bottom Nav items
  document.querySelectorAll('.mobile-bottom-nav .bottom-nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.nav === path);
  });
}

// Cart Icon click handler
document.getElementById('headerCartBtn')?.addEventListener('click', () => {
  router.navigate('cart');
});

// Wishlist Icon click handler
document.getElementById('headerWishlistBtn')?.addEventListener('click', () => {
  openWishlistModal();
});

// Home Page Most Booked Service Filter Buttons
document.getElementById('homeServiceFilterPills')?.addEventListener('click', (e) => {
  const btn = e.target.closest('.pill-btn');
  if (!btn) return;
  document.querySelectorAll('#homeServiceFilterPills .pill-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMostBookedServices(btn.dataset.filter);
});

/* ===================================================================
   12. APPLICATION INITIALIZATION
   =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Sync state to UI elements
  updateCartBadges();
  updateBookingBadges();
  updateWishlistBadges();
  syncLocationUI();
  syncProfileUI();

  // Initialize interactive modules
  initGlobalSearch();
  initLocationModal();
  initNotificationsDrawer();

  // Keyboard shortcut: Escape closes all modals; '/' or 'Ctrl+K' focuses search
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay:not(.hidden)').forEach(m => m.classList.add('hidden'));
      document.body.style.overflow = '';
      hideSearchDropdown();
    } else if (
      (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) &&
      !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)
    ) {
      e.preventDefault();
      const sInput = document.getElementById('globalSearchInput');
      if (sInput) {
        sInput.focus();
        sInput.select();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  });

  console.log('🚀 My City Service Application initialized with full vanilla JavaScript & localStorage reactivity.');
});
