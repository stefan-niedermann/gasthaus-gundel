import { Component, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { MdSidenav } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MdSidenav) sidenav: MdSidenav;

  ngAfterViewInit(): void {
    this.onResize({ target: window });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.screen.width > 768) {
      this.sidenav.mode = 'side';
      this.sidenav.open();
    } else {
      this.sidenav.mode = 'over';
      this.sidenav.close();
    }
  }

  closeSidenavOnNavigate(): void {
    if (window.screen.width <= 768) {
      this.sidenav.close();
    }
  }
}
