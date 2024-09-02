import React from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationNamespaces } from '@i18n/index';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const { t } = useTranslation(TranslationNamespaces.CATALOG);
  return (
    <aside className="w-full md:w-20 xl:w-24 bg-dark">
      <div className="text-center py-4 hover:bg-dark-hover text-gray-200 relative group">
        <p>{t('catalog')}</p>
        <div className="hidden absolute left-full top-0 m-0 w-full bg-dark-hover text-gray-200 group-hover:block hover:block h-screen">
          <li className="py-2 px-4 list-none">
            <Link to="/products">{t('product')}</Link>
          </li>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
