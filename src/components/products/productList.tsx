import React from 'react';
import { IProduct } from '@interfaces/Product';
import { useTranslation } from 'react-i18next';
import { TranslationNamespaces } from '@i18n/index';
interface ProductListProps {
  products: IProduct[];
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
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.image}</td>
                <td>{t('edit')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default productList;
