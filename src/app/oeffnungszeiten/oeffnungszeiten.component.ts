import { Component, OnInit } from '@angular/core';
import { Wochentag, oeffnungszeiten, Oeffnungszeit } from 'app/oeffnungszeiten/oeffnungszeiten';
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
    const oeffnungszeitenHeute: Oeffnungszeit[] = this.oeffnungszeiten[currentDate.getDay()].oeffnungszeiten;
    for (let i = 0; i < oeffnungszeitenHeute.length; i++) {
      if (currentDate.getHours() < oeffnungszeitenHeute[i].von.h) {
        return oeffnungszeitenHeute[i].von.h - currentDate.getHours();
      }
    }
  }

  closesIn() {
    const currentDate: Date = new Date();
    const oeffnungszeitenHeute: Oeffnungszeit[] = this.oeffnungszeiten[currentDate.getDay()].oeffnungszeiten;
    for (let i = 0; i < oeffnungszeitenHeute.length; i++) {
      const bisH = oeffnungszeitenHeute[i].bis ? oeffnungszeitenHeute[i].bis.h : 24;
      const bisM = oeffnungszeitenHeute[i].bis ? oeffnungszeitenHeute[i].bis.m : 60;
      const bisDate: Date = new Date(0);
      bisDate.setHours(bisH);
      bisDate.setMinutes(bisM);
      if (
        currentDate.getHours() >= oeffnungszeitenHeute[i].von.h &&
        currentDate.getMinutes() >= oeffnungszeitenHeute[i].von.m &&
        currentDate < bisDate
      ) {
        const d: Date = new Date(0);
        d.setHours(bisH - currentDate.getHours());
        d.setMinutes(bisM - currentDate.getMinutes())
        return d;
      }
    }
  }
}
