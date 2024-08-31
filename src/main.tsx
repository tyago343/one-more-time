import React from 'react';
import Sidebar from './shared/components/Sidebar';
export default () => {
  return (
    <main className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="w-full  bg-white">
      </div>
    </main>
  );
};
