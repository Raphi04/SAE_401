import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  showHeader : BehaviorSubject<boolean>;
  constructor() { 
    this.showHeader = new BehaviorSubject(true);
  }

  hide() {
    this.showHeader.next(false);
  }

  display() {
    this.showHeader.next(true);
  }
}
