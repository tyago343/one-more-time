import React from 'react';
import { useTranslation } from 'react-i18next';
import { concatCommonKeysTranslations, TranslationNamespaces } from '@i18n/index';
import { Product } from '../../domain/entitites/Product';
import { Link } from 'react-router-dom';
const translations = concatCommonKeysTranslations([TranslationNamespaces.CATALOG]);

interface ProductListProps {
  products: Product[];
}

const productList: React.FC<ProductListProps> = ({ products }) => {
  const { t } = useTranslation(translations);
  return (
    <>
      <h1 className="py-4 text-3xl font-extralight">
        {t('products', { ns: TranslationNamespaces.CATALOG })}
      </h1>
      <div id="menu" className="py-4 bg-gray-100 border-t border-b border-gray-300 p-6 flex">
        <div className="ml-auto order-2">
          <button className="bg-orange-600 border-orange-600 text-white text-shadow px-4 py-3 hover:bg-orange-700 hover:border-orange-700 font-semibold">
            <Link to="/products/create">
              {t('createProduct', { ns: TranslationNamespaces.CATALOG })}
            </Link>
          </button>
        </div>
      </div>
      <div className="py-4"></div>
      <div className="w-full">
        <table className="w-full text-sm">
          <thead role="heading">
            <tr className="bg-dark text-gray-200 ">
              <th className="background-clip-padding-box text-white p-4 relative align-middle uppercase">
                {t('id')}
              </th>
              <th className="background-clip-padding-box text-white p-4 relative align-middle">
                {t('name')}
              </th>
              <th className="background-clip-padding-box text-white p-4 relative align-middle">
                {t('price')}
              </th>
              <th className="background-clip-padding-box text-white p-4 relative align-middle">
                {t('thumbnail', { ns: TranslationNamespaces.COMMON })}
              </th>
              <th className="background-clip-padding-box text-white p-4 relative align-middle">
                {t('actions', { ns: TranslationNamespaces.COMMON })}
              </th>
            </tr>
          </thead>
          <tbody className="border border-t-0 border-gray-300">
            {products.map((product, index) => {
              const rowClass = index % 2 === 0 ? 'bg-white' : 'bg-custom-even';
              return (
                <tr key={`${product.id}`} className={`${rowClass} hover:bg-custom-hover`}>
                  <td className=" border-dashed border-gray-300 text-gray-700 p-2 text-center w-[15%]">
                    {product.id}
                  </td>
                  <td className="border-l-2 border-dashed border-gray-300 text-gray-700 p-2 w-[30%]">
                    <Link to={`/products/${product.id}`} className="underline">
                      {product.name}
                    </Link>
                  </td>
                  <td className="border-l-2 border-dashed border-gray-300 text-gray-700 p-2 w-[20%]">
                    {product.price}
                  </td>
                  <td className="border-l-2 border-r-2 border-dashed border-gray-300 text-gray-700 p-2 w-[20%]">
                    <img src={product?.images?.[0]} className="mx-auto h-16" />
                  </td>
                  <td className=" border-dashed border-gray-300 text-gray-700 p-2 text-center w-[15%]">
                    <Link to={`/products/${product.id}`} className="underline">
                      {t('edit')}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default productList;
