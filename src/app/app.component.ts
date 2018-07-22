import { AppService } from './app.service';
import { Component, ViewChild, HostListener, AfterViewInit, OnDestroy, OnInit, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { Angulartics2Piwik } from 'angulartics2/piwik';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  routerSubscription: Subscription;

  @ViewChild(MatSidenav) sidenav: MatSidenav;
  @ViewChild('main') main: ElementRef;

  constructor(
    private router: Router,
    private angulartics2Piwik: Angulartics2Piwik,
    private metaService: MetaService,
    public appService: AppService
  ) { }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        try {
          if (this.main.nativeElement.scrollTo) {
            this.main.nativeElement.scrollTo(0, 0);
          } else {
            this.main.nativeElement.scrollTop = 0;
          }
        } catch (e) { } // Fall silently if not supported
      }
    });
  }

  ngAfterViewInit(): void {
    this.onResize({ target: window });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  swipeRight(): void {
    this.sidenav.open();
  }

  swipeLeft(): void {
    this.sidenav.close();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    setTimeout(() => {
      if (event.target.screen.width > 768) {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      } else {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
    });
  }

  closeSidenavOnNavigate(): void {
    if (window.screen.width <= 768) {
      this.sidenav.close();
    }
  }
}
