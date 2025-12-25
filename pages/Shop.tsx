import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, X } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { formatPrice, cn } from '../lib/utils';
import { useCartStore } from '../store';
import toast from 'react-hot-toast';

export const Shop = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

  const addItem = useCartStore(state => state.addItem);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, priceRange]);

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    addItem(product, product.colors[0]); // Default color
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Shop Eyewear</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search frames (e.g., 'Aviator', 'Rimless')..." 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-medical-500 focus:border-transparent outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              onClick={() => setFilterOpen(!filterOpen)}
              className="md:hidden flex items-center justify-center px-4 py-3 bg-white border border-gray-200 rounded-xl font-medium text-slate-700"
            >
              <Filter className="h-5 w-5 mr-2" /> Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 flex gap-8">
        {/* Sidebar Filters (Desktop) */}
        <aside className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:w-64 md:shadow-none md:bg-transparent md:block",
          filterOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="h-full overflow-y-auto p-6 md:p-0">
             <div className="flex justify-between items-center md:hidden mb-6">
               <h2 className="text-xl font-bold">Filters</h2>
               <button onClick={() => setFilterOpen(false)}><X/></button>
             </div>
             
             <div className="space-y-8">
               <div>
                 <h3 className="font-bold text-slate-900 mb-3">Category</h3>
                 <div className="space-y-2">
                   {['all', 'rimless', 'full-rim', 'sunglasses'].map(cat => (
                     <label key={cat} className="flex items-center space-x-2 cursor-pointer">
                       <input 
                         type="radio" 
                         name="category" 
                         checked={selectedCategory === cat}
                         onChange={() => setSelectedCategory(cat)}
                         className="text-medical-600 focus:ring-medical-500"
                       />
                       <span className="capitalize text-slate-600">{cat}</span>
                     </label>
                   ))}
                 </div>
               </div>

               <div>
                 <h3 className="font-bold text-slate-900 mb-3">Price Range</h3>
                 <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                       <input type="radio" name="price" onChange={() => setPriceRange([0, 5000])} defaultChecked className="text-medical-600"/>
                       <span className="text-slate-600">All Prices</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                       <input type="radio" name="price" onChange={() => setPriceRange([0, 999])} className="text-medical-600"/>
                       <span className="text-slate-600">Under ₹999</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                       <input type="radio" name="price" onChange={() => setPriceRange([1000, 1999])} className="text-medical-600"/>
                       <span className="text-slate-600">₹1000 - ₹1999</span>
                    </label>
                 </div>
               </div>
             </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
             <div className="text-center py-20">
               <p className="text-xl text-slate-500">No frames found matching your criteria.</p>
               <button onClick={() => {setSearchQuery(''); setSelectedCategory('all')}} className="mt-4 text-medical-600 font-medium hover:underline">Clear all filters</button>
             </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all group">
                  <Link to={`/product/${product.id}`}>
                    <div className="h-56 overflow-hidden bg-gray-50 relative">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  </Link>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                         <p className="text-xs text-slate-500 uppercase font-semibold">{product.category}</p>
                         <h3 className="font-bold text-slate-900 truncate">{product.name}</h3>
                      </div>
                      <div className="flex items-center bg-green-50 px-2 py-1 rounded text-xs font-bold text-green-700">
                        {product.rating} ★
                      </div>
                    </div>
                    <div className="flex items-end justify-between mt-4">
                      <div>
                        <span className="text-xs text-slate-400 line-through block">{formatPrice(product.originalPrice)}</span>
                        <span className="text-lg font-bold text-medical-900">{formatPrice(product.price)}</span>
                      </div>
                      <button 
                        onClick={(e) => handleAddToCart(e, product)}
                        className="bg-medical-50 text-medical-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-medical-900 hover:text-white transition-colors"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
