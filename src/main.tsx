import React from 'react';
import Product from './pages/product/product';
export default () => {
  return (
    <main className="flex flex-col md:flex-row h-screen">
      <aside className="w-full md:w-1/4 xl:w-1/6 bg-gray-200">
        <p>product</p>
      </aside>
      <div className="w-full md:w-3/4 xl:w-5/6 bg-white">
        <header>
          Content header (probably title of the page, maybe user icons, we'll
          see)
        </header>
        <Product />
      </div>
    </main>
  );
};
