import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { concatCommonKeysTranslations, TranslationNamespaces } from '@i18n/index';
import { Link } from 'react-router-dom';
const translations = concatCommonKeysTranslations([TranslationNamespaces.CATALOG]);

const ProductForm: React.FC = () => {
  const { t } = useTranslation(translations);
  const {
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    register,
    reset,
  } = useForm();
  const onSubmit = (_values: any) => {
    setTimeout(() => {
      if (isSubmitSuccessful) reset();
    }, 5000);
  };
  return (
    <>
      <h1 className="py-4 text-3xl font-extralight">{t('products')}</h1>
      <div id="menu" className="py-4 bg-gray-100 border-t border-b border-gray-300 p-6 flex">
        <div className="ml-auto order-2">
          <button className="bg-orange-600 border-orange-600 text-white text-shadow px-4 py-3 hover:bg-orange-700 hover:border-orange-700 font-semibold">
            <Link to="/products/create">{t('createProduct')}</Link>
          </button>
        </div>
      </div>
      <div className="py-4"></div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">{t('name')}</label>
            <input type="text" id="name" {...register('name', { required: 'Name is required' })} />
            {errors.name ? <p>{errors.name.message as string}</p> : null}
          </div>
          <div>
            <label htmlFor="description">{t('description')}</label>
            <textarea
              {...register('description', {
                required: 'Description is required',
              })}
              id="description"
            />
            {errors.description ? <p>{errors.description.message as string}</p> : null}
          </div>
          <div>
            <label htmlFor="price">{t('price')}</label>
            <input
              type="number"
              {...register('price', { required: 'Price is required' })}
              id="price"
            />
            {errors.price ? <p>{errors.price.message as string}</p> : null}
          </div>
          <div>
            <label htmlFor="images">{t('images')}</label>
            <input
              type="file"
              {...register('images', {
                required: 'At least one image is required',
              })}
              id="images"
            />
            {errors.images ? <p>{errors.images.message as string}</p> : null}
          </div>
          <div>
            <button
              type="submit"
              name={isSubmitting ? 'Sending...' : 'Send'}
              role="button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
