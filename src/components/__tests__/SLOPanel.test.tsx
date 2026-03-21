import { render, screen } from '@testing-library/react';
import SLOPanel from '../SLOPanel';

describe('SLOPanel', () => {
  it('renders operational status', () => {
    render(<SLOPanel />);
    expect(screen.getByText(/ALL SYSTEMS OPERATIONAL/i)).toBeInTheDocument();
  });

  it('renders availability pill', () => {
    render(<SLOPanel />);
    expect(screen.getByText(/Open to Opportunities/i)).toBeInTheDocument();
  });

  it('renders response SLO pill', () => {
    render(<SLOPanel />);
    expect(screen.getByText(/Response SLO/i)).toBeInTheDocument();
  });

  it('renders P0 incidents pill', () => {
    render(<SLOPanel />);
    expect(screen.getByText(/P0 Incidents/i)).toBeInTheDocument();
  });
});
