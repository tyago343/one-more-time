import { Product } from '@/Product/domain/entitites/Product';
import { concatCommonKeysTranslations, TranslationNamespaces } from '@i18n/index';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const translations = concatCommonKeysTranslations([TranslationNamespaces.CATALOG]);

type Props = {
  product: Product;
};

function ProductView({ product }: Props) {
  const { t } = useTranslation(translations);
  return (
    <>
      <h1 className="py-4 text-3xl font-extralight">{t('products')}</h1>
      <div id="menu" className="py-4 bg-gray-100 border-t border-b border-gray-300 p-6 flex">
        <div className="ml-auto order-2">
          <button className="bg-orange-600 border-orange-600 text-white text-shadow px-4 py-3 hover:bg-orange-700 hover:border-orange-700 font-semibold">
            <Link to="/products/create">{t('createProduct')}</Link>
          </button>
        </div>
      </div>
      <div className="py-4"></div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    </>
  );
}
export default ProductView;
