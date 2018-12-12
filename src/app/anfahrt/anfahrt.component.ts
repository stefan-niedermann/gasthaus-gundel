import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-anfahrt',
  templateUrl: './anfahrt.component.html',
  styleUrls: ['./anfahrt.component.scss']
})
export class AnfahrtComponent implements OnInit {

  constructor(
    private appService: AppService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.appService.setTitle('Anfahrt');
    this.title.setTitle('Gasthaus Gundel - Anfahrt');
    this.meta.updateTag({name: 'description', content: 'Nördlinger Straße 14, 91126 Barthelmesaurach, via B466'});
  }
  
}
