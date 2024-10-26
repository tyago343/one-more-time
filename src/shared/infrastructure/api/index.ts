import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:3000/';

export const fetchBaseQueryWithConfigurations = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl: `${API_URL}${baseUrl}`,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = (getState() as RootState).auth.token;
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //   }

    //   return headers;
    // },
  });
