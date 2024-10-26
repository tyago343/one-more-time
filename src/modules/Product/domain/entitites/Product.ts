export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  images?: string[];
}
export interface CreateProductData {
  name: string;
  description: string;
  price: string;
  images?: FileList[];
}
