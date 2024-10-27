import { imageApi } from '@/Image/infrastructure/store/imageApi';
import * as productApi from '@/Product/infrastructure/store/productApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  [imageApi.reducerPath]: imageApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(productApi.middleware).concat(imageApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
