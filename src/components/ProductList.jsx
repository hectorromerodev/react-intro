
import ProductItem from './ProductItem';
import Box from '@mui/material/Box';

const ProductList = ({allProducts, onDelete, onEdit, variant}) => {

  return (
    <>
      <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
          padding: '1rem',
        }}>
          {
            allProducts.map(product => (
              <Box key={product.id}>
                <ProductItem
                  product={product}
                  onDelete={onDelete}
                  onEdit={onEdit}
                  variant={variant}
                />
              </Box>
            ))

          }
        </Box>
    </>
  )
}

export default ProductList;