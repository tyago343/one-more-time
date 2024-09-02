import React from 'react';
import ProductList from '../components/productList';
import { useGetProductsQuery } from '../store/productApi';
function ListProductsContainer() {
  const { data: products = [] } = useGetProductsQuery();
  return <ProductList products={products} />;
}
export default ListProductsContainer;
