import { Product, CreateProductData } from '@/Product/domain/entitites/Product';
import { ProductRepository } from '@/Product/domain/repository/Product.repository.interface';

export class ProductRepositoryImpl implements ProductRepository {
  findAll(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
  create(product: CreateProductData): Promise<void> {
    throw new Error('Method not implemented.' + product);
  }
  update(product: CreateProductData): Promise<void> {
    throw new Error('Method not implemented.' + product);
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.' + id);
  }
}
