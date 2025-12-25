import { Product, BlogPost } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Satyam AirLite Titanium',
    price: 1499,
    originalPrice: 2999,
    category: 'rimless',
    shape: 'rectangle',
    colors: ['silver', 'gold', 'black'],
    rating: 4.8,
    reviews: 124,
    image: 'https://picsum.photos/id/10/800/600',
    description: 'Featherlight titanium rimless frames, perfect for all-day wear without nose marks. Designed for the professionals of Ludhiana.',
    features: ['Titanium Build', 'Anti-Glare Lens', 'Blue Cut'],
    isNew: true
  },
  {
    id: '2',
    name: 'Punjab Classic Wayfarer',
    price: 999,
    originalPrice: 1999,
    category: 'full-rim',
    shape: 'rectangle',
    colors: ['black', 'tortoise', 'blue'],
    rating: 4.6,
    reviews: 89,
    image: 'https://picsum.photos/id/15/800/600',
    description: 'Timeless sturdy acetate frames. The go-to choice for students and creatives.',
    features: ['Acetate', 'Scratch Resistant', 'Flexible Hinges']
  },
  {
    id: '3',
    name: 'Ludhiana Aviator Gold',
    price: 1899,
    originalPrice: 3500,
    category: 'sunglasses',
    shape: 'aviator',
    colors: ['gold', 'black'],
    rating: 4.9,
    reviews: 210,
    image: 'https://picsum.photos/id/20/800/600',
    description: 'Premium polarized aviators. Protect your eyes from the harsh sun with style.',
    features: ['Polarized', 'UV400', 'Stainless Steel']
  },
  {
    id: '4',
    name: 'TechBlue Square',
    price: 1299,
    originalPrice: 2499,
    category: 'full-rim',
    shape: 'rectangle',
    colors: ['transparent', 'grey'],
    rating: 4.7,
    reviews: 56,
    image: 'https://picsum.photos/id/26/800/600',
    description: 'Crystal clear transparent frames with best-in-class blue light blocking technology.',
    features: ['Zero Power', 'Blue Light Block', 'TR90 Material']
  },
  {
    id: '5',
    name: 'Retro Round Harry',
    price: 1199,
    originalPrice: 2100,
    category: 'full-rim',
    shape: 'round',
    colors: ['black', 'gold'],
    rating: 4.5,
    reviews: 45,
    image: 'https://picsum.photos/id/35/800/600',
    description: 'Vintage inspired round frames. Perfect for high prescriptions.',
    features: ['Metal Alloy', 'High Index Compatible', 'Adjustable Pads']
  },
  {
    id: '6',
    name: 'Cat-Eye Bella',
    price: 1599,
    originalPrice: 2800,
    category: 'full-rim',
    shape: 'cat-eye',
    colors: ['red', 'black', 'pink'],
    rating: 4.8,
    reviews: 112,
    image: 'https://picsum.photos/id/40/800/600',
    description: 'Bold and beautiful. Lift your look with these premium cat-eye frames.',
    features: ['Acetate', 'Spring Hinges', 'Oversized']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '5 Myths About Myopia You Need to Stop Believing',
    excerpt: 'Does eating carrots really cure eyesight? Dr. Satyam debunks common myths prevalent in Punjab.',
    date: 'Oct 12, 2023',
    readTime: '4 min read',
    image: 'https://picsum.photos/id/60/800/400'
  },
  {
    id: '2',
    title: 'Blue Light: Is It Really Damaging Your Eyes?',
    excerpt: 'With increased screen time, digital eye strain is rising. Learn how to protect yourself.',
    date: 'Nov 05, 2023',
    readTime: '3 min read',
    image: 'https://picsum.photos/id/2/800/400'
  },
  {
    id: '3',
    title: 'How to Choose the Perfect Frame for Your Face Shape',
    excerpt: 'Round, Oval, Square? Find the perfect fit for your face with our comprehensive guide.',
    date: 'Dec 01, 2023',
    readTime: '6 min read',
    image: 'https://picsum.photos/id/3/800/400'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    text: "I suffered from headaches due to my -4.5 number. Dr. Satyam's diagnosis was spot on, and the specs cost me half of what I paid at the mall!",
    author: "Rahul Sharma",
    location: "Model Town, Ludhiana"
  },
  {
    id: 2,
    text: "Ordered the rimless titanium. Delivery was same-day in Sarabha Nagar. Amazing quality.",
    author: "Preeti Kaur",
    location: "Sarabha Nagar, Ludhiana"
  },
  {
    id: 3,
    text: "Finally a place that doesn't push expensive brands. Honest advice and great collection.",
    author: "Amit Verma",
    location: "Civil Lines, Ludhiana"
  }
];
