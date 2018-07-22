import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.less']
})
export class ImpressumComponent implements OnInit {

  constructor(
    private appService: AppService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.appService.setTitle('Impressum');
    this.title.setTitle('Gasthaus Gundel - Impressum');
    this.meta.updateTag({name: 'description', content: 'Inhaltliche und technische Verantwortliche und rechtliche Informationen.'});
  }

}
