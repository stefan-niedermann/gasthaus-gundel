import { Component, OnInit } from '@angular/core';
import { Wochentag, oeffnungszeiten } from "app/oeffnungszeiten/oeffnungszeiten";

@Component({
  selector: 'app-oeffnungszeiten',
  templateUrl: './oeffnungszeiten.component.html',
  styleUrls: ['./oeffnungszeiten.component.less']
})
export class OeffnungszeitenComponent implements OnInit {

  oeffnungszeiten: Wochentag[] = oeffnungszeiten;

  constructor() { }

  ngOnInit() {
  }

}
