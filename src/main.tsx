import React from 'react';
import Sidebar from './shared/infrastructure/components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Products from '@pages/Product';
import Overlay from '@shared/infrastructure/components/Overlay';
import NotFound from '@shared/infrastructure/components/not-found';
const ListProductsContainer = React.lazy(
  () => import('./modules/Product/presenter/containers/ListProducts')
);
const CreateProductContainer = React.lazy(
  () => import('./modules/Product/presenter/containers/CreateProduct')
);
const ViewProductContainer = React.lazy(
  () => import('./modules/Product/presenter/containers/ViewProduct')
);
export default () => {
  return (
    <main className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="w-full bg-white">
        <React.Suspense fallback={<Overlay />}>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/products" element={<Products />}>
              <Route index element={<ListProductsContainer />} />
              <Route path="create" element={<CreateProductContainer />} />
              <Route path=":id" element={<ViewProductContainer />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </div>
    </main>
  );
};
