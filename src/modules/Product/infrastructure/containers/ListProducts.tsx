import React from 'react';
import ProductList from '../components/productList';
import { products as mockedProducts } from '../mocks/Product.mock';
function ListProductsContainer() {
  const products = mockedProducts;
  return <ProductList products={products} />;
}
export default ListProductsContainer;
