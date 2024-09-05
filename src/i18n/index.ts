import enCommon from './en/common.json';
import enCatalog from './en/catalog.json';
import esCommon from './es/common.json';
const translations = {
  en: {
    common: enCommon,
    catalog: enCatalog,
  },
  es: {
    common: esCommon,
  },
};
export enum TranslationNamespaces {
  COMMON = 'common',
  CATALOG = 'catalog',
}
export function concatCommonKeysTranslations(
  translationsNamespaces: TranslationNamespaces[]
): TranslationNamespaces[] {
  return Array(...translationsNamespaces, TranslationNamespaces.COMMON);
}
export default translations;
