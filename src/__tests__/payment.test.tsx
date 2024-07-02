import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PaymentPage from '@/pages/payment';

describe('PaymentPage', () => {
  it('renders the PaymentPage without crashing', () => {
    render(<PaymentPage />);
    expect(screen.getByText(/Payment for/i)).toBeInTheDocument();
  });
});
