import React from 'react';
import Product from './pages/product/Product';
import { useTranslation } from 'react-i18next';
import { TranslationNamespaces } from './i18n';
export default () => {
  const { t } = useTranslation(TranslationNamespaces.CATALOG);
  return (
    <main className="flex flex-col md:flex-row h-screen">
      <aside className="w-full md:w-20 xl:w-24 bg-dark">
        <p className="text-center py-4 hover:bg-dark-hover text-gray-200">
          {t('catalog')}
        </p>
      </aside>
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
