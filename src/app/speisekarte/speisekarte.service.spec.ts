import { TestBed, inject } from '@angular/core/testing';

import { SpeisekarteService } from './speisekarte.service';
import { kategorien, Kategorie } from 'app/speisekarte/speisekarte';

describe('SpeisekarteService', () => {

  const alleKategorien: Kategorie[] = kategorien;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeisekarteService]
    });
  });

  it('should be created', inject([SpeisekarteService], (service: SpeisekarteService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an all entries when filtering for ""', inject([SpeisekarteService], (service: SpeisekarteService) => {
    const result: Kategorie[] = service.filter('');
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toBe(alleKategorien.length);
  }));

  it('should return three entries when filtering for "bohnen"', inject([SpeisekarteService], (service: SpeisekarteService) => {
    const result: Kategorie[] = service.filter('bohnen');
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toBe(3);
  }));

  it('should return an empty array when filtering for "&%$"', inject([SpeisekarteService], (service: SpeisekarteService) => {
    const result: Kategorie[] = service.filter('&%$');
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toBe(0);
  }));
});
