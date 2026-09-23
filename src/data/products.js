// Static product catalog for ShopSphere.
// In a real app this would come from a backend API; kept local here to keep
// the project frontend-only and easy to run/deploy.

const products = [
  {
    id: 1,
    title: "Wireless Noise-Cancelling Headphones",
    price: 129.99,
    category: "Electronics",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    description:
      "Over-ear Bluetooth headphones with active noise cancellation, 30-hour battery life, and plush memory-foam ear cushions.",
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 89.5,
    category: "Electronics",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    description:
      "Track heart rate, sleep, and workouts with a bright AMOLED display and 7-day battery life. Water resistant to 50m.",
  },
  {
    id: 3,
    title: "Classic Leather Sneakers",
    price: 74.0,
    category: "Fashion",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=600&q=80",
    description:
      "Minimalist white leather sneakers with a cushioned insole and durable rubber outsole. Goes with everything.",
  },
  {
    id: 4,
    title: "Cotton Crewneck T-Shirt",
    price: 19.99,
    category: "Fashion",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    description:
      "Soft 100% organic cotton tee with a relaxed fit. Pre-shrunk and available in multiple colors.",
  },
  {
    id: 5,
    title: "Stainless Steel Water Bottle",
    price: 24.95,
    category: "Home",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    description:
      "Double-walled vacuum insulated bottle keeps drinks cold for 24 hours or hot for 12. Leak-proof lid.",
  },
  {
    id: 6,
    title: "Ceramic Pour-Over Coffee Set",
    price: 42.0,
    category: "Home",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    description:
      "Handcrafted ceramic dripper and matching mug for a smooth, barista-quality pour-over at home.",
  },
  {
    id: 7,
    title: "Mechanical Keyboard",
    price: 99.99,
    category: "Electronics",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    description:
      "Compact 75% mechanical keyboard with hot-swappable switches, RGB backlighting, and USB-C connectivity.",
  },
  {
    id: 8,
    title: "Canvas Backpack",
    price: 54.5,
    category: "Fashion",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    description:
      "Water-resistant canvas backpack with a padded 15-inch laptop sleeve and multiple organizer pockets.",
  },
  {
    id: 9,
    title: "Scented Soy Candle",
    price: 16.0,
    category: "Home",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=600&q=80",
    description:
      "Hand-poured soy wax candle with a 45-hour burn time. Notes of sandalwood, vanilla, and amber.",
  },
  {
    id: 10,
    title: "Portable Bluetooth Speaker",
    price: 45.99,
    category: "Electronics",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    description:
      "Rugged, waterproof speaker with 360-degree sound, deep bass, and 20 hours of playtime.",
  },
  {
    id: 11,
    title: "Sunglasses - Polarized",
    price: 34.99,
    category: "Fashion",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    description:
      "UV400 polarized lenses with a lightweight acetate frame. Includes a hard case and cleaning cloth.",
  },
  {
    id: 12,
    title: "Indoor Plant - Monstera",
    price: 29.0,
    category: "Home",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
    description:
      "A lush, easy-care Monstera Deliciosa in a minimalist pot. Perfect for brightening any living space.",
  },
];

export default products;

export const categories = ["All", "Electronics", "Fashion", "Home"];
