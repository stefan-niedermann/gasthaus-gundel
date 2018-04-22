import { AppService } from 'app/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-datenschutzerklaerung',
	templateUrl: './datenschutzerklaerung.component.html',
	styleUrls: ['./datenschutzerklaerung.component.less']
})
export class DatenschutzerklaerungComponent implements OnInit {

	constructor(private appService: AppService) { }

	ngOnInit() {
		this.appService.setTitle('Datenschutzerklärung');
	}

}
