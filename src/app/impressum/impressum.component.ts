import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.less']
})
export class ImpressumComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.setTitle('Impressum');
  }

}
