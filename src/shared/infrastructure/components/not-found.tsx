import { TranslationNamespaces } from '@i18n/index';
import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const { t } = useTranslation(TranslationNamespaces.COMMON);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">{t('404-title')}</h1>
      <p className="text-gray-600">{t('404-message')}</p>
      <a href="/" className="mt-4 text-blue-500 hover:text-blue-700">
        {t('404-back')}
      </a>
    </div>
  );
};

export default NotFound;
