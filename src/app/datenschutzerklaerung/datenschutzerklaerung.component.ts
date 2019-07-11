import { AppService } from '..//app.service';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
	selector: 'app-datenschutzerklaerung',
	templateUrl: './datenschutzerklaerung.component.html',
	styleUrls: ['./datenschutzerklaerung.component.scss']
})
export class DatenschutzerklaerungComponent implements OnInit {

	constructor(
		private appService: AppService,
		private title: Title,
		private meta: Meta
	) { }

	ngOnInit() {
		this.appService.setTitle('Datenschutzerklärung');
		this.title.setTitle('Gasthaus Gundel - Datenschutzerklärung');
		this.meta.updateTag({name: 'description', content: 'Datenschutzerklärung im Sinne der Europäischen Datenschutzgrundverordnung.'});
	}

}
