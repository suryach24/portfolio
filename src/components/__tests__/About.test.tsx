import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About', () => {
  it('renders approved bio text', () => {
    render(<About />);
    expect(screen.getByText(/on-call rotations quiet/i)).toBeInTheDocument();
  });

  it('renders all 4 expertise cards', () => {
    render(<About />);
    expect(screen.getByText('Automation')).toBeInTheDocument();
    expect(screen.getByText('Infrastructure Building')).toBeInTheDocument();
    expect(screen.getByText('Platform Reliability')).toBeInTheDocument();
    expect(screen.getByText(/Deployment/i)).toBeInTheDocument();
  });
});
