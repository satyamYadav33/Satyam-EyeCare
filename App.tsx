import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Booking } from './pages/Booking';
import { Cart } from './pages/Cart';
import { Blog } from './pages/Blog';
import { About } from './pages/About';

const App = () => {
  return (
    <HashRouter>
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: '#1e3a8a',
            color: '#fff',
            borderRadius: '10px',
          },
          success: {
            iconTheme: {
              primary: '#f59e0b',
              secondary: '#fff',
            },
          },
        }}
      />
      <Cart />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="book" element={<Booking />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
