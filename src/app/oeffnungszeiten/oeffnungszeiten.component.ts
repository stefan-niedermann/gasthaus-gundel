import { Component, OnInit } from '@angular/core';
import { Wochentag, oeffnungszeiten, Oeffnungszeit } from "app/oeffnungszeiten/oeffnungszeiten";
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-oeffnungszeiten',
  templateUrl: './oeffnungszeiten.component.html',
  styleUrls: ['./oeffnungszeiten.component.less']
})
export class OeffnungszeitenComponent implements OnInit {

  oeffnungszeiten: Wochentag[] = oeffnungszeiten;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.setTitle('Öffnungszeiten');
  }

  isOpen(): boolean {
    return true;
  }

  opensIn() {
    const currentDate: Date = new Date();
    const oeffnungszeiten: Oeffnungszeit[] = this.oeffnungszeiten[currentDate.getDay()].oeffnungszeiten;
    for (let i = 0; i < oeffnungszeiten.length; i++) {
      if (currentDate.getHours() < oeffnungszeiten[i].von.h) {
        return oeffnungszeiten[i].von.h - currentDate.getHours();
      }
    }
  }

  closesIn() {
    const currentDate: Date = new Date();
    const oeffnungszeiten: Oeffnungszeit[] = this.oeffnungszeiten[currentDate.getDay()].oeffnungszeiten;
    for (let i = 0; i < oeffnungszeiten.length; i++) {
      let bisH = oeffnungszeiten[i].bis ? oeffnungszeiten[i].bis.h : 24;
      let bisM = oeffnungszeiten[i].bis ? oeffnungszeiten[i].bis.m : 60;
      let bisDate: Date = new Date(0);
      bisDate.setHours(bisH);
      bisDate.setMinutes(bisM);
      if (
        currentDate.getHours() >= oeffnungszeiten[i].von.h &&
        currentDate.getMinutes() >= oeffnungszeiten[i].von.m &&
        currentDate < bisDate
      ) {
        let d: Date = new Date(0);
        d.setHours(bisH - currentDate.getHours());
        d.setMinutes(bisM - currentDate.getMinutes())
        return d;
      }
    }
  }
}
