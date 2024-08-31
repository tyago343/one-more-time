import React from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationNamespaces } from '@i18n/index';

const Sidebar: React.FC = () => {
  const { t } = useTranslation(TranslationNamespaces.CATALOG);
  return (
    <aside className="w-full md:w-20 xl:w-24 bg-dark">
      <p className="text-center py-4 hover:bg-dark-hover text-gray-200">
        {t('catalog')}
      </p>
    </aside>
  );
};
export default Sidebar;
