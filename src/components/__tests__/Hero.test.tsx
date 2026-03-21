import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders name', () => {
    render(<Hero />);
    expect(screen.getByText(/Surya Chandra Kukunuri/i)).toBeInTheDocument();
  });

  it('renders tagline', () => {
    render(<Hero />);
    expect(screen.getByText(/doesn't page you at 3am/i)).toBeInTheDocument();
  });

  it('renders all 4 stat counters', () => {
    render(<Hero />);
    expect(screen.getByText('7+')).toBeInTheDocument();
    expect(screen.getByText('8×')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('25+')).toBeInTheDocument();
  });

  it('renders View My Work CTA', () => {
    render(<Hero />);
    expect(screen.getByText(/View My Work/i)).toBeInTheDocument();
  });
});
