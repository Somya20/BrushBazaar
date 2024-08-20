import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollectionSection from './components/CollectionSection';
import DigitalArtGallery from './components/DigitalArtGallery';
import FolkArtStore from './components/FolkArtStore';
import Footer from './components/footer';
import Homepage from './components/Homepage';
import ImageGrid from './components/Image_grid';
import ImageText from './components/ImageText';
import Navbar from './components/Navbar';
import PainterSection from './components/Painter_Section';
import Testimonials from './components/Testimonials';
import Login from './components/login';
import LivingRoomView from './components/LivingRoomView';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart.js';


function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/living-room-view" element={<LivingRoomView />} />
            <Route path="/cart" element={<Cart />} />
            
            <Route path="/" element={
              <>
                <ImageText />
                <ImageGrid />
                <Homepage />
                <CollectionSection />
                <DigitalArtGallery />
                <FolkArtStore />
                <PainterSection />
                <Testimonials />
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
   
  );
}

export default App;