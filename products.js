const products = [

/* =========================
   🛋️ HOME DECOR
========================= */
{
  id: "p1",
  title: "Modern Gold Bird Sculptures",
  price: "Check Latest Price on Amazon",
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
  id: "2",
  title: "VASAGLE Round Coffee Table Set of 2",
  price: "Check Latest Price on Amazon",
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
  id: "p3",
  title: "Farmhouse Teal Cushion Covers Set of 4 (45x45 cm)",
  price: "Check Latest Price on Amazon",
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
  id: "p4",
  title: "Sunflower Paper Towel Holder – Farmhouse Kitchen Decor",
  price: "Check Latest Price on Amazon",
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
{
  id: "p5",
  title: "Modern Black & Gold 3-Light Bathroom Vanity Fixture with Glass Shades",
  price: "Check Latest Price on Amazon",
  rating: 4.6,
  image: "https://m.media-amazon.com/images/I/71V+5NXFouL._AC_SL1500_.jpg",
  category: "decor",
  badge: "✨ Luxury Upgrade",
  short: "Elegant black and gold vanity lighting for modern bathroom mirrors.",
  description: "Stylish 3-light bathroom vanity fixture featuring a modern black and brushed gold finish with square glass shades. Designed for installation over mirrors, it enhances bathrooms, bedrooms, and hallways with a warm, luxury hotel-style glow. Perfect for modern and contemporary home interiors.",
  tags: [
    "bathroom lighting",
    "vanity light",
    "wall sconce",
    "modern lighting",
    "bathroom decor",
    "luxury home",
    "gold fixtures",
    "mirror lighting"
  ],
   affiliate: "https://amzn.to/4mQg6eE"
},
{
  id: "p6",
  title: "Natural Rattan Fruit Basket Set (Set of 3)",
  price: "Check Latest Price on Amazon",
  rating: 4.7,
  image: "https://m.media-amazon.com/images/I/814L+W9ougL._AC_SL1500_.jpg",
  category: "decor",
  badge: "🌿 Bestseller",
  short: "Handwoven rattan baskets for stylish kitchen and dining organization.",
  description: "Upgrade your home with this beautifully handwoven natural rattan fruit basket set of 3. Perfect for storing fruits, bread, or serving essentials while adding a warm boho, farmhouse, or coastal aesthetic to your kitchen or dining space. A functional yet elegant décor piece designed for modern minimalist homes.",
  tags: ["rattan basket", "kitchen storage", "boho decor", "wicker organizer", "farmhouse kitchen"],
  affiliate: "https://amzn.to/4e2XXYL"
},
{
  "id": "potato-estudiosa-motivation",
  "title": "Potato Estudiosa® Student Motivation Gift",
  "price": "Check Latest Price on Amazon",
  "rating": 4.4,
  "image": "https://m.media-amazon.com/images/I/71GTkmeD8FL._AC_SL1500_.jpg",
  "category": "decor",
  "badge": "📚 Study Must-Have",
  "short": "Cute motivational potato decor for study desks.",
  "description": "Transform your study space into a focused, aesthetic zone with this adorable Potato Estudiosa® figurine. Designed to spark motivation and bring a smile during long study sessions, it's the perfect desk companion for students, teens, and exam warriors. A small detail that creates a big productivity vibe—ideal for aesthetic study setups and cozy desk styling.",
  "tags": ["study decor", "student gift", "desk aesthetic", "motivation decor", "study room ideas"],
  "affiliate": "https://amzn.to/3P5Yor3"
},
{
  "id": "mixed-beach-seashells-starfish-decor",
  "title": "Mixed Beach Seashells & Starfish Set (9 Types)",
  "price": "Check Latest Price on Amazon",
  "rating": 4.4,
  "image": "https://m.media-amazon.com/images/I/81ZRnZAoqgL._AC_SL1500_.jpg",
  "category": "decor",
  "badge": "🏖️ Summer Favorite",
  "short": "Natural seashells & starfish for coastal home styling.",
  "description": "Bring effortless coastal elegance into your space with this mixed seashell and starfish set. Featuring 9 varieties of natural shells, this collection is perfect for styling glass vases, coffee tables, or beach-themed decor. Instantly create that breezy, seaside vibe—whether you're decorating a summer apartment, hosting a coastal party, or curating a Pinterest-worthy shelf.",
  "tags": ["coastal decor", "beach house decor", "summer styling", "seashell decor", "vase fillers"],
  "affiliate": "https://amzn.to/4mP5Z9U"
},
{
  "id": "smuxee-nesting-coffee-table-set",
  "title": "Smuxee Nesting Coffee Table Set of 2",
  "price": "Check Latest Price on Amazon",
  "rating": 4.6,
  "image": "https://m.media-amazon.com/images/I/91EfC6N5JWL._AC_SL1500_.jpg",
  "category": "decor",
  "badge": "✨ Best Seller",
  "short": "Modern nesting coffee tables for stylish small spaces.",
  "description": "Upgrade your living room instantly with this elegant nesting coffee table set. Featuring warm wood-grain tops and sleek industrial metal frames, these round tables bring designer style without the designer price tag. Use them together for a layered luxury look or separately as side tables in apartments, bedrooms, balconies, or cozy reading corners. Perfect for modern, minimalist, and Pinterest-inspired interiors.",
  "tags": ["coffee table", "small living room decor", "modern furniture", "nesting table", "luxury apartment decor"],
  "affiliate": "https://amzn.to/4eNyMJV"
},
{
  "id": "aubcee-faux-pink-dahlia-vase",
  "title": "Aubcee Faux Pink Dahlia Flowers with Vase",
  "price": "Check Latest Price on Amazon",
  "rating": 4.6,
  "image": "https://m.media-amazon.com/images/I/81BQdMXAkoL._AC_SL1500_.jpg",
  "category": "decor",
  "badge": "🌸 Trending",
  "short": "Elegant pink faux flowers in vase for chic home styling.",
  "description": "Add instant softness and elegance to your space with these faux pink dahlia flowers in a decorative vase. Designed to look fresh year-round, this stylish arrangement brings a romantic, luxury feel to coffee tables, bathroom counters, entryways, and shelves. Perfect for creating that polished Pinterest home aesthetic without the upkeep of real flowers.",
  "tags": ["faux flowers", "pink decor", "coffee table decor", "feminine home decor", "luxury vase decor"],
  "affiliate": "https://amzn.to/4sZDSpV"
},
{
  "id": "nacome-solar-turtle-garden-statue",
  "title": "Nacome Solar Turtle Garden Statue with LED Lights",
  "price": "Check Latest Price on Amazon",
  "rating": 4.5,
  "image": "https://m.media-amazon.com/images/I/71Mq0xq6M4L._AC_SL1500_.jpg",
  "category": "decor",
  "badge": "🐢 #1 Best Seller",
  "short": "Whimsical solar turtle statue with glowing garden lights.",
  "description": "Bring charm and warmth to your outdoor space with this adorable solar turtle garden statue. Featuring a succulent-style shell and 7 soft LED lights, it automatically glows at night to create a magical garden atmosphere. Perfect for patios, balconies, porches, flower beds, or as a thoughtful gift for moms, grandmas, and nature lovers.",
  "tags": ["garden decor", "solar lights", "patio decor", "gift for mom", "outdoor statue"],
  "affiliate": "https://amzn.to/4d26nh0"
},
   

/* =========================
   ⚡ GADGETS
========================= */
{
  id: "p7",
  title: "Coway Airmega AP-1512HH(W) Air Purifier",
  price: "Check Latest Price on Amazon",
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
  id: "p8",
  title: "Portable Foldable Neck Fan – Rechargeable 1600mAh",
  price: "Check Latest Price on Amazon",
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
  affiliate: "https://s.click.aliexpress.com/e/_c3gyTc6f"
 
},
{
  id: "p9",
  title: "Smart Coffee Mug Warmer with Auto Shut Off – Desk Heater Plate",
  price: "Check Latest Price on Amazon",
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
  id: "p10",
  title: "Ultenic 3-in-1 Robot Vacuum & Mop with LiDAR Navigation",
  price: "Check Latest Price on Amazon",
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
},
{
  id: "p11",
  title: "Fullstar 6-in-1 Vegetable Chopper & Mandoline Slicer",
  price: "Check Latest Price on Amazon",
  rating: 4.4,
  image: "https://m.media-amazon.com/images/I/81ViXXJKNhL._AC_SL1500_.jpg",
  category: "gadgets",
  badge: "🔥 Amazon’s Choice",
  short: "Fast 6-in-1 vegetable chopper for effortless meal prep.",
  description: "Compact 6-in-1 vegetable chopper and mandoline slicer designed for quick and easy food preparation. Includes dicing, slicing, julienne cutting, and grating functions. Perfect for onions, cucumbers, tomatoes, potatoes, cheese, and salads. Makes cooking faster, cleaner, and more efficient.",
  tags: [
    "vegetable chopper",
    "kitchen gadget",
    "mandoline slicer",
    "food prep tool",
    "salad cutter",
    "onion chopper",
    "kitchen accessories",
    "meal prep"
  ],
 
  affiliate: "https://amzn.to/4u1NPnK"
},
{
  id: "12",
  title: "AMACOOL Portable Waist Clip-On Fan (10000mAh Rechargeable)",
  price: "Check Latest Price on Amazon",
  rating: 4.6,
  image: "https://m.media-amazon.com/images/I/61SQgVl99eL._AC_SL1500_.jpg",
  category: "gadgets",
  badge: "❄️ Amazon’s Choice",
  short: "Powerful wearable waist fan for cooling comfort on the go.",
  description: "Stay cool anywhere with the AMACOOL Portable Waist Clip-On Fan featuring a powerful 10000mAh rechargeable battery. Designed for hands-free cooling, it easily clips onto your belt or shirt—perfect for outdoor work, travel, camping, hiking, or hot summer days. A must-have personal cooling gadget for men and women who need strong airflow on the move.",
  tags: ["portable fan", "waist fan", "rechargeable fan", "summer gadget", "outdoor cooling", "travel essentials"],
  affiliate: "https://amzn.to/3P0qQdV"
}
   

];
