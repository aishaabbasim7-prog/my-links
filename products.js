const products = [

/* =========================
   🛋️ HOME DECOR
========================= */
{
  id: "p1",
  title: "Modern Gold Bird Sculptures",
  price: "$14.99",
  rating: 4.7,
  image: "https://m.media-amazon.com/images/I/71SKqRaBtwL._AC_SL1500_.jpg",
  category: "decor",
  badge: "✨ Trending",
  short: "Elegant gold bird statues for modern luxury spaces.",
  description: "Elevate your home with these modern gold bird sculptures—perfect for styling shelves, coffee tables, or office desks. A minimalist yet luxurious accent that instantly makes your space feel designer-curated.",
  tags: ["gold decor", "bird figurine", "modern decor", "luxury home"],
  affiliate: "https://amzn.to/4tZ44BX"
},

{
  id: "vasagle-round-coffee-table-set-2",
  title: "VASAGLE Round Coffee Table Set of 2",
  price: "$49.82",
  rating: 4.7,
  image: "https://m.media-amazon.com/images/I/71HwRjWEjuL._AC_SL1500_.jpg",
  category: "decor",
  badge: "✨ Bestseller",
  short: "Modern nesting coffee tables with sleek minimalist design.",
  description: "Stylish set of 2 round nesting coffee tables featuring a white tabletop and black steel frame. Includes a removable top for hidden storage—perfect for modern living rooms, apartments, and aesthetic home setups.",
  tags: ["coffee table", "nesting table", "living room", "modern decor", "minimalist", "home furniture"],
  affiliate: "https://amzn.to/4d2Xk0b"
},
{
  id: "p4",
  title: "Farmhouse Teal Cushion Covers Set of 4 (45x45 cm)",
  price: "$20.19",
  rating: 4.4,
  image: "https://m.media-amazon.com/images/I/71YUzdszBmL._AC_SL1500_.jpg",
  category: "decor",
  badge: "✨ Amazon Choice",
  short: "Elegant teal textured cushion covers for cozy modern interiors.",
  description: "Set of 4 farmhouse-style cushion covers in a 45x45 cm size. Designed with textured patchwork fabric in a stylish teal tone, perfect for sofas, beds, chairs, office spaces, and modern home styling. Adds a cozy, aesthetic upgrade to any room instantly.",
  tags: [
    "cushion covers",
    "pillow covers",
    "home decor",
    "sofa decor",
    "farmhouse style",
    "modern living room",
    "teal decor",
    "interior styling"
  ],
   affiliate: "https://amzn.to/3QXvPws"
},
{
  id: "p5",
  title: "Sunflower Paper Towel Holder – Farmhouse Kitchen Decor",
  price: "$21.55",
  rating: 4.4,
  image: "https://m.media-amazon.com/images/I/61EouKc6UrL._AC_SL1200_.jpg",
  category: "decor",
  badge: "🌻 Best Gift Idea",
  short: "Rustic sunflower paper towel holder for warm farmhouse kitchens.",
  description: "Beautiful sunflower-themed paper towel holder designed for farmhouse and rustic kitchen aesthetics. Made with durable black metal and detailed sunflower accents, it adds a cozy country charm to countertops. Perfect as a housewarming or gift item for kitchen lovers.",
  tags: [
    "kitchen decor",
    "paper towel holder",
    "farmhouse kitchen",
    "sunflower decor",
    "rustic home",
    "country style",
    "kitchen accessories",
    "gift idea"
  ],
  affiliate: "https://amzn.to/4sMaaod"
},

/* =========================
   ⚡ GADGETS
========================= */
{
  id: "p6",
  title: "Coway Airmega AP-1512HH(W) Air Purifier",
  price: "$229.99",
  rating: 4.6,
  image: "https://m.media-amazon.com/images/I/61Cgh4ol4oL._AC_SL1500_.jpg",
  category: "gadgets",
  badge: "🔥 Best Seller",
  short: "True HEPA air purifier with smart air quality monitoring.",
  description: "The Coway Airmega AP-1512HH(W) is a powerful True HEPA air purifier designed to improve indoor air quality. It features real-time air monitoring, auto mode, timer, filter indicator, and eco mode for energy efficiency. Ideal for modern homes seeking clean, fresh air.",
  tags: ["air purifier", "Coway", "HEPA filter", "home gadget", "clean air"],
  affiliate: "https://amzn.to/3Qop1b4"
},

{
  id: "p7",
  title: "Portable Foldable Neck Fan – Rechargeable 1600mAh",
  price: "$13.82",
  rating: 4.7,
  image: "https://ae-pic-a1.aliexpress-media.com/kf/S38ae55f73653480d85b5f9e005fdf310Q.jpg_220x220q75.jpg_.avif",
  category: "gadgets",
  badge: "🔥 Best Seller",
  short: "Hands-free cooling neck fan for summer comfort & outdoor sports.",
  description: "Portable foldable neck fan with powerful 1600mAh rechargeable battery. Designed for hands-free cooling during sports, travel, commuting, and hot summer days. Lightweight, silent airflow, and modern wearable design.",
  tags: [
    "neck fan",
    "portable fan",
    "summer gadget",
    "cooling device",
    "rechargeable fan",
    "travel gadget",
    "sports accessories"
  ],
  affiliate: "https://s.click.aliexpress.com/e/_c3gyTc6f",
 
},
{
  id: "p8",
  title: "Smart Coffee Mug Warmer with Auto Shut Off – Desk Heater Plate",
  price: "$32.31",
  rating: 4.6,
  image: "https://m.media-amazon.com/images/I/71sTNNKjANL._AC_SL1500_.jpg",
  category: "gadgets",
  badge: "☕ Amazon’s Choice",
  short: "Keep your coffee, tea, or milk warm all day at your desk.",
  description: "Smart coffee mug warmer with adjustable temperature settings and auto shut-off safety feature. Designed for desks, offices, and home use. Works with most cups and mugs, also doubles as a candle wax warmer. Perfect for work-from-home comfort and cozy productivity.",
  tags: [
    "coffee mug warmer",
    "desk gadget",
    "home office",
    "coffee accessories",
    "tea warmer",
    "work from home",
    "gift idea",
    "kitchen gadget"
  ],
  affiliate: "https://amzn.to/3QZ7Ug7"
},
   {
  id: "p9",
  title: "Ultenic 3-in-1 Robot Vacuum & Mop with LiDAR Navigation",
  price: "$188.52",
  rating: 4.7,
  image: "https://m.media-amazon.com/images/I/81TDmHmWJbL._AC_SL1500_.jpg",
  category: "gadgets",
  badge: "🤖 Smart Home Upgrade",
  short: "Automatic robot vacuum & mop with powerful 8000Pa suction.",
  description: "Advanced 3-in-1 robot vacuum cleaner with sweeping, vacuuming, and mopping functions. Features 8000Pa suction power, 200-minute runtime, and precision LiDAR navigation for smart mapping. Supports multiple floor maps, no-go zones, and app control. Ideal for carpets, hard floors, and pet hair cleaning.",
  tags: [
    "robot vacuum",
    "smart home",
    "floor cleaner",
    "mop robot",
    "pet hair cleaner",
    "home automation",
    "cleaning gadget",
    "AI vacuum"
  ],
  affiliate: "https://amzn.to/4eFygxy"
}

];
