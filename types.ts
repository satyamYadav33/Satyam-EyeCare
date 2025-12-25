export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  category: 'rimless' | 'full-rim' | 'sunglasses';
  shape: 'rectangle' | 'round' | 'aviator' | 'cat-eye';
  colors: string[];
  rating: number;
  reviews: number;
  image: string;
  description: string;
  isNew?: boolean;
  features: string[];
}

export interface CartItem extends Product {
  selectedColor: string;
  quantity: number;
}

export interface BookingSlot {
  id: string;
  time: string;
  doctor: string;
  available: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export type SortOption = 'price-low' | 'price-high' | 'newest';
