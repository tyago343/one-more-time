import React from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationNamespaces } from '@i18n/index';
import { Product } from '../../domain/entitites/Product';
import { Link } from 'react-router-dom';

interface ProductListProps {
  products: Product[];
}

const productList: React.FC<ProductListProps> = ({ products }) => {
  const { t } = useTranslation(TranslationNamespaces.COMMON);
  return (
    <div>
      <table>
        <thead role="heading">
          <tr className="bg-dark text-gray-200">
            <th className="background-clip-padding-box text-white p-4 relative align-middle">
              {t('name')}
            </th>
            <th className="background-clip-padding-box text-white p-4 relative align-middle">
              {t('price')}
            </th>
            <th className="background-clip-padding-box text-white p-4 relative align-middle">
              {t('thumbnail')}
            </th>
            <th className="background-clip-padding-box text-white p-4 relative align-middle">
              {t('actions')}
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={`${product.name}_${index}_${product.price}`}>
                <td className="bg-white border-l-2 border-r-2 border-dashed border-gray-300 text-gray-700 p-4">
                  <Link to={`/products/${product.id}`} className="underline">
                    {product.name}
                  </Link>
                </td>
                <td className="bg-white border-l-2 border-r-2 border-dashed border-gray-300 text-gray-700 p-4">
                  {product.price}
                </td>
                <td className="bg-white border-l-2 border-r-2 border-dashed border-gray-300 text-gray-700 p-4">
                  {product.image}
                </td>
                <td className="bg-white border-l-2 border-r-2 border-dashed border-gray-300 text-gray-700 p-4">
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
  );
};

export default productList;
