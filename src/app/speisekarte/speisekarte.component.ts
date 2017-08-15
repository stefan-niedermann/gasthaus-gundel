import { Component } from '@angular/core';
import { Kategorie, kategorien, Gericht } from "app/speisekarte/speisekarte";

@Component({
  selector: 'app-speisekarte',
  templateUrl: './speisekarte.component.html',
  styleUrls: ['./speisekarte.component.less']
})
export class SpeisekarteComponent {

  filteredKategorien: Kategorie[] = Array.apply([], kategorien);

  constructor() { }

  filter(event): void {
    const term: string = event.target.value.trim().toLowerCase();
    this.filteredKategorien = new Array<Kategorie>();
    kategorien.map((kategorie: Kategorie) => {
      const gerichteMatches: Gericht[] = kategorie.gerichte.filter((gericht: Gericht) => {
        return gericht.titel.trim().toLowerCase().indexOf(term) >= 0
          || gericht.beschreibung.trim().toLowerCase().indexOf(term) >= 0;
      });
      if (gerichteMatches.length > 0) {
        this.filteredKategorien.push({
          titel: kategorie.titel,
          gerichte: gerichteMatches
        });
      }
    });
  }
}
