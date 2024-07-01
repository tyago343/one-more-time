import React from 'react';
import Product from '@pages/Product';
import Sidebar from '@components/common/Sidebar';
export default () => {
  return (
    <main className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="w-full  bg-white">
        <header>
          Content header (probably title of the page, maybe user icons, we'll
          see)
        </header>
        <Product />
      </div>
    </main>
  );
};
