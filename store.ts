import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from './types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, color: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  toggleCart: () => void;
  clearCart: () => void;
  subtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (product, color) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === product.id && i.selectedColor === color);

        if (existingItem) {
          set({
            items: currentItems.map((i) =>
              i.id === product.id && i.selectedColor === color
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
            isOpen: true,
          });
        } else {
          set({ items: [...currentItems, { ...product, selectedColor: color, quantity: 1 }], isOpen: true });
        }
      },
      removeItem: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
      updateQuantity: (id, delta) => {
        const currentItems = get().items;
        set({
          items: currentItems.map((i) => {
            if (i.id === id) {
              const newQty = Math.max(1, i.quantity + delta);
              return { ...i, quantity: newQty };
            }
            return i;
          }),
        });
      },
      toggleCart: () => set({ isOpen: !get().isOpen }),
      clearCart: () => set({ items: [] }),
      subtotal: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    {
      name: 'satyam-cart-storage',
    }
  )
);
