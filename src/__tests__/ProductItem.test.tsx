import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductItem from '@/components/ProductItem';

describe('ProductItem', () => {
  const product = {
    id: 1,
    name: 'Product 1',
    price: 100,
    stock: 10,
    category: 'Category 1',
  };

  const handleSelect = jest.fn();

  it('renders the ProductItem component without crashing', () => {
    render(<ProductItem product={product} onSelect={handleSelect} />);
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/100 THB/i)).toBeInTheDocument();
  });
});
