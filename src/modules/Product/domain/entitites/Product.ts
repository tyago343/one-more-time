export interface Product {
  id: string;
  name: string;
  price: number;
}
export interface ProductRepository {
  findAll(): Promise<Product[]>;
  create(product: Product): Promise<void>;
}
