import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import AdminPage from './pages/AdminPage';
import ShopPage from './pages/ShopPage';
import ShopCartPage from './pages/ShopCartPage';

// Data
import products from './data/products';

function App() {

  
  const [allProducts, setAllProducts] = useState(products);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<AdminPage allProducts={allProducts} setAllProducts={setAllProducts} />} />
        <Route path="/shop" element={<ShopPage allProducts={allProducts} />} />
        <Route path="/shop-cart" element={<ShopCartPage />} />
      </Routes>
    </>

  )
}

export default App;
