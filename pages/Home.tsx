import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, Award, Star, Eye } from 'lucide-react';
import { ThreeDGlasses } from '../components/ThreeDGlasses';
import { PRODUCTS, TESTIMONIALS } from '../constants';
import { formatPrice } from '../lib/utils';

export const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left pt-12 lg:pt-0"
          >
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-medical-800 rounded-full text-sm font-semibold tracking-wide">
              #1 Rated in Ludhiana
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
              See the World, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-800 to-medical-500">
                Not the Price Tag.
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Founded by a myopia survivor. We cut out the middlemen to bring you premium anti-glare eyewear at 40-60% less than mall prices.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/book" className="w-full sm:w-auto px-8 py-4 bg-medical-900 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center">
                Book Free Checkup <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/shop" className="w-full sm:w-auto px-8 py-4 bg-white text-medical-900 border-2 border-medical-100 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center justify-center">
                View Collection
              </Link>
            </div>
            <div className="pt-6 flex items-center justify-center lg:justify-start space-x-8">
               <div className="text-center">
                 <p className="text-2xl font-bold text-slate-900">20k+</p>
                 <p className="text-xs text-slate-500 uppercase tracking-wide">Happy Eyes</p>
               </div>
               <div className="h-10 w-px bg-slate-200"></div>
               <div className="text-center">
                 <p className="text-2xl font-bold text-slate-900">4.9/5</p>
                 <p className="text-xs text-slate-500 uppercase tracking-wide">Google Rating</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="h-[400px] lg:h-[600px] w-full relative"
          >
            {/* 3D Canvas */}
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              <Suspense fallback={null}>
                <ThreeDGlasses position={[0, 0, 0]} rotation={[0, 0.5, 0]} />
                <Environment preset="city" />
                <ContactShadows position={[0, -1.4, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
              </Suspense>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
            
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-10 right-0 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50 hidden lg:block"
            >
               <div className="flex items-center space-x-3">
                 <div className="bg-green-100 p-2 rounded-full text-green-600"><ShieldCheck size={20}/></div>
                 <div>
                   <p className="font-bold text-slate-900">1 Year Warranty</p>
                   <p className="text-xs text-slate-500">On all frames & lenses</p>
                 </div>
               </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute bottom-20 left-0 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50 hidden lg:block"
            >
               <div className="flex items-center space-x-3">
                 <div className="bg-blue-100 p-2 rounded-full text-blue-600"><Clock size={20}/></div>
                 <div>
                   <p className="font-bold text-slate-900">Fast Delivery</p>
                   <p className="text-xs text-slate-500">Same day in Ludhiana</p>
                 </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Punjab Trusts Satyam</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We combine medical expertise with modern fashion. No gimmicks, just clear vision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award className="h-8 w-8 text-gold-500"/>, title: "Best Price Guarantee", desc: "Premium specs under ₹2000. We beat mall prices by 50%." },
              { icon: <Eye className="h-8 w-8 text-medical-500"/>, title: "Free Eye Checkup", desc: "Comprehensive testing by certified optometrists." },
              { icon: <ShieldCheck className="h-8 w-8 text-green-500"/>, title: "Unbreakable Lenses", desc: "Polycarbonate lenses that survive drops and scratches." },
              { icon: <Clock className="h-8 w-8 text-purple-500"/>, title: "1 Hour Service", desc: "Get your single vision glasses ready in 1 hour." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="mb-4 bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
             <div>
               <h2 className="text-3xl font-bold text-slate-900 mb-2">Trending in Ludhiana</h2>
               <p className="text-slate-600">Our best-selling frames this week.</p>
             </div>
             <Link to="/shop" className="hidden md:flex items-center text-medical-800 font-semibold hover:underline">
               View All <ArrowRight className="ml-1 h-4 w-4"/>
             </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.slice(0, 4).map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative">
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-medical-900 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">NEW</span>
                  )}
                  <div className="h-64 overflow-hidden bg-gray-100 relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 mb-1 group-hover:text-medical-700 transition-colors">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500 line-through">{formatPrice(product.originalPrice)}</span>
                        <span className="text-lg font-bold text-medical-900">{formatPrice(product.price)}</span>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center">
                        <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform"/>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/shop" className="btn btn-primary inline-flex items-center text-medical-800 font-semibold">
               View All Products <ArrowRight className="ml-1 h-4 w-4"/>
             </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-medical-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12">Stories from Our Community</h2>
          <div className="relative">
             <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar space-x-6 pb-8">
               {TESTIMONIALS.map((t) => (
                 <div key={t.id} className="snap-center shrink-0 w-full md:w-[400px] bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                    <div className="flex justify-center mb-4 space-x-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-gold-500 fill-current" />)}
                    </div>
                    <p className="text-lg italic text-gray-200 mb-6">"{t.text}"</p>
                    <div>
                      <p className="font-bold text-white">{t.author}</p>
                      <p className="text-xs text-medical-200">{t.location}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Founder Story Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
             <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Optometrist" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
               <p className="text-white font-bold text-xl">Dr. Satyam & Team</p>
             </div>
           </div>
           <div className="space-y-6">
             <h2 className="text-4xl font-bold text-slate-900">A Personal Mission for Clear Sight</h2>
             <p className="text-lg text-slate-600 leading-relaxed">
               "After wearing glasses for 2 years and struggling with overpriced, poor-quality frames that gave me headaches, I decided to fix this for everyone. Satyam EyeCare isn't just a shop; it's my promise to Ludhiana that quality eye care is a right, not a luxury."
             </p>
             <Link to="/about" className="inline-block text-medical-700 font-semibold border-b-2 border-medical-700 pb-1 hover:text-medical-900">
               Read Full Story
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};