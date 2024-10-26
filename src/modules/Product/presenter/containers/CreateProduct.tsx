import React from 'react';
import ProductForm from '../components/Product.form';
import { CreateProductData } from '@/Product/domain/entitites/Product';
import { useCreateProductMutation } from '@/Product/infrastructure/store/productApi';

const CreateProductContainer: React.FC = () => {
  const [createProduct] = useCreateProductMutation();

  const onSubmit = (values: CreateProductData): void => {
    debugger;
    const { images, ...restValues } = values;
    if (images?.length === 0) {
      createProduct({ ...restValues });
      return;
    }
    createProduct(values);
  };

  return <ProductForm onSubmit={onSubmit} />;
};

export default CreateProductContainer;
