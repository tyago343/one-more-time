import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../infrastructure/store/productApi';
import Overlay from '@shared/infrastructure/components/Overlay';
import Spinner from '@shared/infrastructure/components/Spinner';
import ProductForm from '../components/Product.form';

const ViewProductContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useGetProductByIdQuery(String(id));

  if (isLoading) {
    return <Overlay content={<Spinner />} />;
  }
  if (!product) {
    return <div>Product not found</div>;
  }
  return <ProductForm product={product} onSubmit={() => console.log} />;
};

export default ViewProductContainer;
