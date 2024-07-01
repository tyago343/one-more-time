import 'react-i18next';
import common from '../i18n/en/common.json';
import catalog from '../i18n/en/catalog.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      common: typeof common;
      catalog: typeof catalog;
    };
  }
}
