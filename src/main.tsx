import React from 'react';
import Sidebar from './shared/infrastructure/components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Products from '@pages/Product';
import ListProductsContainer from './modules/Product/infrastructure/containers/ListProducts';
import CreateProductContainer from './modules/Product/infrastructure/containers/CreateProduct';
export default () => {
  return (
    <main className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="w-full  bg-white">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/products" element={<Products />}>
            <Route index element={<ListProductsContainer />} />
            <Route path="create" element={<CreateProductContainer />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </main>
  );
};
