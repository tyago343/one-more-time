import enCommon from './en/common.json';
import enCatalog from './en/catalog.json';
import esCommon from './es/common.json';
import esCatalog from './es/catalog.json';
const translations = {
  en: {
    common: enCommon,
    catalog: enCatalog,
  },
  es: {
    common: esCommon,
    catalog: esCatalog,
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
