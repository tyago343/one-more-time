export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}
export interface ProductRepository {
  findAll(): Promise<Product[]>;
  create(product: Product): Promise<void>;
}
