import { Component, OnInit } from '@angular/core';
import { Kategorie, kategorien } from "app/speisekarte/speisekarte";

@Component({
  selector: 'app-speisekarte',
  templateUrl: './speisekarte.component.html',
  styleUrls: ['./speisekarte.component.less']
})
export class SpeisekarteComponent implements OnInit {

  kategorien: Kategorie[] = kategorien

  constructor() { }

  ngOnInit() {
  }

}
