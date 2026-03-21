import { render, screen } from '@testing-library/react';
import WarStories from '../WarStories';

describe('WarStories', () => {
  it('renders all 3 case study titles', () => {
    render(<WarStories />);
    expect(screen.getByText(/Coyote Logistics/i)).toBeInTheDocument();
    expect(screen.getByText(/Humana/i)).toBeInTheDocument();
    expect(screen.getByText(/Ally Financial/i)).toBeInTheDocument();
  });

  it('renders Problem field labels', () => {
    render(<WarStories />);
    const problems = screen.getAllByText(/Problem/i);
    expect(problems.length).toBe(3);
  });
});
