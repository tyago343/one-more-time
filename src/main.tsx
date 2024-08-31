import React from 'react';
import Sidebar from './shared/components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Products from '@pages/Product';
import ListProductsContainer from './modules/Product/containers/ListProducts';
import CreateProductContainer from './modules/Product/containers/CreateProduct';
export default () => {
  return (
    <main className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="w-full  bg-white">
        <Routes>
          <Route path="/products" element={<Products />}>
            <Route index element={<ListProductsContainer />} />
            <Route path="create" element={<CreateProductContainer />} />
          </Route>
        </Routes>
      </div>
    </main>
  );
};
