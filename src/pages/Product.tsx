import React from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationNamespaces } from '@i18n/index';
import { Outlet } from 'react-router-dom';
const Product: React.FC = () => {
  const { t } = useTranslation(TranslationNamespaces.CATALOG);

  return (
    <div>
      <h1 className="py-4 px-8 text-3xl font-extralight">{t('products')}</h1>
      <div className="py-4 px-8">
        <Outlet />
      </div>
    </div>
  );
};
export default Product;
