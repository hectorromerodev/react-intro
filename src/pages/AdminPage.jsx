import { useState } from 'react';
import {
  Box,
  Fab,
} from "@mui/material";

import AddCircleOutline from '@mui/icons-material/AddCircleOutline';

import AddProductModal from '../modals/AddProductModal';
import EditProductModal from '../modals/EditProductModal';
import ProductList from '../components/ProductList';

const AdminPage = ({ allProducts, setAllProducts }) => {
  
  const [isAddProductVisible, setIsAddProductVisible] = useState(false);
  const [isEditProductVisible, setIsEditProductVisible] = useState(false);
  const [productToEdit, setProductToEdit] = useState();

  const handleOnSubmit = product => {
    setAllProducts([...allProducts, product]);
  }

  const handleOnEdit = product => {
    const index = allProducts.findIndex(p => p.id === product.id);
    allProducts[index] = product;
    setAllProducts([...allProducts]);
  }

  const handleOnDelete = product => {
    setAllProducts(allProducts.filter(p => p !== product));
  }

  return (
    <>
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
        
        <ProductList
          variant="admin"
          allProducts={allProducts}
          onDelete={handleOnDelete}
          onEdit={(product) => {
            console.log('product', product);
            setProductToEdit(product);
            setIsEditProductVisible(true);
          }}
        />

        <AddProductModal
          isOpen={isAddProductVisible}
          onClose={() => setIsAddProductVisible(false)}
          onSubmit={handleOnSubmit}
        />

        <EditProductModal
          isOpen={isEditProductVisible}
          productToEdit={productToEdit}
          onClose={() => setIsEditProductVisible(false)}
          onSubmit={handleOnEdit}
        />
      </Box>
    </>
  )
};

export default AdminPage;