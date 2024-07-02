import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../productList';
import '@testing-library/jest-dom';

describe('Product list component', () => {
  test('Show header with four columns (name, price, img, actions) and a message when no products available', () => {
    render(<ProductList products={[]} />);
    const header = screen.getByRole('heading', { name: 'tableheader' });
    expect(header).toBeInTheDocument();
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/price/i)).toBeInTheDocument();
    expect(screen.getByText(/edit/i)).toBeInTheDocument();
    expect(screen.getByText(/no products available/i)).toBeInTheDocument();
  });
  test('Show header with four columns (name, price, img, actions) and a message when no products available', () => {
    const products = [
      {
        name: 'Product 1',
        description: 'Product description',
        price: 10,
        image: 'https://picsum.photos/200/300',
      },
      {
        name: 'Product 2',
        description: 'Product description 2',
        price: 22,
        image: 'https://picsum.photos/200/300',
      },
    ];
    render(<ProductList products={products} />);
    const header = screen.getByRole('heading', { name: 'tableheader' });
    expect(header).toBeInTheDocument();
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/price/i)).toBeInTheDocument();
    expect(screen.getByText(/edit/i)).toBeInTheDocument();
    expect(screen.getByText(/no products available/i)).not.toBeInTheDocument();
    expect(screen.getByText(/product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/22/i)).toBeInTheDocument();
  });
});
