import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PaymentPage from '@/components/Payment';

describe('Payment', () => {
  it('renders the Payment component without crashing', () => {
    render(<PaymentPage />);
    expect(screen.getByText(/Payment for/i)).toBeInTheDocument();
  });
});
