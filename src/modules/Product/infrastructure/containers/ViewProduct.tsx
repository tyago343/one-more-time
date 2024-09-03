import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../store/productApi';
import ProductView from '../components/Product.view';
import Overlay from '@shared/infrastructure/components/Overlay';
import Spinner from '@shared/infrastructure/components/Spinner';

const ViewProductContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useGetProductByIdQuery(String(id));

  if (isLoading) {
    return <Overlay content={<Spinner />} />;
  }
  if (!product) {
    return <div>Product not found</div>;
  }
  return <ProductView product={product} />;
};

export default ViewProductContainer;
