import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationNamespaces } from '@i18n/index';

const Product: React.FC = () => {
  const { t } = useTranslation(TranslationNamespaces.CATALOG);
  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  , []);
  
  return (
    <div>
      <h1>{t('products')}</h1>
    </div>
  );
};
export default Product;
