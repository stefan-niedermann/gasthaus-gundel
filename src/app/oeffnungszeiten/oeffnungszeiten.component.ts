import { Component, OnInit } from '@angular/core';
import { Wochentag, oeffnungszeiten, Oeffnungszeit } from './oeffnungszeiten';
import { AppService } from '../app.service';
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
    this.meta.updateTag({ name: 'description', content: '11:00 Uhr - 14:30 Uhr, 17:00 Uhr - 00:00 Uhr, Montag Ruhetag, Warme Küche bis 22:00 Uhr' });
  }

  isOpen(): boolean {
    return true;
  }

  opensIn() {
    const currentDate: Date = new Date();
    const oeffnungszeitenHeute: Oeffnungszeit[] = this.oeffnungszeiten[currentDate.getDay()].oeffnungszeiten;

    for (const oeffnungszeiten of oeffnungszeitenHeute) {
      if (currentDate.getHours() < oeffnungszeiten.von.h) {
        return oeffnungszeiten.von.h - currentDate.getHours();
      }
    }
  }

  closesIn() {
    const currentDate: Date = new Date();
    const oeffnungszeitenHeute: Oeffnungszeit[] = this.oeffnungszeiten[currentDate.getDay()].oeffnungszeiten;

    for (const oeffnungszeiten of oeffnungszeitenHeute) {
      const bisH = oeffnungszeiten.bis ? oeffnungszeiten.bis.h : 24;
      const bisM = oeffnungszeiten.bis ? oeffnungszeiten.bis.m : 60;
      const bisDate: Date = new Date(0);
      bisDate.setHours(bisH);
      bisDate.setMinutes(bisM);
      if (
        currentDate.getHours() >= oeffnungszeiten.von.h &&
        currentDate.getMinutes() >= oeffnungszeiten.von.m &&
        currentDate < bisDate
      ) {
        const d: Date = new Date(0);
        d.setHours(bisH - currentDate.getHours());
        d.setMinutes(bisM - currentDate.getMinutes());
        return d;
      }
    }
  }
}
