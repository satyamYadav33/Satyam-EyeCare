import React from 'react';
import { useCartStore } from '../store';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { formatPrice } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Cart = () => {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, subtotal } = useCartStore();
  const total = subtotal();
  const shipping = total > 500 ? 0 : 99;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-slate-900 flex items-center">
                <ShoppingBag className="mr-2 h-5 w-5" /> Your Cart ({items.length})
              </h2>
              <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="text-center py-20">
                  <ShoppingBag className="h-16 w-16 text-gray-200 mx-auto mb-4" />
                  <p className="text-gray-500">Your cart is empty.</p>
                  <button onClick={toggleCart} className="mt-4 text-medical-600 font-bold hover:underline">Start Shopping</button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.selectedColor}`} className="flex space-x-4">
                    <div className="h-24 w-24 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h3 className="font-bold text-slate-900 text-sm line-clamp-1">{item.name}</h3>
                        <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 capitalize mb-3">Color: {item.selectedColor}</p>
                      <div className="flex justify-between items-center">
                         <div className="flex items-center border border-gray-200 rounded-lg">
                           <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 px-2 hover:bg-gray-100 text-gray-600"
                           ><Minus size={14}/></button>
                           <span className="text-sm font-bold px-2">{item.quantity}</span>
                           <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 px-2 hover:bg-gray-100 text-gray-600"
                           ><Plus size={14}/></button>
                         </div>
                         <span className="font-bold text-slate-900">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-gray-100 p-6 bg-gray-50">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? <span className="text-green-600 font-bold">FREE</span> : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-slate-900 pt-3 border-t border-gray-200">
                    <span>Total</span>
                    <span>{formatPrice(total + shipping)}</span>
                  </div>
                </div>
                <button 
                  onClick={() => alert("Proceeding to Razorpay Mock Checkout...")}
                  className="w-full bg-medical-900 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  Checkout Securely
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
