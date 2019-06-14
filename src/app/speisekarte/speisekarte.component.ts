import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Kategorie, kategorien } from 'app/speisekarte/speisekarte';
import { AppService } from 'app/app.service';
import { SpeisekarteService } from 'app/speisekarte/speisekarte.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-speisekarte',
  templateUrl: './speisekarte.component.html',
  styleUrls: ['./speisekarte.component.scss']
})
export class SpeisekarteComponent implements OnInit {

  @ViewChild('filterInput') filterInput: ElementRef<HTMLInputElement>;
  filteredKategorien: Kategorie[] = Array.apply([], kategorien);

  constructor(
    private appService: AppService,
    private meta: Meta,
    private title: Title,
    private speisekarteService: SpeisekarteService
  ) { }

  ngOnInit(): void {
    this.appService.setTitle('Speisekarte');
    this.title.setTitle('Gasthaus Gundel - Speisekarte');
    this.meta.updateTag({name: 'description', content: 'Fränkischen, griechischen und saisonalen Spezialitäten, wie Souvlaki, Karpfen, Salate, diverse Grillplatten, Kalamaria und viele mehr.'});
  }

  filter(event): void {
    this.filteredKategorien = this.speisekarteService.filter(event.target.value);
  }

  @HostListener('window:keydown.control.f', ['$event'])
  focus($event: KeyboardEvent) {
    $event.preventDefault();
    this.filterInput.nativeElement.focus();
  }
}
