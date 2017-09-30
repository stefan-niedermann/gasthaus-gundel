import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.setTitle('Home');
  }

}
