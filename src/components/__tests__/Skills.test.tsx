import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Skills from '../Skills';

describe('Skills', () => {
  it('renders all layer group headings', () => {
    render(<Skills />);
    expect(screen.getByText('Cloud')).toBeInTheDocument();
    expect(screen.getByText('Orchestration')).toBeInTheDocument();
    expect(screen.getByText('CI/CD')).toBeInTheDocument();
    expect(screen.getByText('Observability')).toBeInTheDocument();
  });

  it('renders AWS tool pill', () => {
    render(<Skills />);
    expect(screen.getByText('AWS')).toBeInTheDocument();
  });

  it('highlights connected tools when a tool is hovered', async () => {
    render(<Skills />);
    const awsPill = screen.getByText('AWS');
    await userEvent.hover(awsPill);
    expect(awsPill.closest('.tool-pill')).toHaveClass('active');
  });
});
