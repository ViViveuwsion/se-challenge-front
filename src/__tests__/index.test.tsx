import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IndexPage from '@/pages';

describe('IndexPage', () => {
  it('renders the IndexPage without crashing', () => {
    render(<IndexPage />);
    expect(screen.getByText(/All Products/i)).toBeInTheDocument();
  });
});
