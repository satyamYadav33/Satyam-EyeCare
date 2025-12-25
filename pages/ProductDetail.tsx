import React, { useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Check, Shield, Star, Truck, Camera } from 'lucide-react';
import { ThreeDGlasses } from '../components/ThreeDGlasses';
import { PRODUCTS } from '../constants';
import { formatPrice } from '../lib/utils';
import { useCartStore } from '../store';
import toast from 'react-hot-toast';

export const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const addItem = useCartStore(state => state.addItem);
  
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [activeTab, setActiveTab] = useState<'3d' | 'image' | 'tryon'>('3d');
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    addItem(product, selectedColor!);
    toast.success('Added to cart successfully!');
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(stream);
      setActiveTab('tryon');
    } catch (err) {
      toast.error("Could not access camera");
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Visual Gallery */}
          <div className="space-y-4">
             <div className="aspect-square w-full bg-slate-50 rounded-3xl overflow-hidden relative border border-slate-100">
                {activeTab === '3d' && (
                  <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                    <Suspense fallback={null}>
                      <Stage environment="city" intensity={0.6}>
                        <ThreeDGlasses color={selectedColor === 'gold' ? '#D4AF37' : selectedColor === 'silver' ? '#C0C0C0' : '#111'} />
                      </Stage>
                    </Suspense>
                    <OrbitControls makeDefault />
                  </Canvas>
                )}
                {activeTab === 'image' && (
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                )}
                {activeTab === 'tryon' && cameraStream && (
                  <div className="relative w-full h-full">
                    <video 
                      autoPlay 
                      ref={video => { if (video) video.srcObject = cameraStream }} 
                      className="w-full h-full object-cover transform scale-x-[-1]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <img src="https://assets.codepen.io/127738/glasses_overlay_mock.png" className="w-[60%] opacity-80" alt="Overlay" />
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                  <button onClick={() => setActiveTab('3d')} className={`text-xs font-bold px-3 py-1 rounded-full ${activeTab === '3d' ? 'bg-medical-900 text-white' : 'text-slate-600'}`}>3D View</button>
                  <button onClick={() => setActiveTab('image')} className={`text-xs font-bold px-3 py-1 rounded-full ${activeTab === 'image' ? 'bg-medical-900 text-white' : 'text-slate-600'}`}>Photos</button>
                  <button onClick={startCamera} className={`text-xs font-bold px-3 py-1 rounded-full flex items-center ${activeTab === 'tryon' ? 'bg-medical-900 text-white' : 'text-slate-600'}`}>
                    <Camera size={12} className="mr-1"/> Try On
                  </button>
                </div>
             </div>
          </div>

          {/* Details */}
          <div>
            <div className="mb-6">
               <span className="text-medical-600 font-semibold tracking-wide text-sm uppercase">{product.category} Series</span>
               <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-2">{product.name}</h1>
               <div className="flex items-center space-x-4">
                 <div className="flex text-gold-500">
                   {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" className={i < Math.floor(product.rating) ? 'text-gold-500' : 'text-gray-300'} />)}
                 </div>
                 <span className="text-sm text-slate-500">{product.reviews} verified reviews</span>
               </div>
            </div>

            <div className="flex items-end space-x-4 mb-8">
              <span className="text-4xl font-bold text-slate-900">{formatPrice(product.price)}</span>
              <span className="text-xl text-slate-400 line-through mb-1">{formatPrice(product.originalPrice)}</span>
              <span className="text-sm font-bold text-green-600 bg-green-100 px-2 py-1 rounded mb-2">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Frame Color: <span className="capitalize font-bold">{selectedColor}</span></label>
                <div className="flex space-x-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 ${selectedColor === color ? 'border-medical-600 ring-2 ring-medical-100' : 'border-transparent'} flex items-center justify-center`}
                    >
                      <div className="w-8 h-8 rounded-full border border-gray-200" style={{ backgroundColor: color === 'tortoise' ? '#5c4033' : color }} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl space-y-3">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-500 shrink-0" />
                  <p className="text-sm text-slate-600"><strong>Anti-Glare Lenses</strong> included for free</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-500 shrink-0" />
                  <p className="text-sm text-slate-600"><strong>Blue Light Blocking</strong> (Add-on available in cart)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-medical-900 text-white py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                >
                  Add to Cart
                </button>
                <button className="px-6 py-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  ❤️
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center space-x-3">
                  <Truck className="h-6 w-6 text-medical-600" />
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">Free Shipping</p>
                    <p className="text-slate-500">Across Ludhiana</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-medical-600" />
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">1 Year Warranty</p>
                    <p className="text-slate-500">On manufacturing defects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
