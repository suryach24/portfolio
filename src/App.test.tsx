import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio app without crashing', () => {
  render(<App />);
  const headings = screen.getAllByText(/Surya Chandra/i);
  expect(headings.length).toBeGreaterThan(0);
});
