import React from 'react';
import Sidebar from './shared/components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Products from '@pages/Product';
export default () => {
  return (
    <main className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="w-full  bg-white">
        <Routes>
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </main>
  );
};
