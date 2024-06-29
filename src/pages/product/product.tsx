import React from 'react';
import { useForm } from 'react-hook-form';

const Product: React.FC = () => {
  const {
    formState: { errors, isSubmitting, isSubmitSuccessful },

    handleSubmit,
    register,
    reset,
  } = useForm();
  const onSubmit = (values: any) => {
    console.log({ isSubmitting, values });
    if (isSubmitSuccessful) reset();
  };

  return (
    <div className="shadow-primary-light my-4 mx-6">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-4">
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-2">
            Name
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
            Description
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
            Price
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
            Images
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
        <button
          type="submit"
          name={isSubmitting ? 'Sending...' : 'Send'}
          role="button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Product;
