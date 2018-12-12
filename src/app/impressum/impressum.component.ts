import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AppService } from '../app.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
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
