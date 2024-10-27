import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQueryWithConfigurations } from '@shared/infrastructure/api';

export const imageApi = createApi({
  reducerPath: 'imageApi',
  baseQuery: fetchBaseQueryWithConfigurations('images'),
  tagTypes: ['Image'],
  endpoints: (builder) => ({
    createTmpImage: builder.mutation<string, File>({
      query: (image: File) => {
        const formData = new FormData();
        formData.append('image', image);

        return {
          url: '/tmp',
          method: 'POST',
          body: formData,
        };
      },
    }),
  }),
});

export const { reducer, reducerPath, useCreateTmpImageMutation } = imageApi;
