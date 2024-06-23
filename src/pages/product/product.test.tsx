import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form from './product';

test('renders form with all fields and submit button', () => {
  render(<Form />);
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/price/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/images/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
});

test('displays validation errors when fields are empty', async () => {
  render(<Form />);
  fireEvent.submit(screen.getByRole('button', { name: /send/i }));
  await waitFor(() => {
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/description is required/i)).toBeInTheDocument();
    expect(screen.getByText(/price is required/i)).toBeInTheDocument();
    expect(
      screen.getByText(/at least one image is required/i)
    ).toBeInTheDocument();
  });
});

test('disables submit button and shows loader while submitting', async () => {
  render(<Form />);
  fireEvent.input(screen.getByLabelText(/name/i), {
    target: { value: 'Product' },
  });
  fireEvent.input(screen.getByLabelText(/description/i), {
    target: { value: 'A great product' },
  });
  fireEvent.input(screen.getByLabelText(/price/i), {
    target: { value: '100' },
  });
  const file = new File(['image'], 'image.png', { type: 'image/png' });
  fireEvent.change(screen.getByLabelText(/images/i), {
    target: { files: [file] },
  });
  fireEvent.submit(screen.getByRole('button', { name: /send/i }));

  await waitFor(() => {
    expect(screen.getByRole('button', { name: /sending.../i })).toBeDisabled();
  });
});

test('submits form data correctly', async () => {
  render(<Form />);
  fireEvent.input(screen.getByLabelText(/name/i), {
    target: { value: 'Product' },
  });
  fireEvent.input(screen.getByLabelText(/description/i), {
    target: { value: 'A great product' },
  });
  fireEvent.input(screen.getByLabelText(/price/i), {
    target: { value: '100' },
  });
  const file = new File(['image'], 'image.png', { type: 'image/png' });
  fireEvent.change(screen.getByLabelText(/images/i), {
    target: { files: [file] },
  });

  fireEvent.submit(screen.getByRole('button', { name: /send/i }));

  await waitFor(() => {
    expect(screen.queryByText(/sending.../i)).not.toBeInTheDocument();
  });

  expect(screen.getByLabelText(/name/i)).toHaveValue('');
  expect(screen.getByLabelText(/description/i)).toHaveValue('');
  expect(screen.getByLabelText(/price/i)).toHaveValue(null);
  expect(screen.getByLabelText(/images/i)).toHaveValue('');
});
