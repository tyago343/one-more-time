import { Product } from '@/Product/domain/entitites/Product';
import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQueryWithConfigurations } from '@shared/infrastructure/api';
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQueryWithConfigurations('/products'),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/',
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/${id}`,
    }),
    createProduct: builder.mutation<void, Product>({
      query: (product: Product) => ({
        url: '',
        method: 'POST',
        body: product,
      }),
    }),
    updateProduct: builder.mutation<void, Product>({
      query: ({ id, ...updateData }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: updateData,
      }),
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  reducerPath,
  middleware,
  reducer,
} = productApi;
