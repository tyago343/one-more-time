import { Product } from 'modules/Product/domain/entitites/Product';

const products: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    price: 100,
    description: 'This is a description for Product 1',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Product 2',
    price: 200,
    description: 'This is a description for Product 2',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    name: 'Product 3',
    price: 300,
    description: 'This is a description for Product 3',
    image: 'https://via.placeholder.com/150',
  },
];
const product: Product = {
  id: '4',
  name: 'Product 4',
  price: 400,
  description: 'This is a description for Product 4',
  image: 'https://via.placeholder.com/150',
};

const productBuilder = (data: Partial<Product>): Product => ({
  id: '1-2-3',
  name: 'Product Test',
  price: 1200,
  description: 'This is a description for Product Test',
  image: 'https://via.placeholder.com/150',
  ...data,
});
export { products, product, productBuilder };
