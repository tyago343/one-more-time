import React from 'react';
import ProductList from '../components/Product.list';
import { useGetProductsQuery } from '../../infrastructure/store/productApi';
function ListProductsContainer() {
  const { data: products = [] } = useGetProductsQuery();
  return <ProductList products={products} />;
}
export default ListProductsContainer;
