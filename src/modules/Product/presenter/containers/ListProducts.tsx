import React from 'react';
import { useGetProductsQuery } from '@/Product/infrastructure/store/productApi';
import ProductList from '../components/Product.list';
function ListProductsContainer() {
  const { data: products = [] } = useGetProductsQuery();
  return <ProductList products={products} />;
}
export default ListProductsContainer;
