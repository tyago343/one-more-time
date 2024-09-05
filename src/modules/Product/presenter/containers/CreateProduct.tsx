import React from 'react';
import ProductForm from '../components/Product.form';
import { CreateProductData } from '@/Product/domain/entitites/Product';

const CreateProductContainer: React.FC = () => {
  const onSubmit = (values: CreateProductData): void => {
    console.log(values);
  };
  return <ProductForm onSubmit={onSubmit} />;
};

export default CreateProductContainer;
