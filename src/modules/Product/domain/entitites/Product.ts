export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images?: string[];
}
export interface CreateProductData {
  name: string;
  description: string;
  price: number;
  images?: FileList[];
}
