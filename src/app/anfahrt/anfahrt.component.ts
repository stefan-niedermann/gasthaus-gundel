import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-anfahrt',
  templateUrl: './anfahrt.component.html',
  styleUrls: ['./anfahrt.component.less']
})
export class AnfahrtComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.setTitle('Anfahrt');
  }

}
