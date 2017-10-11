import { Component, OnInit } from '@angular/core';
import { Kategorie, kategorien, Gericht } from "app/speisekarte/speisekarte";
import { AppService } from 'app/app.service';
import { SpeisekarteService } from 'app/speisekarte/speisekarte.service';

@Component({
	selector: 'app-speisekarte',
	templateUrl: './speisekarte.component.html',
	styleUrls: ['./speisekarte.component.less']
})
export class SpeisekarteComponent implements OnInit {

	filteredKategorien: Kategorie[] = Array.apply([], kategorien);

	constructor(
		private appService: AppService,
		private speisekarteService: SpeisekarteService
	) { }

	ngOnInit(): void {
		this.appService.setTitle('Speisekarte');
	}

	filter(event): void {
		this.filteredKategorien = this.speisekarteService.filter(event.target.value);
	}
}
