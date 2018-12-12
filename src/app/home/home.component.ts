import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { Meta, Title } from '@angular/platform-browser';
import { Angulartics2Piwik } from 'angulartics2/piwik';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private appService: AppService,
    private title: Title,
    private meta: Meta,
    private angulartics2Piwik: Angulartics2Piwik,
    private router: Router
  ) { }

  ngOnInit() {
    this.appService.setTitle('Gasthaus Gundel');
    this.title.setTitle('Gasthaus Gundel - Barthelmesaurach');
    this.meta.updateTag({ name: 'description', content: '☎ Tel.: 09178 / 1503 - Lassen Sie sich verwöhnen mit fränkischen, griechischen und saisonalen Spezialitäten in gemütlichen Räumen' });

  }

  trackPhoneCall($event: MouseEvent) {
    this.angulartics2Piwik.eventTrack('phoneCall', {
      'url': this.router.url,
      'number': ($event.target as HTMLAnchorElement).getAttribute('href')
    });
  }

}
