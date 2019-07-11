import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute, RoutesRecognized } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AppService {

  title: BehaviorSubject<string> = new BehaviorSubject<string>('Gasthaus Gundel');

  getTitle(): string {
    return this.title.getValue();
  }

  setTitle(title: string) {
    return this.title.next(title);
  }

  getSeason() {
    const month = new Date().getMonth() + 1;
    switch (month) {
      case 12:
      case 1:
      case 2:
        return 'winter';
      case 3:
      case 4:
      case 5:
        return 'spring';
      case 6:
      case 7:
      case 8:
        return 'summer';
      default:
        return 'autumn';
    }
  }
}
