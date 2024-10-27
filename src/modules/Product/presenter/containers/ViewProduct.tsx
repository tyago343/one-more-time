import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../infrastructure/store/productApi';
import Overlay from '@shared/infrastructure/components/Overlay';
import Spinner from '@shared/infrastructure/components/Spinner';
import ProductForm from '../components/Product.form';
import { useCreateTmpImageMutation } from '@/Image/infrastructure/store/imageApi';

const ViewProductContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useGetProductByIdQuery(String(id));
  const [createTmpImage] = useCreateTmpImageMutation();
  const saveImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      createTmpImage(e.target.files[0]);
    }
  };
  if (isLoading) {
    return <Overlay content={<Spinner />} />;
  }
  if (!product) {
    return <div>Product not found</div>;
  }
  return <ProductForm product={product} onSubmit={() => console.log} saveImage={saveImage} />;
};

export default ViewProductContainer;
