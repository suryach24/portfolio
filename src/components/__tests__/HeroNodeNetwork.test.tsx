import { render } from '@testing-library/react';
import HeroNodeNetwork from '../HeroNodeNetwork';

describe('HeroNodeNetwork', () => {
  it('renders an SVG element', () => {
    const { container } = render(<HeroNodeNetwork />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders circle elements as nodes', () => {
    const { container } = render(<HeroNodeNetwork />);
    const circles = container.querySelectorAll('circle');
    expect(circles.length).toBeGreaterThanOrEqual(15);
  });
});
