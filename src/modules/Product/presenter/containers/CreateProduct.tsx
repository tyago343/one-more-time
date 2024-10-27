import React from 'react';
import ProductForm from '../components/Product.form';
import { CreateProductData } from '@/Product/domain/entitites/Product';
import { useCreateProductMutation } from '@/Product/infrastructure/store/productApi';
import { useCreateTmpImageMutation } from '@/Image/infrastructure/store/imageApi';

const CreateProductContainer: React.FC = () => {
  const [createProduct] = useCreateProductMutation();
  const [createTmpImage] = useCreateTmpImageMutation();
  const onSubmit = (values: CreateProductData): void => {
    const { images, ...restValues } = values;
    debugger;
    if (images?.length === 0) {
      createProduct({ ...restValues });
      return;
    }
    createProduct(values);
  };
  const saveImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      createTmpImage(e.target.files[0]);
    }
  };
  return <ProductForm onSubmit={onSubmit} saveImage={saveImage} />;
};

export default CreateProductContainer;
