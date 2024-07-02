import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from '@/components/ProductList';

describe('ProductList', () => {
  const products = [
    { id: 1, name: 'Product 1', price: 100, stock: 10, category: 'Category 1' },
    { id: 2, name: 'Product 2', price: 200, stock: 20, category: 'Category 2' },
  ];

  const handleSelect = jest.fn();

  it('renders the ProductList component without crashing', () => {
    render(<ProductList products={products} onSelect={handleSelect} />);
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
  });
});
