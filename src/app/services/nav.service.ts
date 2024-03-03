import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  showNav : BehaviorSubject<boolean>
  constructor() { 
    this.showNav = new BehaviorSubject(true);
  }

  hide() {
    this.showNav.next(false);
  }

  display() {
    this.showNav.next(true);
  }
}
