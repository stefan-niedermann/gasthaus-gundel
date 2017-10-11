import { Injectable } from '@angular/core';
import { kategorien, Kategorie, Gericht } from 'app/speisekarte/speisekarte';

@Injectable()
export class SpeisekarteService {

  kategorien: Kategorie[] = kategorien;

  constructor() { }

  filter(value): Kategorie[] {
    const filteredKategorien = new Array<Kategorie>();
    const term: string = value.trim().toLowerCase();
    kategorien.map((kategorie: Kategorie) => {
      const gerichteMatches: Gericht[] = kategorie.gerichte.filter((gericht: Gericht) => {
        return gericht.titel.trim().toLowerCase().indexOf(term) >= 0
          || gericht.beschreibung.trim().toLowerCase().indexOf(term) >= 0;
      });
      if (gerichteMatches.length > 0) {
        filteredKategorien.push({
          titel: kategorie.titel,
          graphik: kategorie.graphik,
          gerichte: gerichteMatches
        });
      }
    });
    return filteredKategorien;
  }
}
