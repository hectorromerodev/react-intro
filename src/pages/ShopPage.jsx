import ProductList from '../components/ProductList';

const ShopPage = ({allProducts}) => {
  return (
    <>
      <ProductList
        variant="shop"
        allProducts={allProducts}
      />
    </>
  )
}

export default ShopPage;