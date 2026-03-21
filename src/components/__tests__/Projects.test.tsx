import { render, screen } from '@testing-library/react';
import Projects from '../Projects';

describe('Projects', () => {
  it('renders all 3 project titles', () => {
    render(<Projects />);
    expect(screen.getByText(/DTSS/i)).toBeInTheDocument();
    expect(screen.getByText(/DALL-E/i)).toBeInTheDocument();
    expect(screen.getByText(/Pricewise/i)).toBeInTheDocument();
  });

  it('renders Live badge for live projects', () => {
    render(<Projects />);
    const liveBadges = screen.getAllByText(/● Live/i);
    expect(liveBadges.length).toBe(2);
  });

  it('renders GitHub Only badge for non-live projects', () => {
    render(<Projects />);
    expect(screen.getByText(/GitHub Only/i)).toBeInTheDocument();
  });
});
