import React from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationNamespaces } from '@i18n/index';
import { Link } from 'react-router-dom';
import ecommerceIcon from '@shared/assets/ecommerce-icon.svg';

const Sidebar: React.FC = () => {
  const { t } = useTranslation(TranslationNamespaces.CATALOG);
  return (
    <aside className="w-full md:w-20 xl:w-24 bg-dark relative">
      <a href="/" className="block py-4 text-center text-gray-200">
        <img src={ecommerceIcon} alt="Logo" className="mx-auto" />
      </a>
      <div className="border-b border-gray-400 w-4/5 mx-auto"></div>
      <div className="text-center py-4 hover:bg-dark-hover text-gray-200 group">
        <p>{t('catalog')}</p>
        <div
          id="menu"
          className="
            group-hover:table hover:block
            hidden absolute left-full top-0 z-10
            m-0 p-4 px-8
            w-full max-w-[calc(100vw - 8.8rem)] min-h-[720px] h-screen
          bg-dark-hover text-gray-200 text-left"
        >
          <h3 className="mb-10 text-2xl">
            <strong>{t('catalog')}</strong>
          </h3>
          <li className="py-2 list-none min-w-80">
            <Link to="/products">{t('products')}</Link>
          </li>
          <li className="py-2 list-none min-w-80">
            <Link to="/categories">{t('categories')}</Link>
          </li>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
