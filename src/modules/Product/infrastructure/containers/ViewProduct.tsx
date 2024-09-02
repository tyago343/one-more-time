import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../store/productApi';
import ProductView from '../components/Product.view';

const ViewProductContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useGetProductByIdQuery(String(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!product) {
    return <div>Product not found</div>;
  }
  return <ProductView product={product} />;
};

export default ViewProductContainer;
