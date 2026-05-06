// Sample product catalog
const PRODUCTS = [
  { id: "sofa-soren", name: "Søren 3-Seater Sofa", price: 899, category: "Living Room", material: "Fabric", image: "images/sofa-beige.jpg", rating: 4.7, reviews: 128, stock: 14, description: "A generous three-seater with deep cushions, soft beige weave, and slim oak legs. Designed for long evenings and slow mornings." },
  { id: "armchair-luna", name: "Luna Lounge Armchair", price: 449, category: "Living Room", material: "Wool", image: "images/armchair-gray.jpg", rating: 4.6, reviews: 86, stock: 22, description: "Sculpted curves and a single deep cushion in charcoal wool. Pairs beautifully with any sofa." },
  { id: "table-bjork", name: "Björk Coffee Table", price: 329, category: "Living Room", material: "Solid Oak", image: "images/table-oak.jpg", rating: 4.8, reviews: 204, stock: 31, description: "Solid oak slab on substantial legs. Honest joinery, finished by hand." },
  { id: "chair-finn", name: "Finn Lounge Chair", price: 279, category: "Living Room", material: "Solid Oak", image: "images/chair-wood.jpg", rating: 4.5, reviews: 67, stock: 40, description: "Slatted back, oiled oak frame, and a soft linen cushion. A modern take on a Nordic classic." },
  { id: "bed-malm", name: "Malm Platform Bed", price: 749, category: "Bedroom", material: "Oak Veneer", image: "images/bed-oak.jpg", rating: 4.7, reviews: 312, stock: 9, description: "Low-profile oak frame with a clean headboard. Quiet, sturdy, and built to last." },
  { id: "cabinet-vik", name: "Vik Storage Cabinet", price: 599, category: "Bedroom", material: "Oak Veneer", image: "images/cabinet-oak.jpg", rating: 4.6, reviews: 91, stock: 17, description: "Four soft-close doors and adjustable shelves behind a calm oak façade." },
  { id: "desk-arne", name: "Arne Writing Desk", price: 389, category: "Office", material: "Lacquered Wood", image: "images/desk-white.jpg", rating: 4.5, reviews: 142, stock: 25, description: "A bright, white workspace with three drawers and tapered oak legs." },
  { id: "table-dining-bjork", name: "Björk Dining Table", price: 899, category: "Dining", material: "Solid Oak", image: "images/table-oak.jpg", rating: 4.9, reviews: 58, stock: 6, description: "Seats six. The same honest oak slab, scaled for shared meals." },
];

const CATEGORIES = [
  { name: "Living Room", icon: "🛋️" },
  { name: "Bedroom", icon: "🛏️" },
  { name: "Office", icon: "🪑" },
  { name: "Dining", icon: "🍽️" },
];
const MATERIALS = ["Fabric", "Wool", "Solid Oak", "Oak Veneer", "Lacquered Wood"];

// Demo accounts (client-side only — for prototype)
const DEMO_ACCOUNTS = [
  { email: "superadmin@demo.com", password: "password123", role: "superadmin", name: "Super Admin" },
  { email: "admin@demo.com",      password: "password123", role: "admin",      name: "Store Admin" },
  { email: "user@demo.com",       password: "password123", role: "user",       name: "Jane Customer" },
];
