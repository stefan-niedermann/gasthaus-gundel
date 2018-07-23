import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(
    private appService: AppService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.appService.setTitle('Gasthaus Gundel');
		this.title.setTitle('Gasthaus Gundel - Barthelmesaurach');
		this.meta.updateTag({name: 'description', content: '☎ Tel.: 09178 / 1503 - Lassen Sie sich verwöhnen mit fränkischen, griechischen und saisonalen Spezialitäten in gemütlichen Räumen'});

  }

}
