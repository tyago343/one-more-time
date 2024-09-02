import { Product } from '@/Product/domain/entitites/Product';
import React from 'react';

type Props = {
  product: Product;
};

function ProductView({ product }: Props) {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
export default ProductView;
