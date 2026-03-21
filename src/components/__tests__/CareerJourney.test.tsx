import { render, screen } from '@testing-library/react';
import CareerJourney from '../CareerJourney';

describe('CareerJourney', () => {
  it('renders all 5 companies in timeline', () => {
    render(<CareerJourney />);
    expect(screen.getByText('InvoiceCloud')).toBeInTheDocument();
    expect(screen.getByText('Verizon')).toBeInTheDocument();
    expect(screen.getByText('Ally Financial')).toBeInTheDocument();
    expect(screen.getByText('Humana Inc.')).toBeInTheDocument();
    expect(screen.getByText('Coyote Logistics')).toBeInTheDocument();
  });

  it('renders Coyote crown jewel badge', () => {
    render(<CareerJourney />);
    expect(screen.getByText(/Crown Jewel/i)).toBeInTheDocument();
  });

  it('renders all 5 industry domain cards', () => {
    render(<CareerJourney />);
    expect(screen.getByText('Supply Chain')).toBeInTheDocument();
    expect(screen.getByText('Healthcare')).toBeInTheDocument();
    expect(screen.getByText('FinTech')).toBeInTheDocument();
    expect(screen.getByText('Telecom')).toBeInTheDocument();
    expect(screen.getByText('Payments SaaS')).toBeInTheDocument();
  });

  it('renders the differentiator tagline', () => {
    render(<CareerJourney />);
    expect(screen.getByText(/5 industries\. 1 engineer\./i)).toBeInTheDocument();
  });
});
