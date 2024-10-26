import { CreateProductData, Product } from '@/Product/domain/entitites/Product';
import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQueryWithConfigurations } from '@shared/infrastructure/api';

export const productApi = createApi({
  reducerPath: 'productApi',
  tagTypes: ['Product'],
  baseQuery: fetchBaseQueryWithConfigurations('products'),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '',
      providesTags: ['Product'],
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Product', id }],
    }),
    createProduct: builder.mutation<Product, CreateProductData>({
      query: (product: CreateProductData) => ({
        url: '',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['Product'],
    }),
    updateProduct: builder.mutation<void, Product>({
      query: ({ id, ...updateData }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: updateData,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Product', id }],
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Product', id }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  middleware,
  reducer,
  reducerPath,
} = productApi;
