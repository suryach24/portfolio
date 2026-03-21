import { render, screen } from '@testing-library/react';
import Certifications from '../Certifications';

describe('Certifications', () => {
  it('renders exactly 8 cert cards', () => {
    const { container } = render(<Certifications />);
    const cards = container.querySelectorAll('.cert-card');
    expect(cards).toHaveLength(8);
  });

  it('renders CKA certification', () => {
    render(<Certifications />);
    expect(screen.getByText(/Certified Kubernetes Administrator/i)).toBeInTheDocument();
  });

  it('renders Terraform cert', () => {
    render(<Certifications />);
    expect(screen.getByText(/Terraform Associate/i)).toBeInTheDocument();
  });
});
