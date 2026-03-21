import { careerEntries, domainCards } from '../careerData';

describe('careerData', () => {
  it('has exactly 5 career entries', () => {
    expect(careerEntries).toHaveLength(5);
  });

  it('each entry has required fields', () => {
    careerEntries.forEach(entry => {
      expect(entry.company).toBeTruthy();
      expect(entry.role).toBeTruthy();
      expect(entry.period).toBeTruthy();
      expect(entry.industry).toBeTruthy();
      expect(entry.achievement).toBeTruthy();
      expect(Array.isArray(entry.tags)).toBe(true);
      expect(entry.tags.length).toBeGreaterThan(0);
    });
  });

  it('has exactly 5 domain cards', () => {
    expect(domainCards).toHaveLength(5);
  });

  it('Coyote Logistics entry is marked as crown jewel', () => {
    const coyote = careerEntries.find(e => e.company === 'Coyote Logistics');
    expect(coyote?.isCrownJewel).toBe(true);
  });
});
