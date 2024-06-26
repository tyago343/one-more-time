import React, { useEffect } from 'react';
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
    // reset();
  };
  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name ? <p>{errors.name.message as string}</p> : null}
        <label htmlFor="description">Description</label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          id="description"
        />
        {errors.description ? (
          <p>{errors.description.message as string}</p>
        ) : null}

        <label htmlFor="price">Price</label>
        <input
          type="number"
          {...register('price', { required: 'Price is required' })}
          id="price"
        />
        {errors.price ? <p>{errors.price.message as string}</p> : null}

        <label htmlFor="images">Images</label>
        <input
          type="file"
          {...register('images', {
            required: 'at least one image is required',
          })}
          id="images"
        />
        {errors.images ? <p>{errors.images.message as string}</p> : null}

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
