import { CreateProductData, Product } from '../entitites/Product';

export interface ProductRepository {
  findAll(): Promise<Product[]>;
  create(product: CreateProductData): Promise<void>;
  update(product: CreateProductData): Promise<void>;
  delete(id: string): Promise<void>;
}
