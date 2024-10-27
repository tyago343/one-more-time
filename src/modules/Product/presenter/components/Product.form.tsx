import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { concatCommonKeysTranslations, TranslationNamespaces } from '@i18n/index';
import { CreateProductData, Product } from '@/Product/domain/entitites/Product';
const translations = concatCommonKeysTranslations([TranslationNamespaces.CATALOG]);
interface ProductFormProps {
  product?: Product;
  onSubmit: (values: CreateProductData) => void;
  saveImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, saveImage, product }) => {
  const { t } = useTranslation(translations);
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<CreateProductData>();

  return (
    <>
      <h1 className="py-4 text-3xl font-extralight">{t('products')}</h1>
      <div id="menu" className="py-4 bg-gray-100 border-t border-b border-gray-300 p-6 flex">
        <div className="ml-auto order-2">
          <button
            onClick={handleSubmit(onSubmit)}
            className="bg-orange-600 border-orange-600 text-white text-shadow px-4 py-3 hover:bg-orange-700 hover:border-orange-700 font-semibold"
          >
            {t('save', { ns: TranslationNamespaces.COMMON })}
          </button>
        </div>
      </div>
      <div className="py-4"></div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8 mt-4">
            <div id="item" className="w-1/4 float-left ml-4 text-right">
              <label className="text-base capitalize font-semibold pointer" htmlFor="name">
                {t('name')}
              </label>
            </div>
            <div className='after:content-[""] after:table after:clear-both'>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required', value: product?.name })}
                className="-webkit-appearance-none bg-white border border-gray-300 box-shadow-none text-gray-700 text-base font-normal py-2 px-4 transition duration-150 ease-in-out w-1/2 float-left ml-4 focus:border-blue-500 focus:outline-none"
              />
              {errors.name ? <p>{errors.name.message as string}</p> : null}
            </div>
          </div>
          <div className="mb-8 mt-4">
            <div id="item" className="w-1/4 float-left ml-4 text-right">
              <label className="text-base capitalize font-semibold pointer" htmlFor="description">
                {t('description')}
              </label>
            </div>
            <div className='after:content-[""] after:table after:clear-both'>
              <textarea
                {...register('description', {
                  required: 'Description is required',
                  value: product?.description,
                })}
                id="description"
                className="-webkit-appearance-none bg-white border border-gray-300 box-shadow-none text-gray-700 text-base font-normal py-2 px-4 transition duration-150 ease-in-out w-1/2 float-left ml-4 focus:border-blue-500 focus:outline-none"
              />
              {errors.description ? <p>{errors.description.message as string}</p> : null}
            </div>
          </div>
          <div className="mb-8 mt-4">
            <div id="item" className="w-1/4 float-left ml-4 text-right">
              <label className="text-base capitalize font-semibold pointer" htmlFor="price">
                {t('price')}
              </label>
            </div>
            <div className='after:content-[""] after:table after:clear-both'>
              <input
                type="text"
                {...register('price', { required: 'Price is required', value: product?.price })}
                id="price"
                className="-webkit-appearance-none bg-white border border-gray-300 box-shadow-none text-gray-700 text-base capitalize font-normal py-2 px-4 transition duration-150 ease-in-out w-1/2 float-left ml-4 focus:border-blue-500 focus:outline-none"
              />
              {errors.price ? <p>{errors.price.message as string}</p> : null}
            </div>
          </div>
          <div className="mb-8 mt-4">
            <div id="item" className="w-1/4 float-left ml-4 text-right">
              <label className="text-base capitalize font-semibold pointer" htmlFor="images">
                {t('images')}
              </label>
            </div>
            <div className='after:content-[""] after:table after:clear-both'>
              <input
                type="file"
                {...register('images')}
                id="images"
                onChange={saveImage}
                className="-webkit-appearance-none bg-white border border-gray-300 box-shadow-none text-gray-700 text-base font-normal py-2 px-4 transition duration-150 ease-in-out w-1/2 float-left ml-4 focus:border-blue-500 focus:outline-none"
              />
              {errors.images ? <p>{errors.images.message as string}</p> : null}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
