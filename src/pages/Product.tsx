import React from 'react';
import { Outlet } from 'react-router-dom';
const Product: React.FC = () => {
  return (
    <div className="px-8 pb-4 pt-8">
      <Outlet />
    </div>
  );
};
export default Product;
