import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // เพิ่มการนำเข้า matcher ที่นี่
import AppLayout from '@/components/Layout';

describe('AppLayout', () => {
  it('renders the header with the correct text', () => {
    render(<AppLayout>Test Content</AppLayout>);
    const headerElement = screen.getByText(/Vending Machine/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the children content', () => {
    render(<AppLayout>Test Content</AppLayout>);
    const contentElement = screen.getByText(/Test Content/i);
    expect(contentElement).toBeInTheDocument();
  });
});
