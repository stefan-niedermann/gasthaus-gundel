import { AppService } from './app.service';
import { Component, ViewChild, HostListener, AfterViewInit, OnDestroy, OnInit, ElementRef } from '@angular/core';
import { MdSidenav } from "@angular/material";
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Angulartics2Piwik } from 'angulartics2';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

	routerSubscription: Subscription;

	@ViewChild(MdSidenav) sidenav: MdSidenav;
	@ViewChild('main') main: ElementRef;

	constructor(
		private router: Router,
		private angulartics2Piwik: Angulartics2Piwik,
		public appService: AppService
	) { }

	ngOnInit(): void {
		this.routerSubscription = this.router.events.subscribe((event: NavigationEnd) => {
			if (event instanceof NavigationEnd) {
				this.main.nativeElement.scrollTo(0, 0);
			}
		});
	}

	ngAfterViewInit(): void {
		this.onResize({ target: window });
	}

	ngOnDestroy(): void {
		this.routerSubscription.unsubscribe();
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
