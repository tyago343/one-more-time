import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../productForm';
import '@testing-library/jest-dom';
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
  const user = userEvent.setup();

  user.click(screen.getByRole('button', { name: /send/i }));
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
  const user = userEvent.setup();

  user.type(screen.getByLabelText(/name/i), 'Product');
  user.type(screen.getByLabelText(/description/i), 'A great product');
  user.type(screen.getByLabelText(/price/i), '100');
  const file = new File(['image'], 'image.png', { type: 'image/png' });
  user.upload(screen.getByLabelText(/images/i), [file]);
  user.click(screen.getByRole('button', { name: /send/i }));
  await waitFor(() => {
    expect(screen.getByRole('button', { name: /sending.../i })).toBeDisabled();
  });
});

test('submits form data correctly', async () => {
  render(<Form />);
  const user = userEvent.setup();

  user.type(screen.getByLabelText(/name/i), 'Product');
  user.type(screen.getByLabelText(/description/i), 'A great product');
  user.type(screen.getByLabelText(/price/i), '100');
  const file = new File(['image'], 'image.png', { type: 'image/png' });
  user.upload(screen.getByLabelText(/images/i), [file]);

  user.click(screen.getByRole('button', { name: /send/i }));
  await waitFor(() => {
    expect(screen.queryByText(/sending.../i)).not.toBeInTheDocument();
  });
  expect(screen.getByLabelText(/name/i)).toHaveValue('');
  expect(screen.getByLabelText(/description/i)).toHaveValue('');
  expect(screen.getByLabelText(/price/i)).toHaveValue(null);
  expect(screen.getByLabelText(/images/i)).toHaveValue('');
});
