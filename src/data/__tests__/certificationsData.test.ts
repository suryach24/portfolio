import { certifications } from '../certificationsData';

describe('certificationsData', () => {
  it('has exactly 8 certifications', () => {
    expect(certifications).toHaveLength(8);
  });

  it('each cert has required fields', () => {
    certifications.forEach(cert => {
      expect(cert.name).toBeTruthy();
      expect(cert.provider).toBeTruthy();
      expect(cert.imageFile).toBeTruthy();
      expect(['aws', 'azure', 'other']).toContain(cert.providerType);
      expect(cert.meaning).toBeTruthy();
    });
  });
});
