import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import AdminPage from './pages/AdminPage';
import ShopPage from './pages/ShopPage';

function App() {

  
  const [allProducts, setAllProducts] = useState([]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<AdminPage allProducts={allProducts} setAllProducts={setAllProducts} />} />
        <Route path="/shop" element={<ShopPage allProducts={allProducts} />} />
      </Routes>
    </>

  )
}

export default App;
