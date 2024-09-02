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
  );
};

export default ProductForm;
