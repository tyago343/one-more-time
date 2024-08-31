import React from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationNamespaces } from '@i18n/index';
import { Outlet } from 'react-router-dom';
const Product: React.FC = () => {
  const { t } = useTranslation(TranslationNamespaces.CATALOG);
  return (
    <div>
      <h1>{t('products')}</h1>
      <Outlet />
    </div>
  );
};
export default Product;
