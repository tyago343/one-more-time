import { Product } from 'modules/Product/domain/entitites/Product';

const products: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    price: 100,
  },
  {
    id: '2',
    name: 'Product 2',
    price: 200,
  },
  {
    id: '3',
    name: 'Product 3',
    price: 300,
  },
];
const product: Product = {
  id: '4',
  name: 'Product 4',
  price: 400,
};

const productBuilder = (data: Partial<Product>) => ({
  id: '1-2-3',
  name: 'Product Test',
  price: 1200,
  ...data,
});
export { products, product, productBuilder };
