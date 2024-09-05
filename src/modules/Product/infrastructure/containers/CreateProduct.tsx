import React from 'react';
import ProductForm from '../components/Product.form';
export interface CreateProductData {
  name: string;
  description: string;
  price: number;
  images: FileList;
}
const CreateProductContainer: React.FC = () => {
  const onSubmit = (values: CreateProductData): void => {
    console.log(values);
  };
  return <ProductForm onSubmit={onSubmit} />;
};

export default CreateProductContainer;
