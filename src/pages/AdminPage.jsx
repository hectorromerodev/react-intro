import { useState } from 'react';
import {
  Box,
  Fab,
} from "@mui/material";

import AddCircleOutline from '@mui/icons-material/AddCircleOutline';

import AddProductModal from '../modals/ProductModal';
import ProductItemCard from '../components/ProductItemCard';

const AdminPage = ({ allProducts, setAllProducts}) => {
  const [isAddProductVisible, setIsAddProductVisible] = useState(false);
  
  const handleOnSubmit = product => {
    setAllProducts([...allProducts, product]);
  }

  const handleOnDelete = product => {
    setAllProducts(allProducts.filter(p => p !== product));
  }

  const handleOnEdit = product => {
    console.log('Edit', product);
  }

  return (
    <Box>
      <Fab
        variant="extended"
        onClick={() => setIsAddProductVisible(true)}
        sx={{
          position: 'absolute',
          bottom: '24px',
          right: '24px',
        }}
      >
        <AddCircleOutline
          sx={{
            mr: 1,
          }}
        />
        Add a new product
      </Fab>
      
      {
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
          padding: '1rem',
        }}>
          {
            allProducts.map(product => (
              <Box key={product.id}>
                <ProductItemCard
                  product={product}
                  onDelete={handleOnDelete}
                  onEdit={handleOnEdit}
                />
              </Box>
            ))

          }
        </Box>
      }

      
      <AddProductModal
        open={isAddProductVisible}
        onClose={() => setIsAddProductVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </Box>
  )
};

export default AdminPage;