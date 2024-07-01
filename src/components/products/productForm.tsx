import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { TranslationNamespaces } from '@i18n/index';

const ProductForm: React.FC = () => {
  const {
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    register,
    reset,
  } = useForm();
  const { t } = useTranslation(TranslationNamespaces.COMMON);
  const onSubmit = (_values: any) => {
    setTimeout(() => {
      if (isSubmitSuccessful) reset();
    }, 5000);
  };
  return (
    <div className="shadow-primary-light my-4 mx-6">
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-2">
            {t('name')}
          </label>
          <input
            className="bg-supporting-blue/40 rounded-lg px-2 py-1 mb-1"
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name ? (
            <p className="text-error">{errors.name.message as string}</p>
          ) : null}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="description" className="mb-2">
            {t('description')}
          </label>
          <textarea
            {...register('description', {
              required: 'Description is required',
            })}
            className="bg-supporting-blue/40 rounded-lg px-2 py-1 mb-1"
            id="description"
          />
          {errors.description ? (
            <p className="text-error">{errors.description.message as string}</p>
          ) : null}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="price" className="mb-2">
            {t('price')}
          </label>
          <input
            type="number"
            {...register('price', { required: 'Price is required' })}
            id="price"
            className="bg-supporting-blue/40 rounded-lg px-2 py-1 mb-1"
          />
          {errors.price ? (
            <p className="text-error">{errors.price.message as string}</p>
          ) : null}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="images" className="mb-2">
            {t('images')}
          </label>
          <input
            type="file"
            {...register('images', {
              required: 'At least one image is required',
            })}
            id="images"
            className="mb-1"
          />
          {errors.images ? (
            <p className="text-error">{errors.images.message as string}</p>
          ) : null}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            name={isSubmitting ? 'Sending...' : 'Send'}
            role="button"
            disabled={isSubmitting}
            className="border-green-500 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
