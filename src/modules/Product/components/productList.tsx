import React from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationNamespaces } from '@i18n/index';
import { Product } from '../domain/entitites/Product';
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
          <tr>
            <th>{t('name')}</th>
            <th>{t('price')}</th>
            <th>{t('thumbnail')}</th>
            <th>{t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={`${product.name}_${index}_${product.price}`}>
                <td>
                  <Link to={`/products/${product.id}`} className="underline">
                    {product.name}
                  </Link>
                </td>
                <td>{product.price}</td>
                <td>{product.image}</td>
                <td>
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
