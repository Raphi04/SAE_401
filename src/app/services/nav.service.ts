import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  showNav : BehaviorSubject<boolean>;
  navActive : BehaviorSubject<string>;
  constructor() { 
    this.showNav = new BehaviorSubject(true);
    this.navActive = new BehaviorSubject("home");
  }

  changeActive(newActive : any) {
    this.navActive.next(newActive);
  }

  hide() {
    this.showNav.next(false);
  }

  display() {
    this.showNav.next(true);
  }
}
