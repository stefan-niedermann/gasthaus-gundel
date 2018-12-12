import { Component, OnInit } from '@angular/core';
import { Wochentag, oeffnungszeiten, Oeffnungszeit } from 'app/oeffnungszeiten/oeffnungszeiten';
import { AppService } from 'app/app.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-oeffnungszeiten',
  templateUrl: './oeffnungszeiten.component.html',
  styleUrls: ['./oeffnungszeiten.component.scss']
})
export class OeffnungszeitenComponent implements OnInit {

  oeffnungszeiten: Wochentag[] = oeffnungszeiten;

  constructor(
    private appService: AppService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.appService.setTitle('Öffnungszeiten');
    this.title.setTitle('Gasthaus Gundel - Öffnungszeiten');
    this.meta.updateTag({name: 'description', content: '11:00 Uhr - 14:30 Uhr, 17:00 Uhr - 00:00 Uhr, Montag Ruhetag, Warme Küche bis 22:00 Uhr'});
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
